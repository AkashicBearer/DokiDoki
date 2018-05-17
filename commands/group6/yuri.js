const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');
const neko = require("nekos.life");
const superagent = require("superagent");
const send = require("quick.hook");

module.exports = class YuriCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'yuri',
            aliases: [],
            group: 'group6',
            memberName: 'yuri',
            description: 'Have some yuri',
        });
    }
	async run(message, args, neko) { 
    if (!message.channel.nsfw) return message.reply("You can only use this comand in a NSFW Channel");
	const {body} = await superagent 
        .get('https://nekos.life/api/v2/img/yuri')
        const embed = new RichEmbed()
	        embed.setTitle('Have some Yuri!')
            embed.setImage(body.url)
            embed.setColor('RANDOM')
        message.channel.send(embed);
	}
};
