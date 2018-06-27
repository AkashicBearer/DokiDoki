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
            group: 'group3',
            memberName: 'fact',
            description: 'Sends a Random fact',
        });
    }
	async run(msg, args, neko) { 
	const body = await superagent 
        .get('https://nekos.life/api/v2/fact')
        const embed = new RichEmbed()
	        embed.setTitle('Random Fact~')
            embed.setDescription('Did you Know: ' + body.fact.charAt(0).toUpperCase + body.fact.slice(1))
            embed.setThumbnail('https://upload.wikimedia.org/wikipedia/commons/2/2e/Exclamation_mark_red.png')
            embed.setColor('RANDOM')
        return msg.embed(embed);
	}
};
