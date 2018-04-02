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
					type: 'member',
					default: ''
				}
			]
		});
	}

	async run(msg, args) {
		var member = msg.channel.members.find('id', msg.author.id);
		if(args.member){
        	member = args.member;
		}else{
        	member = msg.channel.members.find('id', msg.author.id);
		}
		var roles = '';

		for(var i = 0; i<member.roles.array().length; i++){
			roles = roles + '`' + msg.member.roles.array()[0].name + '`';
			if(i+1 < member.roles.array().length){
                    roles=roles+", ";
                }
		}

        const user = member.user;
	const embed = new RichEmbed()
		.setTitle(user.username + ' Userinfo')
		// Username, nick, joined  (Details)
		.setDescription(' User info of ' + member.username)
		.addField('Username', member.username, true )
		.addField('Nickname: ' , member.nickname, true)
		.addField('User ID: ', member.id)
		.addField('User Roles: ', roles)
		//Account 
		.addField('User Details', 'Account Create at: ' + member.createdAt)
		.addField('Joined at: ', member.joinedAt)
		.addField('Activity: ', member.presence.status, true)
		.addField('Playing: ', member.presence.game ? user.presence.game.name : 'Not Playing Anything', true)
		.setThumbnail(args.member.avatarURL)
	return msg.embed(embed);
};
};

// original code
		/*		**❯ Member Details**
			${member.nickname !== null ? ' • Nickname: ${member.nickname}' : ' • No nickname'}
			 • Roles: ${member.roles.map(roles => '\'${roles.name}\'').join(', ')}
			 • Joined at: ${member.joinedAt}

			**❯ User Details**
			 • Created at: ${user.createdAt}${user.bot ? '\n • Is a bot account' : ''}
			 • Status: ${user.presence.status}
			 • Game: ${user.presence.game ? user.presence.game.name : 'None'}
        ');*/
