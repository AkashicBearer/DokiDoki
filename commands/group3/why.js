const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');
const neko = require("nekos.life");
const superagent = require("superagent");
const send = require("quick.hook");

module.exports = class WhyCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'why',
            aliases: [],
            group: 'group3',
            memberName: 'why',
            description: 'why?',
        });
    }
	async run(msg, args, neko) { 
	const {body} = await superagent 
        .get('https://nekos.life/api/v2/why')
        const embed = new RichEmbed()
	        embed.setTitle('Random Fact~')
            embed.setDescription(`${body.why}`)
            embed.setColor('RANDOM')
        return msg.embed(embed);
	}
};
