
var builder = require('botbuilder');

import { MonarchService } from './Monarch.Service'
import { MonarchSkill } from './Monarch.Skill'
import { MonarchMessage } from './Monarch.Message'

export class MonarchDialog {

    static register = function (
        bot,
        intents
    ) {
        bot.dialog(MonarchSkill.Dialogs.Register, [
            function (session) {
                // call custom prompt
                session.beginDialog(MonarchSkill.Dialogs.Authenticate, {
                    prompt: MonarchMessage.promptForName(session),
                    retryPrompt: MonarchMessage.announceNameIsInvalid()
                });
            },
            function (session, results) {
                // Check their name
                if (results.response) {
                    // console.log('got valid name: ', results.response)

                    var name = results.response;

                    // MonarchService.saveName(session, name);

                    session.privateConversationData.name = name;

                    session.send(MonarchMessage.welcomeByName(name));


                } else {
                    // session.send(MonarchMessage.announceNameIsInvalid());
                }
                session.endDialog();
            }
        ]);

        bot.dialog(MonarchSkill.Dialogs.Authenticate, builder.DialogAction.validatedPrompt(
            builder.PromptType.text, (name: string) => {
                return name === 'orie';
            }))

    }

}


