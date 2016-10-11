"use strict";
var builder = require('botbuilder');
var rp = require('request-promise');
var HackerNewsService = (function () {
    function HackerNewsService() {
    }
    HackerNewsService.topStories = function () {
        return rp('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty');
    };
    HackerNewsService.item = function (item_id) {
        return rp('https://hacker-news.firebaseio.com/v0/item/' + item_id + '.json?print=pretty');
    };
    HackerNewsService.getRandomTopStory = function () {
        var _this = this;
        //  return this.item(1)
        return this.topStories()
            .then(function (result) {
            // Process result... 
            var item_id = result[Math.floor(Math.random() * result.length)];
            return _this.item(item_id);
        })
            .catch(function (err) {
            // Crawling failed... 
        });
    };
    return HackerNewsService;
}());
exports.HackerNewsService = HackerNewsService;
//# sourceMappingURL=HackerNews.Service.js.map