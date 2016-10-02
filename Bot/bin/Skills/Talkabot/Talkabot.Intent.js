"use strict";
var builder = require('botbuilder');
var Talkabot_Skill_1 = require('./Talkabot.Skill');
var Talkabot_Message_1 = require('./Talkabot.Message');
var TalkabotIntent = (function () {
    function TalkabotIntent() {
    }
    TalkabotIntent.register = function (bot, intents) {
        // When I say 'Login' I want the 'LoginDialog'
        intents.matches(Talkabot_Skill_1.TalkabotSkill.Intents.Login, [
            function (session) {
                session.beginDialog(Talkabot_Skill_1.TalkabotSkill.Dialogs.Login);
            },
            function (session, results) {
                session.send(Talkabot_Message_1.TalkabotMessage.announceSessionIdenityChanged(session));
            }
        ]);
    };
    return TalkabotIntent;
}());
exports.TalkabotIntent = TalkabotIntent;
//# sourceMappingURL=Talkabot.Intent.js.map