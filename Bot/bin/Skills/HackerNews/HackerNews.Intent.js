"use strict";
var builder = require('botbuilder');
var HackerNews_Skill_1 = require('./HackerNews.Skill');
var HackerNewsIntent = (function () {
    function HackerNewsIntent() {
    }
    HackerNewsIntent.register = function (bot, intents) {
        // When I say 'Random' I want the 'RandomDialog'
        intents.matches(HackerNews_Skill_1.HackerNewsSkill.Intents.Random, [
            function (session) {
                session.beginDialog(HackerNews_Skill_1.HackerNewsSkill.Dialogs.Random);
            }
        ]);
        intents.onDefault([
            function (session, args, next) {
                session.beginDialog(HackerNews_Skill_1.HackerNewsSkill.Dialogs.Random);
                //                  session.send(
                // `
                // Here's what I can do: 
                // say 'Random'  for a random hacker news article.
                // `
                //                  );
            }
        ]);
    };
    return HackerNewsIntent;
}());
exports.HackerNewsIntent = HackerNewsIntent;
//# sourceMappingURL=HackerNews.Intent.js.map