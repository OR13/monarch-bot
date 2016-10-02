"use strict";
var builder = require('botbuilder');
var AuthyMessage = (function () {
    function AuthyMessage() {
    }
    AuthyMessage.promptForPhoneNumber = function (session) {
        return 'What is your phone number?';
    };
    AuthyMessage.announceTokenIsValid = function (session) {
        return 'Your token is valid.';
    };
    AuthyMessage.announceTokenInvalid = function (session) {
        return 'That token is valid.';
    };
    AuthyMessage.announceTokenChallengeFailed = function (session) {
        return 'A valid token is required to proceed.';
    };
    AuthyMessage.announceSessionIdenity = function (session) {
        var name = 'unknown (tracked)';
        if (session.privateConversationData.decodedToken) {
            name = session.privateConversationData.decodedToken['name'];
        }
        return "You are logged in as " + name;
    };
    AuthyMessage.announceSessionIdenityChanged = function (session) {
        var name = 'unknown (tracked)';
        if (session.privateConversationData.decodedToken) {
            name = session.privateConversationData.decodedToken['name'];
        }
        return "Ok... You are now logged in as " + name;
    };
    return AuthyMessage;
}());
exports.AuthyMessage = AuthyMessage;
//# sourceMappingURL=Authy.Message.js.map