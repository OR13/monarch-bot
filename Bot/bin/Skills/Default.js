"use strict";
var Monarch_Message_1 = require('./Monarch/Monarch.Message');
var DefaultSkill = (function () {
    function DefaultSkill() {
    }
    DefaultSkill.register = function (bot, intents) {
        intents.onDefault([
            function (session, args, next) {
                session.send(Monarch_Message_1.MonarchMessage.onDefault(session));
                // // console.log('onDefault: ', session.privateConversationData)
                // if (!session.privateConversationData.name) {
                //     session.beginDialog(LoginSkill.Dialogs.Login);
                // } else {
                //     next();
                // }
            },
        ]);
    };
    return DefaultSkill;
}());
exports.DefaultSkill = DefaultSkill;
//# sourceMappingURL=Default.js.map