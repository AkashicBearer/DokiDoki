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
            description: 'Sends a NSFW Neko use -g for gif',
            examples: ["<ln -g", "<ln"]
        });
    }

  async run(message, msg, neko) {
    if(msg.indexOf("-g")){
    const {body} = await superagent
    .get(`https://nekos.life/api/v2/img/neko`);
    if (!message.channel.nsfw) return message.reply("You can use this command only on nsfw channels!");
    const embed = new RichEmbed()
        embed.setColor("RANDOM")
        embed.setTitle("Lewd Neko")
        embed.setImage(body.url)
    message.channel.send(embed);
    }else{
    const {body} = await superagent 
    .get('https://nekos.life/api/v2/img/nsfw_neko_gif')
    if (!message.channel.nsfw) return message.reply("You can only use this comand in a NSFW Channel");
        const embed1 = new RichEmbed()
            embed1.setColor("RANDOM")
            embed1.setTitle("Lewd Neko GIF")
            embed1.setImage(body.url)
        message.channel.send(embed1);
}}
}
