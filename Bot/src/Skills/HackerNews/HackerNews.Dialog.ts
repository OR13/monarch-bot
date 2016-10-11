
var builder = require('botbuilder');

import { HackerNewsService } from './HackerNews.Service'
import { HackerNewsSkill } from './HackerNews.Skill'
import { HackerNewsMessage } from './HackerNews.Message'


export class HackerNewsDialog {

    static register = function (
        bot,
        intents
    ) {

        bot.dialog(HackerNewsSkill.Dialogs.Random, [
            function (session) {
                HackerNewsService.getRandomTopStory()
                    .then((result) => {

                        session.privateConversationData.story = JSON.parse(result);

                        var story = session.privateConversationData.story;

                        // console.log('[debug]: story ', story)

                        session.send(`
${story['title']}
${story['url']}
                        `);

                        builder.Prompts.choice(session, "options: ", "next item|read comments|quit");

                    })
                    .catch((err) => {
                        // Crawling failed... 
                    });

            },
            function (session, results) {

                // console.log(results);

                var story = session.privateConversationData.story;

                switch (results.response.index) {
                    case 0:
                        session.beginDialog(HackerNewsSkill.Dialogs.Random);
                        break;
                    case 1:
                        session.beginDialog(HackerNewsSkill.Dialogs.ReadComments);
                        break;
                    case 2:
                        session.endDialog();
                        break;
                }

            }

        ]);

        bot.dialog(HackerNewsSkill.Dialogs.ReadComments, [
            function (session, args, next) {

                session.privateConversationData.nextItems = session.privateConversationData.story.kids;

                if (!session.privateConversationData.nextItems || !session.privateConversationData.nextItems.length) {
                    session.send("No more comments...");
                    session.endDialog();
                } else {

                    // console.log('[debug]: nextItems ', session.privateConversationData.nextItems);

                    next();
                }

            },
            function (session, args, next) {

                var nextItemId = session.privateConversationData.nextItems.pop();

                HackerNewsService.item(nextItemId)
                    .then((result) => {

                        var currentItem = session.privateConversationData.currentItem = JSON.parse(result);

                        if (currentItem.kids && currentItem.kids.length) {

                            for (var i in currentItem.kids) {
                                session.privateConversationData.nextItems.push(currentItem.kids[i])
                            }
                        }

                        session.send(`
${currentItem['text']}

${currentItem['by']}
                        `);

                        builder.Prompts.choice(session, "options: ", "next item|quit");

                    })
                    .catch((err) => {
                        // Crawling failed... 
                    });
            },

            function (session, results) {

                // console.log(results);

                switch (results.response.index) {
                    case 0:
                        session.beginDialog(HackerNewsSkill.Dialogs.ReadComments);
                        break;
                    case 1:
                        session.endDialog();
                        break;
                }

            }




        ]);


    }

}


