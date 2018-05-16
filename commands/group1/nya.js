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
            description: 'Sends a neko',

        });
    }
    async run(message, msg, neko) {
        let {body} = await superagent
        .get(`https://nekos.life/api/neko`);
      
        const embed = new RichEmbed()
            embed.setColor("RANDOM")
            embed.setTitle("Have a Neko")
            embed.setImage(body.neko)
        message.channel.send(embed);
    }
};
