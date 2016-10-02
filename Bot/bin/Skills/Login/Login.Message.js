"use strict";
var builder = require('botbuilder');
var LoginMessage = (function () {
    function LoginMessage() {
    }
    LoginMessage.promptForJWT = function (session) {
        return 'What is your current firebase token?';
    };
    LoginMessage.announceTokenIsValid = function (session) {
        return 'Your token is valid.';
    };
    LoginMessage.announceTokenInvalid = function (session) {
        return 'That token is valid.';
    };
    LoginMessage.announceTokenChallengeFailed = function (session) {
        return 'A valid token is required to proceed.';
    };
    LoginMessage.announceSessionIdenity = function (session) {
        var name = 'unknown (tracked)';
        if (session.privateConversationData.decodedToken) {
            name = session.privateConversationData.decodedToken['name'];
        }
        return "You are logged in as " + name;
    };
    LoginMessage.announceSessionIdenityChanged = function (session) {
        var name = 'unknown (tracked)';
        if (session.privateConversationData.decodedToken) {
            name = session.privateConversationData.decodedToken['name'];
        }
        return "Ok... You are now logged in as " + name;
    };
    return LoginMessage;
}());
exports.LoginMessage = LoginMessage;
//# sourceMappingURL=Login.Message.js.map