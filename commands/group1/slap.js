const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');
const neko = require("nekos.life");
const superagent = require("superagent");

module.exports = class SlapCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'slap',
            aliases: [],
            group: 'group1',
            memberName: 'slap',
            description: 'Have a slap',
            args:[
                {
                    key: 'member',
                    prompt: 'Which user do you want to slap?',
                    type: 'string',
                }
            ]
        });
    }
	async run(msg, args, neko) { 
    superagent.get('https://nekos.life/api/v2/img/slap')
        .then(body => {
            const embed = new RichEmbed()
            embed.setDescription(msg.author + ' slaps ' + args.member)
            embed.setImage(body.url)
            embed.setColor('RANDOM')
             return msg.embed(embed);
        })
        .catch(err => {
            msg.channel.send("The gif-API is currently down, plese try again later \nOr try to help us get to 200 Servers so we can upgrade our API!")
        })
    }
};
