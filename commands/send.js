const RESTRICTED = ['469473019425849355', '245877990938902529'];
const { RichEmbed } = require('discord.js');
module.exports = {
	run: (message, args) => {
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
