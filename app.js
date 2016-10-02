
var restify = require('restify');
var path = require('path');

var WebSocket = require('ws');
var builder = require('botbuilder');

var bot = require('./Bot/bin/Bot')

var server = restify.createServer();

var connector;

if (process.argv.indexOf('--console') === -1) {

  connector = new builder.ChatConnector({
    appId: process.env.MICROSOFT_APP_ID,
    appPassword: process.env.MICROSOFT_APP_PASSWORD
  });

  server.post('/api/messages', connector.listen());

  console.log("Launching Restify Server...");

  var app = server.listen(process.env.OPENSHIFT_NODEJS_PORT, process.env.OPENSHIFT_NODEJS_IP, function () {
    console.log(server.url);
  });

} else {
  connector = new builder.ConsoleConnector().listen();
}

var app = new bot.Bot(connector);




