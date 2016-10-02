"use strict";
var builder = require('botbuilder');
var AtlasWearables_Skill_1 = require('./AtlasWearables.Skill');
var AtlasWearables_Message_1 = require('./AtlasWearables.Message');
var AtlasWearablesIntent = (function () {
    function AtlasWearablesIntent() {
    }
    AtlasWearablesIntent.register = function (bot, intents) {
        // When I say 'Login' I want the 'LoginDialog'
        intents.matches(AtlasWearables_Skill_1.AtlasWearablesSkill.Intents.Login, [
            function (session) {
                session.beginDialog(AtlasWearables_Skill_1.AtlasWearablesSkill.Dialogs.Login);
            },
            function (session, results) {
                session.send(AtlasWearables_Message_1.AtlasWearablesMessage.announceSessionIdenityChanged(session));
            }
        ]);
    };
    return AtlasWearablesIntent;
}());
exports.AtlasWearablesIntent = AtlasWearablesIntent;
//# sourceMappingURL=AtlasWearables.Intent.js.map