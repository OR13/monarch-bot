
var builder = require('botbuilder');

import { LoginService } from './Login.Service'
import { LoginSkill } from './Login.Skill'
import { LoginMessage } from './Login.Message'

export class LoginDialog {

    static register = function (
        bot,
        intents
    ) {
        bot.dialog(LoginSkill.Dialogs.Login, [
            function (session) {
                // call custom prompt
                session.beginDialog(LoginSkill.Dialogs.Authenticate, {
                    prompt: LoginMessage.promptForJWT(session),
                    retryPrompt: LoginMessage.announceTokenInvalid(session)
                });
            },
            function (session, results) {
                // Check their answer
                if (results.response) {
                    // console.log('got valid token: ', results.response)
                    session.privateConversationData.token = results.response;

                    session.send(LoginMessage.announceTokenIsValid(session));

                    LoginService.setSessionJWT(session, session.privateConversationData.token);

                } else {
                    session.send(LoginMessage.announceTokenChallengeFailed(session));
                }
                session.endDialog();
            }
        ]);

        bot.dialog(LoginSkill.Dialogs.Authenticate, builder.DialogAction.validatedPrompt(
            builder.PromptType.text, (tokenCandidate) => {
                return LoginService.verifyIdToken(tokenCandidate)
            }))

    }

}


