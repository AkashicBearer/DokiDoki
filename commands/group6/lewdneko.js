const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');
const neko = require("nekos.life");
const superagent = require("superagent");
const send = require("quick.hook");

module.exports = class LewdNekoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'lewdneko',
            aliases: ['ln'],
            group: 'group6',
            memberName: 'lewdneko',
            description: 'Sends a NSFW Neko',
        });
    }

  async run(message, msg, neko) {
    let {body} = await superagent
    .get(`https://nekos.life/api/lewd/neko`);
    if (!message.channel.nsfw) return message.reply("You can use this command only on nsfw channels!");
  
    const embed = new RichEmbed()
        embed.setColor("RANDOM")
        embed.setTitle("Lewd Neko")
        embed.setImage(body.neko)
    message.channel.send(embed);
}
}
