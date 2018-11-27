const RESTRICTED = ['469473019425849355', '258337390643511306'];
module.exports = {
	run: (bot, message, args) => {
		if (RESTRICTED.includes(message.author.id)) {
			if (!args[0]) return message.reply('Not enough arguments provided!');
			bot.user.setAvatar(args[0]).then(() => {
				message.reply('Avatar successfully set!');
			}).catch(() => {
				message.reply('Something went wrong when setting the avatar. Make sure it is a valid link!');
			});
		}
	},
	settings: {
		name: 'avatar',
	}
};
