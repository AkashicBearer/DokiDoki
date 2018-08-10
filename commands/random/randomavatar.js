const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');
const neko = require("nekos.life");
const superagent = require("superagent");
const send = require("quick.hook");

module.exports = class RandomAvatarCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'randomavatar',
            aliases: ['ra'],
            group: 'random',
            memberName: 'randomavatar',
            description: 'Sends a Random Avatar Image',
        });
    }
	async run(msg, args, neko) { 
	const {body} = await superagent 
        .get('https://nekos.life/api/v2/img/avatar')
        const embed = new RichEmbed()
	        embed.setTitle('Here is your Random Avatar')
            embed.setImage(body.url)
            embed.setColor('RANDOM')
        return msg.embed(embed);
	}
};
