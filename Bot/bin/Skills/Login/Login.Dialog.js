"use strict";
var builder = require('botbuilder');
var Login_Service_1 = require('./Login.Service');
var Login_Skill_1 = require('./Login.Skill');
var Login_Message_1 = require('./Login.Message');
var LoginDialog = (function () {
    function LoginDialog() {
    }
    LoginDialog.register = function (bot, intents) {
        bot.dialog(Login_Skill_1.LoginSkill.Dialogs.Login, [
            function (session) {
                // call custom prompt
                session.beginDialog(Login_Skill_1.LoginSkill.Dialogs.Authenticate, {
                    prompt: Login_Message_1.LoginMessage.promptForJWT(session),
                    retryPrompt: Login_Message_1.LoginMessage.announceTokenInvalid(session)
                });
            },
            function (session, results) {
                // Check their answer
                if (results.response) {
                    // console.log('got valid token: ', results.response)
                    session.privateConversationData.token = results.response;
                    session.send(Login_Message_1.LoginMessage.announceTokenIsValid(session));
                    Login_Service_1.LoginService.setSessionJWT(session, session.privateConversationData.token);
                }
                else {
                    session.send(Login_Message_1.LoginMessage.announceTokenChallengeFailed(session));
                }
                session.endDialog();
            }
        ]);
        bot.dialog(Login_Skill_1.LoginSkill.Dialogs.Authenticate, builder.DialogAction.validatedPrompt(builder.PromptType.text, function (tokenCandidate) {
            return Login_Service_1.LoginService.verifyIdToken(tokenCandidate);
        }));
    };
    return LoginDialog;
}());
exports.LoginDialog = LoginDialog;
//# sourceMappingURL=Login.Dialog.js.map