"use strict";
var builder = require('botbuilder');
var Monarch_Skill_1 = require('./Monarch.Skill');
var MonarchDialog = (function () {
    function MonarchDialog() {
    }
    MonarchDialog.register = function (bot, intents) {
        bot.dialog(Monarch_Skill_1.MonarchSkill.Dialogs.Register, [
            function (session) {
                session.send("Registration is not currently supported...");
                session.endDialog();
            }
        ]);
    };
    return MonarchDialog;
}());
exports.MonarchDialog = MonarchDialog;
//# sourceMappingURL=Monarch.Dialog.js.map