const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');
const neko = require("nekos.life");
const superagent = require("superagent");
const send = require("quick.hook");

module.exports = class SologCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'solog',
            aliases: [],
            group: 'group6',
            memberName: 'solog',
            description: 'Have some solog',
        });
    }
	async run(message, args, neko) { 
    if (!message.channel.nsfw) return message.reply("You can only use this comand in a NSFW Channel");
	superagent.get('https://nekos.life/api/v2/img/solog')
        .then(body => {
        const embed = new RichEmbed()
	        embed.setTitle('Have some Solog!')
            embed.setImage(body.url)
            embed.setColor('RANDOM')
        message.channel.send(embed);
        })
        .catch(err => {
            msg.channel.send("The image-API is currently down, plese try again later \nOr try to help us get to 200 Servers so we can upgrade our API!")
        })
	}
};
