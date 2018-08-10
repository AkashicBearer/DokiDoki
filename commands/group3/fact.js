const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');
const neko = require("nekos.life");
const superagent = require("superagent");
const send = require("quick.hook");

module.exports = class FactCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'fact',
            aliases: [],
            group: 'random',
            memberName: 'fact',
            description: 'Sends a Random fact',
        });
    }
	async run(msg, args, neko) { 
	const {body} = await superagent 
        .get('https://nekos.life/api/v2/fact')
        const embed = new RichEmbed()
	        embed.setTitle('Random Fact~')
            embed.setDescription('Did you Know: ' + body.fact.charAt(0).toUpperCase() + body.fact.slice(1))
            embed.setThumbnail('https://cdn.shopify.com/s/files/1/0185/5092/products/symbols-0143.png?v=1369543490')
            embed.setColor('RANDOM')
        return msg.embed(embed);
	}
};
