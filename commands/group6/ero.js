const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');
const neko = require("nekos.life");
const superagent = require("superagent");
const send = require("quick.hook");

module.exports = class EroCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'ero',
            aliases: [],
            group: 'group6',
            memberName: 'ero',
            description: 'Sends Erotic stuff',
            examples: ["<ero","ero -yuri", "<ero -feet","<ero -neko","<ero -holo","<ero -kitsune"]
        });
    }

  async run(message, msg, neko) {

    if(msg.indexOf("-yuri") == false){
        const {body} = await superagent
        .get(`https://nekos.life/api/v2/img/eroyuri`);
        if (!message.channel.nsfw) return message.reply("You can only use this comand in a NSFW Channel");
        const embed5 = new RichEmbed()
            embed5.setColor("RANDOM")
            embed5.setTitle("Random Lewd Yuri")
            embed5.setImage(body.url)
        message.channel.send(embed5);
    }

    else if(msg.indexOf("-neko") == false){
        const {body} = await superagent
        .get(`https://nekos.life/api/v2/img/eron`);
        if (!message.channel.nsfw) return message.reply("You can only use this comand in a NSFW Channel");
        const embed1 = new RichEmbed()
            embed1.setColor("RANDOM")
            embed1.setTitle("Random Erotic Neko")
            embed1.setImage(body.url)
        message.channel.send(embed1);
    }

    else if(msg.indexOf("-feet") == false){
        const {body} = await superagent
        .get(`https://nekos.life/api/v2/img/erofeet`);
        if (!message.channel.nsfw) return message.reply("You can only use this comand in a NSFW Channel");
        const embed2 = new RichEmbed()
            embed2.setColor("RANDOM")
            embed2.setTitle("Random Erotic Feet")
            embed2.setImage(body.url)
        message.channel.send(embed2);
    }
    
    else if(msg.indexOf("-holo") == false){
        const {body} = await superagent
        .get(`https://nekos.life/api/v2/img/holoero`);
        if (!message.channel.nsfw) return message.reply("You can only use this comand in a NSFW Channel");
        const embed3 = new RichEmbed()
            embed3.setColor("RANDOM")
            embed3.setTitle("Random Erotic Holo")
            embed3.setImage(body.url)
        message.channel.send(embed3);
    }
    
    else if(msg.indexOf("-kitsune") == false){
        const {body} = await superagent
        .get(`https://nekos.life/api/v2/img/erok`);
        if (!message.channel.nsfw) return message.reply("You can only use this comand in a NSFW Channel");
        const embed4 = new RichEmbed()
            embed4.setColor("RANDOM")
            embed4.setTitle("Random Erotic Kitsune")
            embed4.setImage(body.url)
        message.channel.send(embed4);
    }else{
    const {body} = await superagent 
    .get('https://nekos.life/api/v2/img/ero')
    if (!message.channel.nsfw) return message.reply("You can only use this comand in a NSFW Channel");
        const embed = new RichEmbed()
            embed.setColor("RANDOM")
            embed.setTitle("Random erotic stuff")
            embed.setImage(body.url)
        message.channel.send(embed);
    }
};
};
