const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const neko = require("nekos.life");
const fetch = require("node-fetch")

module.exports = class NyaCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'nya',
            aliases: ['neko'],
            group: 'emo',
            memberName: 'nya',
            description: 'Sends a Neko \nUse -g for Neko GIF',
            examples:['<nya', '<nya -g', '<neko', '<neko -g']

        });
    }

    async run(message, msg, neko) {
        if(msg.indexOf("-g")){
            const IMGS = await fetch('https://nekos.life/api/v2/img/neko')
            .then(res => res.json()).catch(err => {
                message.channel.send("The gif-API is currently down, plese try again later \n")
            })
            
            const IMG = IMGS.url

            const embed = new MessageEmbed()
                embed.setAuthor("Have a random Neko!")
                embed.setImage(IMG)
                embed.setColor('RANDOM')
                embed.setFooter(`Powered by Nekos.Life`)
            message.channel.send(embed);

        }else{
            const IMGS = await fetch('https://nekos.life/api/v2/img/ngif')
            .then(res => res.json()).catch(err => {
                message.channel.send("The gif-API is currently down, plese try again later \n")
            })
            
            const IMG = IMGS.url
            const embed = new MessageEmbed()
                embed.setAuthor("Have a Random Neko GIF!")
                embed.setImage(IMG)
                embed.setColor('RANDOM')
                embed.setFooter(`Powered by Nekos.Life`)
            message.channel.send(embed);
    }}
};
