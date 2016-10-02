
var builder = require('botbuilder');

import { MonarchIntent } from './Monarch.Intent'
import { MonarchDialog } from './Monarch.Dialog'
import { MonarchService } from './Monarch.Service'

export class MonarchSkill {

    static Dialogs = {
        Register: '/Register'
    };

    static Intents = {
        Register: /^Register/i,
    };

    static register = function (
        bot,
        intents
    ) {
        // A Skill is a mapping of Intents to Dialogs
        // When I say 'Register' I want the 'RegisterDialog'
        MonarchIntent.register(bot, intents);
        MonarchDialog.register(bot, intents);

    }

}




