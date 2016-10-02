"use strict";
var builder = require('botbuilder');
var AtlasWearablesMessage = (function () {
    function AtlasWearablesMessage() {
    }
    AtlasWearablesMessage.promptForJWT = function (session) {
        return 'What is your current firebase token?';
    };
    AtlasWearablesMessage.announceTokenIsValid = function (session) {
        return 'Your token is valid.';
    };
    AtlasWearablesMessage.announceTokenInvalid = function (session) {
        return 'That token is valid.';
    };
    AtlasWearablesMessage.announceTokenChallengeFailed = function (session) {
        return 'A valid token is required to proceed.';
    };
    AtlasWearablesMessage.announceSessionIdenity = function (session) {
        var name = 'unknown (tracked)';
        if (session.privateConversationData.decodedToken) {
            name = session.privateConversationData.decodedToken['name'];
        }
        return "You are logged in as " + name;
    };
    AtlasWearablesMessage.announceSessionIdenityChanged = function (session) {
        var name = 'unknown (tracked)';
        if (session.privateConversationData.decodedToken) {
            name = session.privateConversationData.decodedToken['name'];
        }
        return "Ok... You are now logged in as " + name;
    };
    return AtlasWearablesMessage;
}());
exports.AtlasWearablesMessage = AtlasWearablesMessage;
//# sourceMappingURL=AtlasWearables.Message.js.map