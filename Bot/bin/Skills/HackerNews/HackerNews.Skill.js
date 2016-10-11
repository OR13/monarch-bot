"use strict";
var builder = require('botbuilder');
var HackerNews_Intent_1 = require('./HackerNews.Intent');
var HackerNews_Dialog_1 = require('./HackerNews.Dialog');
var HackerNewsSkill = (function () {
    function HackerNewsSkill() {
    }
    HackerNewsSkill.Dialogs = {
        Random: '/Random',
        ReadComments: '/ReadComments'
    };
    HackerNewsSkill.Intents = {
        Random: /^Random/i,
        ReadComments: /^ReadComments/i,
    };
    HackerNewsSkill.register = function (bot, intents) {
        // A Skill is a mapping of Intents to Dialogs
        // When I say 'Random' I want the 'RandomDialog'
        HackerNews_Intent_1.HackerNewsIntent.register(bot, intents);
        HackerNews_Dialog_1.HackerNewsDialog.register(bot, intents);
    };
    return HackerNewsSkill;
}());
exports.HackerNewsSkill = HackerNewsSkill;
//# sourceMappingURL=HackerNews.Skill.js.map