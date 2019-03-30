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
            group: 'random',
            memberName: 'why',
            description: 'Sends a Random Question',
        });
    }
	async run(message, args, neko) { 
        if (message.author.bot) return;
        superagent.get(`https://nekos.life/api/v2/why`).then(body => {
            body = body.body
        
            const factEmbed = new RichEmbed()
                .setTitle('Random Fact')
                .setDescription(body.why.charAt(0).toUpperCase() + body.why.slice(1))
                .setThumbnail('https://cdn.shopify.com/s/files/1/0185/5092/products/symbols-0143.png?v=1369543490')
                .setColor('RANDOM')  
            message.channel.send(factEmbed)
        }).catch(err => { 
            console.log(err)
            message.channel.send(`Sorry the API is currently eperiencing problems...`)
        })
	}
};
