const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');
const neko = require("nekos.life");
const superagent = require("superagent");

module.exports = class FeedCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'feed',
            aliases: [],
            group: 'group1',
            memberName: 'feed',
            description: 'Feed someone\~',
            args:[
                {
                    key: 'member',
                    prompt: 'Which user do you want to feed?',
                    type: 'string',
                }
            ]
        });
    }
	async run(msg, args, neko) { 
    const {body} = await superagent 
        .get('https://nekos.life/api/v2/img/feed')
    const embed = new RichEmbed()
        embed.setDescription(msg.author + ' feeds ' + args.member)
        embed.setImage(body.url)
        embed.setColor("RANDOM")
   return msg.embed(embed);
    }
};
