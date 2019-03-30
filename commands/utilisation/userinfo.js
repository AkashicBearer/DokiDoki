const { Command } = require('discord.js-commando')
const { RichEmbed } = require('discord.js');

module.exports = class UserInfoCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'userinfo',
			aliases: ['user'],
			group: 'utilisation',
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

	async run(message, args) {
		var member = message.channel.members.find('id', message.author.id);
		if(args.member){
        	member = args.member;
		}else{
        	member = message.channel.members.find('id', message.author.id);
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


        
	const UserinfoEmbed = new RichEmbed()
        UserinfoEmbed.setTitle(user.username + ' Userinfo')
		//embed.setDescription(' User info of ' + user.username)
		UserinfoEmbed.addField('Username', user.username, true )
		if(member.nickname){
			UserinfoEmbed.addField('Nickname ' , member.nickname, true)	
		}else{
			UserinfoEmbed.addField('Nickname ' , 'No Nickname set', true)
		}
		UserinfoEmbed.addField('User ID ', member.id)
		UserinfoEmbed.addField('Account Created at ' , crtStr)
		UserinfoEmbed.addField('Joined at ', joinStr)
		UserinfoEmbed.addField('Activity ', member.presence.status, true)
        UserinfoEmbed.addField('Playing ', member.presence.game ? user.presence.game.name : 'Not Playing Anything', true)
        UserinfoEmbed.addField('User Roles: ', roles)
		UserinfoEmbed.setThumbnail(user.avatarURL)
	message.channel.send(UserinfoEmbed);
};
};