"use strict";
var builder = require('botbuilder');
var AtlasWearables_Service_1 = require('./AtlasWearables.Service');
var AtlasWearables_Skill_1 = require('./AtlasWearables.Skill');
var AtlasWearables_Message_1 = require('./AtlasWearables.Message');
var AtlasWearablesDialog = (function () {
    function AtlasWearablesDialog() {
    }
    AtlasWearablesDialog.register = function (bot, intents) {
        bot.dialog(AtlasWearables_Skill_1.AtlasWearablesSkill.Dialogs.Login, [
            function (session) {
                // call custom prompt
                session.beginDialog(AtlasWearables_Skill_1.AtlasWearablesSkill.Dialogs.Authenticate, {
                    prompt: AtlasWearables_Message_1.AtlasWearablesMessage.promptForJWT(session),
                    retryPrompt: AtlasWearables_Message_1.AtlasWearablesMessage.announceTokenInvalid(session)
                });
            },
            function (session, results) {
                // Check their answer
                if (results.response) {
                    // console.log('got valid token: ', results.response)
                    session.privateConversationData.token = results.response;
                    session.send(AtlasWearables_Message_1.AtlasWearablesMessage.announceTokenIsValid(session));
                    AtlasWearables_Service_1.AtlasWearablesService.setSessionJWT(session, session.privateConversationData.token);
                }
                else {
                    session.send(AtlasWearables_Message_1.AtlasWearablesMessage.announceTokenChallengeFailed(session));
                }
                session.endDialog();
            }
        ]);
        bot.dialog(AtlasWearables_Skill_1.AtlasWearablesSkill.Dialogs.Authenticate, builder.DialogAction.validatedPrompt(builder.PromptType.text, function (tokenCandidate) {
            return AtlasWearables_Service_1.AtlasWearablesService.verifyIdToken(tokenCandidate);
        }));
    };
    return AtlasWearablesDialog;
}());
exports.AtlasWearablesDialog = AtlasWearablesDialog;
//# sourceMappingURL=AtlasWearables.Dialog.js.map