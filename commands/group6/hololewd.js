const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');
const neko = require("nekos.life");
const superagent = require("superagent");
const send = require("quick.hook");

module.exports = class HoloLewdCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'hololewd',
            aliases: ['hl'],
            group: 'group6',
            memberName: 'hololewd',
            description: 'Have a lewd Holo',
        });
    }
	async run(message, args, neko) { 
    if (!message.channel.nsfw) return message.reply("You can only use this comand in a NSFW Channel");
	const {body} = await superagent 
        .get('https://nekos.life/api/v2/img/hololewd')
        const embed = new RichEmbed()
	        embed.setTitle('Have some Holo!')
            embed.setImage(body.url)
            embed.setColor('RANDOM')
        message.channel.send(embed);
	}
};
