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
			roles = roles + '`' + member.roles.array()[i].name + '`';
			if(i+1 < member.roles.array().length){
                    roles=roles+", ";
                }
		}

		const crtSpl = user.createdAt.split(' ');
		const joinSpl = user.joinedAt.split(' ');

		

		const months = {
            "Jan": "January",
            "Feb": "Feruary",
            "Mar": "March",
            "Apr": "April",
            "May": "May",
            "Jun": "June",
            "Jul": "July",
            "Aug": "August",
            "Sep": "September",
            "Oct": "October",
            "Dec": "December"
        }

        const weekdays = {
            "Mon": "Monday",
            "Tue": "Tuesday",
            "Wed": "Wednesday",
            "Thu": "Thursday",
            "Fri": "Friday",
            "Sat": "Saturday",
            "Sun": "Sunday"
        }

        var crtStr = weekdays[crtSpl[0]]+', '+months[crtSpl[1]]+' ' + crtSpl[2] + ', ' + crtSpl[3] + ' | '+crtSpl[4] + ' | '+crtSpl[6];
		var joinStr = weekdays[joinSpl[0]]+', '+months[joinSpl[1]]+' ' + joinSpl[2] + ', ' + joinSpl[3] + ' | '+joinSpl[4] + ' | '+joinSpl[6];


        const user = member.user;
	const embed = new RichEmbed()
		.setTitle(user.username + ' Userinfo')
		// Username, nick, joined  (Details)
		.setDescription(' User info of ' + user.username)
		.addField('Username', user.username, true )
		.addField('Nickname: ' , member.nickname, true)
		.addField('User ID: ', member.id)
		.addField('User Roles: ', roles)
		//Account 
		.addField('User Details', ' ')
		.addField('Account Created at ' + crtStr)
		.addField('Joined at ', joinStr)
		.addField('Activity ', member.presence.status, true)
		.addField('Playing ', member.presence.game ? user.presence.game.name : 'Not Playing Anything', true)
		.setThumbnail(member.avatarURL)
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
