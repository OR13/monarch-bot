"use strict";
var builder = require('botbuilder');
var MonarchMessage = (function () {
    function MonarchMessage() {
    }
    MonarchMessage.getName = function (session) {
        var name = 'unknown (tracked)';
        if (session.privateConversationData.name) {
            name = session.privateConversationData.name;
        }
        return name;
    };
    MonarchMessage.promptForName = function (session) {
        return 'What is your name?';
    };
    MonarchMessage.welcomeByName = function (name) {
        return "Hello " + name + "!";
    };
    MonarchMessage.announceNameIsValid = function (name) {
        return name + ", thats a valid name!";
    };
    MonarchMessage.announceNameIsInvalid = function () {
        return "Thats NOT a valid name!";
    };
    MonarchMessage.announceSessionIdenity = function (session) {
        return "You are logged in as " + MonarchMessage.getName(session);
    };
    MonarchMessage.announceSessionIdenityChanged = function (session) {
        return "Ok... You are now logged in as " + MonarchMessage.getName(session);
    };
    MonarchMessage.onDefault = function (session) {
        var response = "What? Ok, " + MonarchMessage.getName(session) + ".. Here's what I can do...\n";
        return response;
    };
    return MonarchMessage;
}());
exports.MonarchMessage = MonarchMessage;
//# sourceMappingURL=Monarch.Message.js.map