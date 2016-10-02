"use strict";
var builder = require('botbuilder');
var TalkabotMessage = (function () {
    function TalkabotMessage() {
    }
    TalkabotMessage.promptForName = function (session) {
        return 'What is your name?';
    };
    TalkabotMessage.welcomeByName = function (name) {
        return "Hello " + name + "!";
    };
    TalkabotMessage.announceNameIsValid = function (name) {
        return name + ", thats a valid name!";
    };
    TalkabotMessage.announceNameIsInvalid = function () {
        return "Thats NOT a valid name!";
    };
    TalkabotMessage.announceSessionIdenity = function (session) {
        var name = 'unknown (tracked)';
        if (session.privateConversationData.name) {
            name = session.privateConversationData.name;
        }
        return "You are logged in as " + name;
    };
    TalkabotMessage.announceSessionIdenityChanged = function (session) {
        var name = 'unknown (tracked)';
        if (session.privateConversationData.name) {
            name = session.privateConversationData.name;
        }
        return "Ok... You are now logged in as " + name;
    };
    return TalkabotMessage;
}());
exports.TalkabotMessage = TalkabotMessage;
//# sourceMappingURL=Talkabot.Message.js.map