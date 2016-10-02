"use strict";
var builder = require('botbuilder');
var Monarch_Intent_1 = require('./Monarch.Intent');
var Monarch_Dialog_1 = require('./Monarch.Dialog');
var MonarchSkill = (function () {
    function MonarchSkill() {
    }
    MonarchSkill.Dialogs = {
        Register: '/Register',
        Authenticate: '/Authenticate'
    };
    MonarchSkill.Intents = {
        Register: /^Register/i,
    };
    MonarchSkill.register = function (bot, intents) {
        // A Skill is a mapping of Intents to Dialogs
        // When I say 'Register' I want the 'RegisterDialog'
        Monarch_Intent_1.MonarchIntent.register(bot, intents);
        Monarch_Dialog_1.MonarchDialog.register(bot, intents);
    };
    return MonarchSkill;
}());
exports.MonarchSkill = MonarchSkill;
//# sourceMappingURL=Monarch.Skill.js.map