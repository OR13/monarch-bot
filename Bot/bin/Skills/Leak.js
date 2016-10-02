// This service is used to reveal sensitive information to the user for debugging purposes.
// You should only use this with HTTPS, and beware that all messages are retained on Microsoft Servers.
"use strict";
var Leak = (function () {
    function Leak(session) {
        var _this = this;
        this.session = session;
        this.NAME = function () {
            return _this.session.privateConversationData.decodedToken.name;
        };
        this.TOKEN = function () {
            return _this.session.privateConversationData.token;
        };
    }
    return Leak;
}());
exports.Leak = Leak;
//# sourceMappingURL=Leak.js.map