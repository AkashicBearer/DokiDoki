const { Command } = require('discord.js-commando')
const { RichEmbed } = require('discord.js');

module.exports = class channelinfoCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'channelinfo',
			aliases: ['channel', 'ci'],
			group: 'group4',
			memberName: 'channelinfo',
			description: 'Gets information about the channel.',
			examples: ['channelinfo'],
			guildOnly: true,

		});
	}

	async run(msg, args) {
		var channel = msg.channel;


		const crtSpl = channel.createdAt.toString().split(' ');

		

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
		embed.setTitle(channel.name + ' channelinfo')
		embed.addField('channel Category', channel.parent.name, true)
		embed.addField('channel Name', channel.name, true)
		embed.addField('channel ID ', channel.id)
		if(channel.topic){
			embed.addField('Channel Topic ', channel.topic)
		}
		embed.addField('NSFF: ', channel.nsfw ? 'Yes' : 'No')

		embed.addBlankField()
		embed.addField('channel created at ' , crtStr, true)
	return msg.embed(embed);
};
};

