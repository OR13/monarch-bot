"use strict";
var builder = require('botbuilder');
var Monarch_Skill_1 = require('./Monarch.Skill');
var MonarchIntent = (function () {
    function MonarchIntent() {
    }
    MonarchIntent.register = function (bot, intents) {
        // When I say 'Register' I want the 'RegisterDialog'
        intents.matches(Monarch_Skill_1.MonarchSkill.Intents.Register, [
            function (session) {
                session.beginDialog(Monarch_Skill_1.MonarchSkill.Dialogs.Register);
            }
        ]);
    };
    return MonarchIntent;
}());
exports.MonarchIntent = MonarchIntent;
//# sourceMappingURL=Monarch.Intent.js.map