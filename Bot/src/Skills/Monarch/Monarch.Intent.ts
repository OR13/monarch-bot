
var builder = require('botbuilder');


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
            },
            function (session, results) {
                session.send(MonarchMessage.announceSessionIdenityChanged(session));
            }
        ]);

         intents.onDefault([
            function (session, args, next) {

                session.send(MonarchMessage.onDefault(session));

                // // console.log('onDefault: ', session.privateConversationData)

                // if (!session.privateConversationData.name) {
                //     session.beginDialog(RegisterSkill.Dialogs.Register);
                // } else {
                //     next();
                // }
            },
            // function (session, results) {
            //     session.send(TalkabotMessage.announceSessionIdenity(session));
            // }
        ]);


    }

}