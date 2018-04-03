const { Command } = require('discord.js-commando')
const { RichEmbed } = require('discord.js');

module.exports = class guildinfoCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'guildinfo',
			aliases: ['guild', 'gi'],
			group: 'group4',
			memberName: 'guildinfo',
			description: 'Gets information about the guild.',
			examples: ['guildinfo'],
			guildOnly: true,

		});
	}

	async run(msg, args) {
		var guild = msg.guild;


		const crtSpl = guild.createdAt.toString().split(' ');

		

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
		

        
	const embed = new RichEmbed()
		embed.setTitle(guild.name + ' Guildinfo')
		embed.addField('Guild Name', guild.name, true)
		embed.addField('Guild Owner', guild.members.find('id',guild.ownerID).username, true)
		embed.addField('Guild ID: ', guild.id, true)
		embed.addField('Region', guild.region, true)
		embed.addField('Role Count ', guild.roles.array().length, true)
		embed.addField('Member Count ', guild.memberCount, true)
		embed.addField('Channel Count ', guild.channels.array().length, true)
		//Account 
		embed.addBlankField()
		embed.addField('Guild created at ' , crtStr)
		//embed.setThumbnail(guild.icon)
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
