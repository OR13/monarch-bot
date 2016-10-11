
var builder = require('botbuilder');

var rp = require('request-promise');

export class HackerNewsService {

    public static topStories = function () {
        return rp('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
    }

    public static item = function (item_id: string) {
        return rp('https://hacker-news.firebaseio.com/v0/item/' + item_id + '.json?print=pretty')
    }

    public static getRandomTopStory = function () {
        //  return this.item(1)
        return this.topStories()
            .then((result) => {
                // Process result... 
                var item_id = result[Math.floor(Math.random() * result.length)];

                return this.item(item_id)
            })
            .catch((err) => {
                // Crawling failed... 
            });

    }

}




