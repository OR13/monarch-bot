

import { MonarchSkill } from './Skills/Monarch/Monarch.Skill'

var builder = require('botbuilder');

export class Bot {

      public bot: any;

      constructor(
            public connector: any
      ) {
            this.bot = new builder.UniversalBot(connector);

            var intents = new builder.IntentDialog();

            this.bot.dialog('/', intents);

            // A Skill is a mapping of Intentions to Dialogs

            MonarchSkill.register(this.bot, intents);


      }


}
