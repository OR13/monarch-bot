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
var LoginService = (function () {
    function LoginService() {
    }
    LoginService.setSessionJWT = function (session, token) {
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
    LoginService.verifyIdToken = function (token) {
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
    LoginService.verifyIdTokenFromEnv = function (token) {
        return token == process.env.FIREBASE_SECRET;
    };
    return LoginService;
}());
exports.LoginService = LoginService;
//# sourceMappingURL=Login.Service.js.map