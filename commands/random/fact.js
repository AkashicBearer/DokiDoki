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
	async run(message, args, neko) { 
        if (message.author.bot) return;
        superagent.get(`https://nekos.life/api/v2/fact`).then(body => {
            body = body.body
        
            const factEmbed = new RichEmbed()
                .setTitle('Random Fact')
                .setDescription('**Did you Know:** ' + body.fact.charAt(0).toUpperCase() + body.fact.slice(1))
                .setThumbnail('https://cdn.shopify.com/s/files/1/0185/5092/products/symbols-0143.png?v=1369543490')
                .setColor('RANDOM')  
            message.channel.send(factEmbed)
        }).catch(err => { 
            console.log(err)
            message.channel.send(`Sorry the API is currently eperiencing problems...`)
        })
	}
};
