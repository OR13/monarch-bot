"use strict";
var builder = require('botbuilder');
var HackerNewsMessage = (function () {
    function HackerNewsMessage() {
    }
    HackerNewsMessage.getName = function (session) {
        var name = 'unknown (tracked)';
        if (session.privateConversationData.name) {
            name = session.privateConversationData.name;
        }
        return name;
    };
    HackerNewsMessage.promptForName = function (session) {
        return 'What is your name?';
    };
    HackerNewsMessage.welcomeByName = function (name) {
        return "Hello " + name + "!";
    };
    HackerNewsMessage.announceNameIsValid = function (name) {
        return name + ", thats a valid name!";
    };
    HackerNewsMessage.announceNameIsInvalid = function () {
        return "Thats NOT a valid name!";
    };
    HackerNewsMessage.announceSessionIdenity = function (session) {
        return "You are logged in as " + HackerNewsMessage.getName(session);
    };
    HackerNewsMessage.announceSessionIdenityChanged = function (session) {
        return "Ok... You are now logged in as " + HackerNewsMessage.getName(session);
    };
    HackerNewsMessage.onDefault = function (session) {
        var response = "What? Ok, " + HackerNewsMessage.getName(session) + ".. Here's what I can do...\n";
        return response;
    };
    return HackerNewsMessage;
}());
exports.HackerNewsMessage = HackerNewsMessage;
//# sourceMappingURL=HackerNews.Message.js.map