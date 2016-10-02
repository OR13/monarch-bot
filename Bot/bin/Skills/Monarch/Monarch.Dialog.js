"use strict";
var builder = require('botbuilder');
var Monarch_Skill_1 = require('./Monarch.Skill');
var Monarch_Message_1 = require('./Monarch.Message');
var MonarchDialog = (function () {
    function MonarchDialog() {
    }
    MonarchDialog.register = function (bot, intents) {
        bot.dialog(Monarch_Skill_1.MonarchSkill.Dialogs.Register, [
            function (session) {
                // call custom prompt
                session.beginDialog(Monarch_Skill_1.MonarchSkill.Dialogs.Authenticate, {
                    prompt: Monarch_Message_1.MonarchMessage.promptForName(session),
                    retryPrompt: Monarch_Message_1.MonarchMessage.announceNameIsInvalid()
                });
            },
            function (session, results) {
                // Check their name
                if (results.response) {
                    // console.log('got valid name: ', results.response)
                    var name = results.response;
                    // MonarchService.saveName(session, name);
                    session.privateConversationData.name = name;
                    session.send(Monarch_Message_1.MonarchMessage.welcomeByName(name));
                }
                else {
                }
                session.endDialog();
            }
        ]);
        bot.dialog(Monarch_Skill_1.MonarchSkill.Dialogs.Authenticate, builder.DialogAction.validatedPrompt(builder.PromptType.text, function (name) {
            return name === 'orie';
        }));
    };
    return MonarchDialog;
}());
exports.MonarchDialog = MonarchDialog;
//# sourceMappingURL=Monarch.Dialog.js.map