const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');
const neko = require("nekos.life");
const superagent = require("superagent");
const send = require("quick.hook");

module.exports = class kissCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'kiss',
            aliases: ['chu'],
            group: 'group1',
            memberName: 'kiss',
            description: 'Who do you want to kiss?',
			args: [
				{
				key: 'member',
				label: 'user',
				prompt: 'Who to kiss?',
				type: 'member'
				}
			]
        });
    }
	async run(msg, args, neko) { 
	const {body} = await superagent 
        .get('https://nekos.life/api/v2/img/kiss')
        const embed = new RichEmbed()
	        embed.setDescription(msg.author + ' Kisses ' + args.member)
            embed.setImage(body.url)
            embed.setColor('RANDOM')
        return msg.embed(embed);
	}
};
