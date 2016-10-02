"use strict";
var builder = require('botbuilder');
var Monarch_Skill_1 = require('./Monarch.Skill');
var Monarch_Message_1 = require('./Monarch.Message');
var MonarchIntent = (function () {
    function MonarchIntent() {
    }
    MonarchIntent.register = function (bot, intents) {
        // When I say 'Register' I want the 'RegisterDialog'
        intents.matches(Monarch_Skill_1.MonarchSkill.Intents.Register, [
            function (session) {
                session.beginDialog(Monarch_Skill_1.MonarchSkill.Dialogs.Register);
            },
            function (session, results) {
                session.send(Monarch_Message_1.MonarchMessage.announceSessionIdenityChanged(session));
            }
        ]);
        intents.onDefault([
            function (session, args, next) {
                session.send(Monarch_Message_1.MonarchMessage.onDefault(session));
                // // console.log('onDefault: ', session.privateConversationData)
                // if (!session.privateConversationData.name) {
                //     session.beginDialog(RegisterSkill.Dialogs.Register);
                // } else {
                //     next();
                // }
            },
        ]);
    };
    return MonarchIntent;
}());
exports.MonarchIntent = MonarchIntent;
//# sourceMappingURL=Monarch.Intent.js.map