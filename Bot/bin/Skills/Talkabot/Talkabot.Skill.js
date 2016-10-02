"use strict";
var builder = require('botbuilder');
var Talkabot_Intent_1 = require('./Talkabot.Intent');
var Talkabot_Dialog_1 = require('./Talkabot.Dialog');
var TalkabotSkill = (function () {
    function TalkabotSkill() {
    }
    TalkabotSkill.Dialogs = {
        Login: '/Login',
        Authenticate: '/Authenticate'
    };
    TalkabotSkill.Intents = {
        Login: /^Login/i,
    };
    TalkabotSkill.register = function (bot, intents) {
        // A Skill is a mapping of Intents to Dialogs
        // When I say 'Login' I want the 'LoginDialog'
        Talkabot_Intent_1.TalkabotIntent.register(bot, intents);
        Talkabot_Dialog_1.TalkabotDialog.register(bot, intents);
    };
    return TalkabotSkill;
}());
exports.TalkabotSkill = TalkabotSkill;
//# sourceMappingURL=Talkabot.Skill.js.map