const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');
const neko = require("nekos.life");
const superagent = require("superagent");
const send = require("quick.hook");

module.exports = class NyaCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'nya',
            aliases: ['neko'],
            group: 'group1',
            memberName: 'nya',
            description: 'Sends a Neko \nUse -g for Neko GIF',
            examples:['<nya', '<nya -g', '<neko', '<neko -g']

        });
    }

    async run(message, msg, neko) {
        if(msg.indexOf("-g")){
            superagent.get('https://nekos.life/api/v2/img/neko')
        .then(body => {
            body = body.body
            const embed = new RichEmbed()
            embed.setDescription("Have a Neko!")
            embed.setImage(body.url)
            embed.setColor('RANDOM')
             message.channel.send(embed);
        })
        .catch(err => {
            console.log(err)
            message.channel.send("The image-API is currently down, plese try again later \nOr try to help us get to 200 Servers so we can upgrade our API!")
        })
        }else{
            superagent.get('https://nekos.life/api/v2/img/ngif')
        .then(body => {
            body = body.body
            const embed = new RichEmbed()
            embed.setDescription("Have a Neko GIF!")
            embed.setImage(body.url)
            embed.setColor('RANDOM')
             message.channel.send(embed);
        })
        .catch(err => {
            msg.channel.send("The gif-API is currently down, plese try again later \nOr try to help us get to 200 Servers so we can upgrade our API!")
        })
    }}
};
