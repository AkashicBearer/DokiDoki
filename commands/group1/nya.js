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
        const {body} = await superagent
        .get(`https://nekos.life/api/v2/img/neko`);
        const embed = new RichEmbed()
            embed.setColor("RANDOM")
            embed.setTitle("Have a Neko!")
            embed.setImage(body.url)
        message.channel.send(embed);
        }else{
        const {body} = await superagent 
        .get('https://nekos.life/api/v2/img/ngif')
            const embed1 = new RichEmbed()
                embed1.setColor("RANDOM")
                embed1.setTitle("Have a Neko GIF")
                embed1.setImage(body.url)
            message.channel.send(embed1);
    }}
};
