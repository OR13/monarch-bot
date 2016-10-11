



var builder = require('botbuilder');

var firebase = require('firebase');


import { MonarchSkill } from './Skills/Monarch/Monarch.Skill'
import { LoginSkill } from './Skills/Login/Login.Skill'
import { HackerNewsSkill } from './Skills/HackerNews/HackerNews.Skill'

export class Bot {

      public bot: any;

      constructor(
            public connector: any
      ) {
            this.bot = new builder.UniversalBot(connector);

            var intents = new builder.IntentDialog();

            this.bot.dialog('/', intents);


            // Initialize Firebase
            // TODO: Replace with your project's customized code snippet
            var config = {
                  databaseURL: process.env.FB_MONARCH_CHAIN_DATABASE_URL,
                  serviceAccount: process.env.FB_MONARCH_CHAIN_SERVICE_ACCOUNT,
                  databaseAuthVariableOverride: {
                        uid: "monarch-service-account-worker"
                  }
            };

            firebase.initializeApp(config);


            // A Skill is a mapping of Intentions to Dialogs

            // LoginSkill.register(this.bot, intents);

            MonarchSkill.register(this.bot, intents);

            HackerNewsSkill.register(this.bot, intents);


      }


}
