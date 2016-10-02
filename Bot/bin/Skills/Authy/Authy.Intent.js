"use strict";
var builder = require('botbuilder');
var Authy_Skill_1 = require('./Authy.Skill');
var Authy_Message_1 = require('./Authy.Message');
var AuthyIntent = (function () {
    function AuthyIntent() {
    }
    AuthyIntent.register = function (bot, intents) {
        // When I say 'Login' I want the 'AuthyDialog'
        intents.matches(Authy_Skill_1.AuthySkill.Intents.Login, [
            function (session) {
                session.beginDialog(Authy_Skill_1.AuthySkill.Dialogs.Login);
            },
            function (session, results) {
                session.send(Authy_Message_1.AuthyMessage.announceSessionIdenityChanged(session));
            }
        ]);
    };
    return AuthyIntent;
}());
exports.AuthyIntent = AuthyIntent;
//# sourceMappingURL=Authy.Intent.js.map