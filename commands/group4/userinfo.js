const { Command } = require('discord.js-commando')
const { RichEmbed } = require('discord.js');

module.exports = class UserInfoCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'userinfo',
			aliases: ['user'],
			group: 'group4',
			memberName: 'userinfo',
			description: 'Gets information about a user.',
			examples: ['userinfo @...'],
			guildOnly: true,

			args: [
				{
					key: 'member',
					label: 'user',
					prompt: 'What user would you like to snoop on?',
					type: 'member'
				}
			]
		});
	}

	async run(msg, args) {
        const member = args.member;
        const user = member.user;
	const embed = new RichEmbed()
		.setTitle(user.username + ' User info')
		// Username, nick, joined  (Details)
		.setDescription(' User info of ' + user.username)
		.addField(`Username: ${user.username}`, true)
		.addField(`Nickname: ${member.nickname}`, true)
		.addField(`Joined at: ${member.joinedAt}`, true)
		//Account 
		.addField(`User Details`, `Account Create at: ${user.createdAt}`, true)
		.addField(`Activity: ${user.presence.status}`, true)
		.addField(`Playing: ${user.presence.game ? user.presence.game.name : 'None'}`, true)
		.setThumbnail(args.member.user.avatarURL)
		/*		**❯ Member Details**
			${member.nickname !== null ? ` • Nickname: ${member.nickname}` : ' • No nickname'}
			 • Roles: ${member.roles.map(roles => `\`${roles.name}\``).join(', ')}
			 • Joined at: ${member.joinedAt}

			**❯ User Details**
			 • Created at: ${user.createdAt}${user.bot ? '\n • Is a bot account' : ''}
			 • Status: ${user.presence.status}
			 • Game: ${user.presence.game ? user.presence.game.name : 'None'}
        `);*/
	return msg.embed(embed);
};
};
