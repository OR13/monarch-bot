
var builder = require('botbuilder');

import { MonarchService } from './Monarch.Service'
import { MonarchSkill } from './Monarch.Skill'
import { MonarchMessage } from './Monarch.Message'

export class MonarchDialog {

    static register = function (
        bot,
        intents
    ) {
        bot.dialog(MonarchSkill.Dialogs.Register, [
            function (session) {
                session.send("Registration is not currently supported...");
                session.endDialog();
            }

        ]);


    }

}


