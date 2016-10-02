
var builder = require('botbuilder');

var firebase = require("firebase");

export class LoginService {

    public static setSessionJWT = (session: any, token: string) => {

        return firebase.auth().verifyIdToken(token)

            .then((decodedToken) => {
                var uid = decodedToken.sub;
                // console.log(decodedToken);
                // var t = JSON.stringify(decodedToken)
                // var k = JSON.parse(t)
                session.privateConversationData.decodedToken = decodedToken;
                // session.send('success');
                return decodedToken;
                // ...
            })

            .catch((error) => {
                // Handle error
                console.error(error);
                return null;
            });
    }

    public static verifyIdToken = (token: any) => {

        return firebase.auth().verifyIdToken(token)

            .then((decodedToken) => {
                var uid = decodedToken.sub;
                // console.log(decodedToken);
                return decodedToken;
                // ...
            })

            .catch((error) => {
                // Handle error
                console.error(error);
                return null;
            });
    }

    public static verifyIdTokenFromEnv = (token: any) => {
        return token == process.env.FIREBASE_SECRET;
    }
}




