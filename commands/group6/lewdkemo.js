const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');
const neko = require("nekos.life");
const superagent = require("superagent");
const send = require("quick.hook");

module.exports = class LewdKemoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'lewdkemo',
            aliases: ['lk'],
            group: 'nsfw',
            memberName: 'lewdkemo',
            description: 'Have some lewd kemo',
        });
    }
	async run(message, args, neko) { 
    if (!message.channel.nsfw) return message.reply("You can only use this comand in a NSFW Channel");
	superagent.get('https://nekos.life/api/v2/img/lewdkemo')
        .then(body => {
            body = body.body
        const embed = new RichEmbed()
	        embed.setTitle('Have some Kemo!')
            embed.setImage(body.url)
            embed.setColor('RANDOM')
        message.channel.send(embed);
          })
        .catch(err => {
            msg.channel.send("The image-API is currently down, plese try again later \nOr try to help us get to 200 Servers so we can upgrade our API!")
        })
	}
};
