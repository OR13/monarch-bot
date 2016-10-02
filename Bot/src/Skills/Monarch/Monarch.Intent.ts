
var builder = require('botbuilder');


import { LoginSkill } from '../Login/Login.Skill'
import { MonarchSkill } from './Monarch.Skill'
import { MonarchMessage } from './Monarch.Message'

export class MonarchIntent {

    static register = function (
        bot,
        intents
    ) {

        // When I say 'Register' I want the 'RegisterDialog'
        intents.matches(MonarchSkill.Intents.Register, [
            function (session) {
                session.beginDialog(MonarchSkill.Dialogs.Register);
            }
        ]);

         


    }

}