"use strict";
var builder = require('botbuilder');
var firebase = require("firebase");
var config = {
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    serviceAccount: process.env.FIREBSAE_SERVICE_ACCOUNT_PATH,
    databaseAuthVariableOverride: {
        uid: "midas-service-account-worker"
    }
};
firebase.initializeApp(config);
var AtlasWearablesService = (function () {
    function AtlasWearablesService() {
    }
    AtlasWearablesService.setSessionJWT = function (session, token) {
        return firebase.auth().verifyIdToken(token)
            .then(function (decodedToken) {
            var uid = decodedToken.sub;
            // console.log(decodedToken);
            // var t = JSON.stringify(decodedToken)
            // var k = JSON.parse(t)
            session.privateConversationData.decodedToken = decodedToken;
            // session.send('success');
            return decodedToken;
            // ...
        })
            .catch(function (error) {
            // Handle error
            console.error(error);
            return null;
        });
    };
    AtlasWearablesService.verifyIdToken = function (token) {
        return firebase.auth().verifyIdToken(token)
            .then(function (decodedToken) {
            var uid = decodedToken.sub;
            // console.log(decodedToken);
            return decodedToken;
            // ...
        })
            .catch(function (error) {
            // Handle error
            console.error(error);
            return null;
        });
    };
    AtlasWearablesService.verifyIdTokenFromEnv = function (token) {
        return token == process.env.FIREBASE_SECRET;
    };
    return AtlasWearablesService;
}());
exports.AtlasWearablesService = AtlasWearablesService;
//# sourceMappingURL=AtlasWearables.Service.js.map