"use strict";
var builder = require('botbuilder');
var Authy_Intent_1 = require('./Authy.Intent');
var Authy_Dialog_1 = require('./Authy.Dialog');
/*

Lots to do here.

Add some promise library.

Formalize user registration.

Provide REST interface for Authy.Service

*/
var AuthySkill = (function () {
    function AuthySkill() {
    }
    AuthySkill.Dialogs = {
        Login: '/Login',
        Authenticate: '/Authenticate'
    };
    AuthySkill.Intents = {
        Login: /^Login/i,
    };
    AuthySkill.register = function (bot, intents) {
        // A Skill is a mapping of Intents to Dialogs
        // When I say 'Login' I want the 'AuthyDialog'
        Authy_Intent_1.AuthyIntent.register(bot, intents);
        Authy_Dialog_1.AuthyDialog.register(bot, intents);
    };
    return AuthySkill;
}());
exports.AuthySkill = AuthySkill;
//# sourceMappingURL=Authy.Skill.js.map