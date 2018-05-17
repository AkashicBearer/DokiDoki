const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');
const neko = require("nekos.life");
const superagent = require("superagent");
const send = require("quick.hook");

module.exports = class RandomNSFWAvatarCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'randomnsfwavatar',
            aliases: ['rnsfwa'],
            group: 'group6',
            memberName: 'randomnsfwavatar',
            description: 'Get a Random NSFW Avatar',
        });
    }
	async run(message, args, neko) { 
    if (!message.channel.nsfw) return message.reply("You can only use this comand in a NSFW Channel");
	const {body} = await superagent 
        .get('https://nekos.life/api/v2/img/nsfw_avatar')
        const embed = new RichEmbed()
	        embed.setTitle('Here is your radom NSFW Avatar!')
            embed.setImage(body.url)
            embed.setColor('RANDOM')
        message.channel.send(embed);
	}
};
