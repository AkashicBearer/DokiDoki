const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class avatarCommand extends commando.Command {
	constructor (client) {
		super(client, {
			'name': 'avatar',
			'memberName': 'avatar',
			'group': 'group4',
			'aliases': ['ava'],
			'description': 'Gets the avatar from a user',
			'format': 'MemberID|MemberName(partial or full) [ImageSize]',
			'examples': ['avatar Favna 2048'],
			'guildOnly': true,

			'args': [
				{
					'key': 'member',
					'prompt': 'What user would you like to get the avatar from?',
					'type': 'member'
				},
			]
		});
	}

	fetchExt (str) {
		return str.substring(str.length - 14, str.length - 8);
	}

	run (msg, args) {
		const ava = args.member.user.displayAvatarURL(),
			embed = new Discord.MessageEmbed(),
			ext = this.fetchExt(ava);

		embed
			.setColor(0x23ff12)
			.setImage(ext.includes('gif') ? `${ava}&f=.gif` : ava)
			.setTitle(args.member.displayName)
			.setURL(ava)
			.setDescription(`[Direct Link](${ava})`);
		return msg.embed(embed);
	}
};
