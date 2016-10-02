"use strict";
var builder = require('botbuilder');
var AtlasWearables_Intent_1 = require('./AtlasWearables.Intent');
var AtlasWearables_Dialog_1 = require('./AtlasWearables.Dialog');
var AtlasWearablesSkill = (function () {
    function AtlasWearablesSkill() {
    }
    AtlasWearablesSkill.Dialogs = {
        Login: '/Login',
        Authenticate: '/Authenticate'
    };
    AtlasWearablesSkill.Intents = {
        Login: /^Login/i,
    };
    AtlasWearablesSkill.register = function (bot, intents) {
        // A Skill is a mapping of Intents to Dialogs
        // When I say 'Login' I want the 'LoginDialog'
        AtlasWearables_Intent_1.AtlasWearablesIntent.register(bot, intents);
        AtlasWearables_Dialog_1.AtlasWearablesDialog.register(bot, intents);
    };
    return AtlasWearablesSkill;
}());
exports.AtlasWearablesSkill = AtlasWearablesSkill;
//# sourceMappingURL=AtlasWearables.Skill.js.map