const RESTRICTED = ['469473019425849355', '258337390643511306'];
const { RichEmbed } = require('discord.js');
module.exports = {
	run: (bot, message, args) => {
		if (RESTRICTED.includes(message.author.id)) {
			if (!args[1]) return message.reply('Not enough arguments provided!');
			let embed = new RichEmbed()
				.setColor(args.shift().toUpperCase())
				.setDescription(args.join(' '));
			message.channel.send(embed).then(() => message.delete() );
		}
	},
	settings: {
		name: 'send',
	}
};
