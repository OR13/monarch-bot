"use strict";
var builder = require('botbuilder');
var firebase = require('firebase');
var Monarch_Skill_1 = require('./Skills/Monarch/Monarch.Skill');
var Login_Skill_1 = require('./Skills/Login/Login.Skill');
var Bot = (function () {
    function Bot(connector) {
        this.connector = connector;
        this.bot = new builder.UniversalBot(connector);
        var intents = new builder.IntentDialog();
        this.bot.dialog('/', intents);
        // Initialize Firebase
        // TODO: Replace with your project's customized code snippet
        var config = {
            databaseURL: process.env.FB_MONARCH_CHAIN_DATABASE_URL,
            serviceAccount: process.env.FB_MONARCH_CHAIN_SERVICE_ACCOUNT,
            databaseAuthVariableOverride: {
                uid: "monarch-service-account-worker"
            }
        };
        firebase.initializeApp(config);
        // A Skill is a mapping of Intentions to Dialogs
        Login_Skill_1.LoginSkill.register(this.bot, intents);
        Monarch_Skill_1.MonarchSkill.register(this.bot, intents);
    }
    return Bot;
}());
exports.Bot = Bot;
//# sourceMappingURL=Bot.js.map