const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');
const neko = require("nekos.life");
const superagent = require("superagent");
const send = require("quick.hook");

module.exports = class TrapCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'hentaigif',
            aliases: ['rhg'],
            group: 'group6',
            memberName: 'hentaigif',
            description: 'Have a random Hentai GIF',
        });
    }
	async run(message, args, neko) { 
    if (!message.channel.nsfw) return message.reply("You can only use this comand in a NSFW Channel");
	const {body} = await superagent 
        .get('https://nekos.life/api/v2/img/Random_hentai_gif')
        const embed = new RichEmbed()
	        embed.setTitle('Have a random Hentai GIF!')
            embed.setImage(body.url)
            embed.setColor('RANDOM')
        message.channel.send(embed);
	}
};
