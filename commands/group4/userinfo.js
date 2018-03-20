const stripIndents = require('common-tags').stripIndents;
const { Command } = require('discord.js-commando')

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
		return msg.reply(stripIndents`
			Info on **${user.username}#${user.discriminator}** (ID: ${user.id})

			**❯ Member Details**
			${member.nickname !== null ? ` • Nickname: ${member.nickname}` : ' • No nickname'}
			 • Roles: ${member.roles.map(roles => `\`${roles.name}\``).join(', ')}
			 • Joined at: ${member.joinedAt}

			**❯ User Details**
			 • Created at: ${user.createdAt}${user.bot ? '\n • Is a bot account' : ''}
			 • Status: ${user.presence.status}
			 • Game: ${user.presence.game ? user.presence.game.name : 'None'}
        `);
};
};
