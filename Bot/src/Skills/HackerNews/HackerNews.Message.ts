
var builder = require('botbuilder');

export class HackerNewsMessage {

    public static getName = (session: any) => {
        var name = 'unknown (tracked)';

        if (session.privateConversationData.name) {
            name = session.privateConversationData.name;
        }

        return name;
    }

    public static promptForName = (session: any) => {
        return 'What is your name?';
    }

    public static welcomeByName = (name: string) => {
        return `Hello ${name}!`;
    }

    public static announceNameIsValid = (name: string) => {
        return `${name}, thats a valid name!`;
    }

    public static announceNameIsInvalid = () => {
        return `Thats NOT a valid name!`;
    }

    public static announceSessionIdenity = (session: any) => {
        return `You are logged in as ${HackerNewsMessage.getName(session)}`;
    }

    public static announceSessionIdenityChanged = (session: any) => {
        return `Ok... You are now logged in as ${HackerNewsMessage.getName(session)}`;
    }

    public static onDefault = (session: any) => {
        var response = `What? Ok, ${HackerNewsMessage.getName(session)}.. Here's what I can do...\n`;
        return response;
    }

}




