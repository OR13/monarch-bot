
var builder = require('botbuilder');

import { HackerNewsIntent } from './HackerNews.Intent'
import { HackerNewsDialog } from './HackerNews.Dialog'
import { HackerNewsService } from './HackerNews.Service'

export class HackerNewsSkill {

    static Dialogs = {
        Random: '/Random',
        ReadComments: '/ReadComments'
    };

    static Intents = {
        Random: /^Random/i,
        ReadComments: /^ReadComments/i,
    };

    static register = function (
        bot,
        intents
    ) {
        // A Skill is a mapping of Intents to Dialogs
        // When I say 'Random' I want the 'RandomDialog'
        HackerNewsIntent.register(bot, intents);
        HackerNewsDialog.register(bot, intents);

    }

}




