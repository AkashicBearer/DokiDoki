const { Command } = require('discord.js-commando')
const { RichEmbed } = require('discord.js');

module.exports = class HighFiveCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'highfive',
			aliases: ['hf'],
            group: 'group1',
            memberName: 'highfive',
            description: 'Highfive someone',			
			args: [
				{
					key: 'member',
					label: 'user',
					prompt: 'Who Do you want to HighFive?',
					type: 'member'
				}
			]
        });
    }
	
	async run(msg, args) {
		const member = args.member;
        const user = member.user;
        const embed = new RichEmbed()
            .setDescription(args.member.user + ' Highfive!')
			.setImage("https://images-ext-1.discordapp.net/external/J89-7SA5obY9pFP3jp191-Meetsb47wNh53FnnZs-HA/http/i.imgur.com/ebQWKZU.gif?width=450&height=253")
			.setColor(0x212121)
        return msg.embed(embed);
    }
};