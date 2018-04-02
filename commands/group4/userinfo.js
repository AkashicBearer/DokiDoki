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
		const user = member.user;
		var roles = '';

		for(var i = 0; i<member.roles.array().length; i++){
			roles = roles + '`' + member.roles.array()[i].name + '`';
			if(i+1 < member.roles.array().length){
                    roles=roles+", ";
                }
		}

		const crtSpl = user.createdAt.toString().split(' ');
		const joinSpl = member.joinedAt.toString().split(' ');

		

		const months = {
            "Jan": "January",
            "Feb": "February",
            "Mar": "March",
            "Apr": "April",
            "May": "May",
            "Jun": "June",
            "Jul": "July",
            "Aug": "August",
            "Sep": "September",
            "Oct": "October",
            "Nov": "November",
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


        
	const embed = new RichEmbed()
		embed.setTitle(user.username + ' Userinfo')
		// Username, nick, joined  (Details)
		embed.setDescription(' User info of ' + user.username)
		embed.addField('Username', user.username, true )
		if(member.nickname){
			embed.addField('Nickname: ' , member.nickname, true)	
		}
		embed.addField('User ID: ', member.id)
		embed.addField('User Roles: ', roles)
		//Account 
		embed.addBlankField()
		embed.addField('Account Created at ' , crtStr)
		embed.addField('Joined at ', joinStr)
		embed.addField('Activity ', member.presence.status, true)
		embed.addField('Playing ', member.presence.game ? user.presence.game.name : 'Not Playing Anything', true)
		embed.setThumbnail(user.avatarURL)
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
