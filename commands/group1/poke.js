const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');
const neko = require("nekos.life");
const superagent = require("superagent");

module.exports = class PokeCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'poke',
            aliases: [],
            group: 'group1',
            memberName: 'poke',
            description: 'Have a poke',
            args:[
                {
                    key: 'member',
                    prompt: 'Which user do you want to poke?',
                    type: 'string',
                }
            ]
        });
    }
	async run(msg, args, neko) { 
    const {body} = await superagent 
        .get('https://nekos.life/api/v2/img/poke')
    const embed = new RichEmbed()
        embed.setDescription(msg.author + ' pokes' + args.member)
        embed.setImage(body.url)
        embed.setColor("RANDOM")
   return msg.embed(embed);
    }
};
