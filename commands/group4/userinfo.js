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
		embed.setTitle(user.username + ' User info')
		embed.setDescription(' User info of ' + user.username)
		embed.addField(`Username: ${user.username}`, `Nickname: ${member.nickname}`, `Joined at: ${member.joinedAt}`)
		embed.addField(`User Details`, `Account Create at: ${user.createdAt}`, `Activity: ${user.presence.status}`, `Playing: ${user.presence.game ? user.presence.game.name : 'None'}`)
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
