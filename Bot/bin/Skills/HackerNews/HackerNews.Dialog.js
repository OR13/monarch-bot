"use strict";
var builder = require('botbuilder');
var HackerNews_Service_1 = require('./HackerNews.Service');
var HackerNews_Skill_1 = require('./HackerNews.Skill');
var HackerNewsDialog = (function () {
    function HackerNewsDialog() {
    }
    HackerNewsDialog.register = function (bot, intents) {
        bot.dialog(HackerNews_Skill_1.HackerNewsSkill.Dialogs.Random, [
            function (session) {
                HackerNews_Service_1.HackerNewsService.getRandomTopStory()
                    .then(function (result) {
                    session.privateConversationData.story = JSON.parse(result);
                    var story = session.privateConversationData.story;
                    // console.log('[debug]: story ', story)
                    session.send("\n" + story['title'] + "\n" + story['url'] + "\n                        ");
                    builder.Prompts.choice(session, "options: ", "next item|read comments|quit");
                })
                    .catch(function (err) {
                    // Crawling failed... 
                });
            },
            function (session, results) {
                // console.log(results);
                var story = session.privateConversationData.story;
                switch (results.response.index) {
                    case 0:
                        session.beginDialog(HackerNews_Skill_1.HackerNewsSkill.Dialogs.Random);
                        break;
                    case 1:
                        session.beginDialog(HackerNews_Skill_1.HackerNewsSkill.Dialogs.ReadComments);
                        break;
                    case 2:
                        session.endDialog();
                        break;
                }
            }
        ]);
        bot.dialog(HackerNews_Skill_1.HackerNewsSkill.Dialogs.ReadComments, [
            function (session, args, next) {
                session.privateConversationData.nextItems = session.privateConversationData.story.kids;
                if (!session.privateConversationData.nextItems || !session.privateConversationData.nextItems.length) {
                    session.send("No more comments...");
                    session.endDialog();
                }
                else {
                    // console.log('[debug]: nextItems ', session.privateConversationData.nextItems);
                    next();
                }
            },
            function (session, args, next) {
                var nextItemId = session.privateConversationData.nextItems.pop();
                HackerNews_Service_1.HackerNewsService.item(nextItemId)
                    .then(function (result) {
                    var currentItem = session.privateConversationData.currentItem = JSON.parse(result);
                    if (currentItem.kids && currentItem.kids.length) {
                        for (var i in currentItem.kids) {
                            session.privateConversationData.nextItems.push(currentItem.kids[i]);
                        }
                    }
                    session.send("\n" + currentItem['text'] + "\n\n" + currentItem['by'] + "\n                        ");
                    builder.Prompts.choice(session, "options: ", "next item|quit");
                })
                    .catch(function (err) {
                    // Crawling failed... 
                });
            },
            function (session, results) {
                // console.log(results);
                switch (results.response.index) {
                    case 0:
                        session.beginDialog(HackerNews_Skill_1.HackerNewsSkill.Dialogs.ReadComments);
                        break;
                    case 1:
                        session.endDialog();
                        break;
                }
            }
        ]);
    };
    return HackerNewsDialog;
}());
exports.HackerNewsDialog = HackerNewsDialog;
//# sourceMappingURL=HackerNews.Dialog.js.map