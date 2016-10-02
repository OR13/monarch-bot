"use strict";
var builder = require('botbuilder');
var Login_Intent_1 = require('./Login.Intent');
var Login_Dialog_1 = require('./Login.Dialog');
var LoginSkill = (function () {
    function LoginSkill() {
    }
    LoginSkill.Dialogs = {
        Login: '/Login',
        Authenticate: '/Authenticate'
    };
    LoginSkill.Intents = {
        Login: /^Login/i,
    };
    LoginSkill.register = function (bot, intents) {
        // A Skill is a mapping of Intents to Dialogs
        // When I say 'Login' I want the 'LoginDialog'
        Login_Intent_1.LoginIntent.register(bot, intents);
        Login_Dialog_1.LoginDialog.register(bot, intents);
    };
    return LoginSkill;
}());
exports.LoginSkill = LoginSkill;
//# sourceMappingURL=Login.Skill.js.map