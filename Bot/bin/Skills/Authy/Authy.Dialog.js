"use strict";
var builder = require('botbuilder');
var Authy_Service_1 = require('./Authy.Service');
var Authy_Skill_1 = require('./Authy.Skill');
var Authy_Message_1 = require('./Authy.Message');
var AuthyDialog = (function () {
    function AuthyDialog() {
    }
    AuthyDialog.register = function (bot, intents) {
        bot.dialog(Authy_Skill_1.AuthySkill.Dialogs.Login, [
            function (session) {
                // call custom prompt
                Authy_Service_1.AuthyService.user = {
                    email: 'orie@transmute.industries',
                    phone: '4847987015',
                    countryCode: '1',
                    authyId: '24301002'
                };
                session.privateConversationData.user = Authy_Service_1.AuthyService.user;
                // assume we have a user with a phone number
                Authy_Service_1.AuthyService.sendAuthyToken(session);
                session.beginDialog(Authy_Skill_1.AuthySkill.Dialogs.Authenticate, {
                    prompt: Authy_Message_1.AuthyMessage.promptForPhoneNumber(session),
                    retryPrompt: Authy_Message_1.AuthyMessage.announceTokenInvalid(session)
                });
            },
            function (session, results) {
                // Check their answer
                if (results.response) {
                    // console.log('got valid token: ', results.response)
                    session.privateConversationData.token = results.response;
                    session.send(Authy_Message_1.AuthyMessage.announceTokenIsValid(session));
                }
                else {
                    session.send(Authy_Message_1.AuthyMessage.announceTokenChallengeFailed(session));
                }
                session.endDialog();
            }
        ]);
        bot.dialog(Authy_Skill_1.AuthySkill.Dialogs.Authenticate, builder.DialogAction.validatedPrompt(builder.PromptType.text, function (tokenCandidate) {
            // AuthyService.sendMessage(user, 'test!')
            return Authy_Service_1.AuthyService.verifyAuthyToken(tokenCandidate);
        }));
    };
    return AuthyDialog;
}());
exports.AuthyDialog = AuthyDialog;
//# sourceMappingURL=Authy.Dialog.js.map