"use strict";
var builder = require('botbuilder');
var bcrypt = require('bcrypt');
// Create authenticated Authy and Twilio API clients
var authy = require('authy')(process.env.AUTHY_API_KEY);
var twilioClient = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
// Used to generate password hash
var SALT_WORK_FACTOR = 10;
var AuthyService = (function () {
    function AuthyService() {
    }
    AuthyService.isModified = function (user, field) {
        return user[field] !== user[field];
    };
    AuthyService.comparePassword = function (user, candidatePassword, cb) {
        bcrypt.compare(candidatePassword, user.password, function (err, isMatch) {
            if (err)
                return cb(err);
            cb(null, isMatch);
        });
    };
    AuthyService.onBeforeSave = function (user) {
        // only hash the password if it has been modified (or is new)
        if (!AuthyService.isModified(user, 'password')) {
            return;
        }
        // generate a salt
        bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
            if (err)
                return console.error('error: ', err);
            // hash the password using our new salt
            bcrypt.hash(user.password, salt, function (err, hash) {
                if (err) {
                    return console.error(err);
                }
                // override the cleartext password with the hashed one
                user.password = hash;
                return;
            });
        });
    };
    AuthyService.sendAuthyToken = function (session) {
        var user = session.privateConversationData.user;
        // With a valid Authy ID, send the 2FA token for this user
        function sendToken() {
            console.log('request_sms. .. ');
            authy.request_sms(user.authyId, true, function (err, response) {
                return console.error(err);
            });
        }
        if (!user.authyId) {
            // Register this user if it's a new user
            console.log('time to register!');
            authy.register_user(user.email, user.phone, user.countryCode, function (err, response) {
                if (err || !response.user) {
                    return console.error(err);
                }
                user.authyId = response.user.id;
                // save to database
                // self.save(function (err, doc) {
                //     if (err || !doc) return cb.call(self, err);
                //     self = doc;
                //     sendToken();
                // });
            });
        }
        else {
            // Otherwise send token to a known user
            sendToken();
        }
    };
    AuthyService.verifyAuthyToken = function (otp) {
        console.log('authy.verify...');
        authy.verify(AuthyService.user.authyId, otp, function (err, response) {
            console.log(" verifyAuthyToken response:", response);
            if (response.success === 'true') {
            }
        });
        return true;
    };
    AuthyService.sendMessage = function (user, message) {
        twilioClient.sendMessage({
            to: user.countryCode + user.phone,
            from: process.env.TWILIO_PHONE_NUMBER,
            body: message
        }, function (err, response) {
            return console.error(err);
        });
    };
    return AuthyService;
}());
exports.AuthyService = AuthyService;
//# sourceMappingURL=Authy.Service.js.map