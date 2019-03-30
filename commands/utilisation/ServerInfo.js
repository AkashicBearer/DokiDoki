const { Command } = require('discord.js-commando')
const { RichEmbed } = require('discord.js');

module.exports = class guildinfoCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'guildinfo',
			aliases: ['guild', 'gi', 'serverinfo', 'si'],
			group: 'utilisation',
			memberName: 'guildinfo',
			description: 'Gets information about the guild.',
			examples: ['guildinfo'],
			guildOnly: true,
		});
	}

	async run(message, args) {
		var guild = message.guild;


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
		

        
	const GuildInfoEmbed = new RichEmbed()
        .setTitle(guild.name + ' Guildinfo')
        .addField('Guild Name', guild.name, true)
		.addField('Guild Owner', guild.members.find('id',guild.ownerID).user.username, true)
		.addField('Guild ID ', guild.id)
		.addField('Member Count ', guild.memberCount, true)
		.addField('Online Members ', guild.presences.array().length, true)
		.addField('Channel Count ', guild.channels.array().length, true)
		.addField('Role Count ', guild.roles.array().length, true)
		.addBlankField()
		.addField('Guild created at ' , crtStr, true)
		.addField('Region', guild.region, true)
		.setThumbnail(guild.iconURL)
	return message.embed(GuildInfoEmbed);
};
};