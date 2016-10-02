
var builder = require('botbuilder');


import { LoginSkill } from './Login.Skill'
import { LoginMessage } from './Login.Message'

export class LoginIntent {

    static register = function (
        bot,
        intents
    ) {

        // When I say 'Login' I want the 'LoginDialog'
        intents.matches(LoginSkill.Intents.Login, [
            function (session) {
                session.beginDialog(LoginSkill.Dialogs.Login);
            },
            function (session, results) {
                session.send(LoginMessage.announceSessionIdenityChanged(session));
            }
        ]);

        intents.onDefault([
            function (session, args, next) {

                // console.log('onDefault: ', session.privateConversationData)

                if (!session.privateConversationData.token) {
                    session.beginDialog(LoginSkill.Dialogs.Login);
                } else {
                    next();
                }
            },
            function (session, results) {
                session.send(LoginMessage.announceSessionIdenity(session));
            }
        ]);


    }

}