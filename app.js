var tmi = require('tmi.js');
var options = require('./config.js')
var bot = new tmi.client(options);
bot.connect();

bot.on('connected', function (channel) {
	console.log("Bot connected to channel")
	client.action("mstiekema", "Yucibot connected MrDestructoid")
	bot.action("mstiekema", "Yucibot connected MrDestructoid")
});

bot.on('message', function (channel, user, message, self) {
	 if (message.startsWith("!test")) {
    	bot.say(channel, "This is a command xD")
	   	console.log('Did the thing')
	   	console.log(channel)
	}
	else if (message.startsWith("!twitter")) {
		bot.say(channel, "Merijn his Twitter is https://www.twitter.com/Mstiekema_")
	}
	else if (message.startsWith("!slap")) {
		bot.say(channel, user.username + " slapped" + message.substring(message.indexOf(" ")) + " in the face")
	}
	else if (message.startsWith("!quit")) {
		if (user.mod === true) {
			client.say(channel, "Shutting down Yucibot MrDestructoid")
			client.disconnect()}
		else {
			bot.say(channel, "You are not allowed to turn off the bot OMGScoots")
		};
	};
});