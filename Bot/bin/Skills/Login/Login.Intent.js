"use strict";
var builder = require('botbuilder');
var Login_Skill_1 = require('./Login.Skill');
var Login_Message_1 = require('./Login.Message');
var LoginIntent = (function () {
    function LoginIntent() {
    }
    LoginIntent.register = function (bot, intents) {
        // When I say 'Login' I want the 'LoginDialog'
        intents.matches(Login_Skill_1.LoginSkill.Intents.Login, [
            function (session) {
                session.beginDialog(Login_Skill_1.LoginSkill.Dialogs.Login);
            },
            function (session, results) {
                session.send(Login_Message_1.LoginMessage.announceSessionIdenityChanged(session));
            }
        ]);
    };
    return LoginIntent;
}());
exports.LoginIntent = LoginIntent;
//# sourceMappingURL=Login.Intent.js.map