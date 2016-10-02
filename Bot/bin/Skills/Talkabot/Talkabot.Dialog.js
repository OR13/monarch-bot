"use strict";
var builder = require('botbuilder');
var Talkabot_Skill_1 = require('./Talkabot.Skill');
var Talkabot_Message_1 = require('./Talkabot.Message');
var TalkabotDialog = (function () {
    function TalkabotDialog() {
    }
    TalkabotDialog.register = function (bot, intents) {
        bot.dialog(Talkabot_Skill_1.TalkabotSkill.Dialogs.Login, [
            function (session) {
                // call custom prompt
                session.beginDialog(Talkabot_Skill_1.TalkabotSkill.Dialogs.Authenticate, {
                    prompt: Talkabot_Message_1.TalkabotMessage.promptForName(session),
                    retryPrompt: Talkabot_Message_1.TalkabotMessage.announceNameIsInvalid()
                });
            },
            function (session, results) {
                // Check their name
                if (results.response) {
                    // console.log('got valid name: ', results.response)
                    var name = results.response;
                    // TalkabotService.saveName(session, name);
                    session.privateConversationData.name = name;
                    session.send(Talkabot_Message_1.TalkabotMessage.welcomeByName(name));
                }
                else {
                }
                session.endDialog();
            }
        ]);
        bot.dialog(Talkabot_Skill_1.TalkabotSkill.Dialogs.Authenticate, builder.DialogAction.validatedPrompt(builder.PromptType.text, function (name) {
            return name === 'orie';
        }));
    };
    return TalkabotDialog;
}());
exports.TalkabotDialog = TalkabotDialog;
//# sourceMappingURL=Talkabot.Dialog.js.map