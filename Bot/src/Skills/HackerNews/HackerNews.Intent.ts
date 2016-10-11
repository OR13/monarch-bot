
var builder = require('botbuilder');


import { LoginSkill } from '../Login/Login.Skill'
import { HackerNewsSkill } from './HackerNews.Skill'
import { HackerNewsMessage } from './HackerNews.Message'

export class HackerNewsIntent {

    static register = function (
        bot,
        intents
    ) {

        // When I say 'Random' I want the 'RandomDialog'
        intents.matches(HackerNewsSkill.Intents.Random, [
            function (session) {
                session.beginDialog(HackerNewsSkill.Dialogs.Random);
            }
        ]);

         intents.onDefault([
            function (session, args, next) {
                 session.beginDialog(HackerNewsSkill.Dialogs.Random);
//                  session.send(
// `
// Here's what I can do: 
// say 'Random'  for a random hacker news article.
// `
//                  );
            }
        ]);

         


    }

}