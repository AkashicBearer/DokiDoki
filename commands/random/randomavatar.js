const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');
const neko = require("nekos.life");
const superagent = require("superagent");
const send = require("quick.hook");

module.exports = class RandomAvatarCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'randomavatar',
            aliases: ['ra'],
            group: 'random',
            memberName: 'randomavatar',
            description: 'Sends a Random Avatar',
        });
    }
	async run(message, args, neko) { 
        if (message.author.bot) return;
        superagent.get(`https://nekos.life/api/v2/img/avatar`).then(body => {
            body = body.body
        
            const RandomAvatarEmbed = new RichEmbed()
                .setImage(body.url)                
                .setColor('RANDOM')  
            message.channel.send(RandomAvatarEmbed)
        }).catch(err => { 
            console.log(err)
            message.channel.send(`Sorry the API is currently eperiencing problems...`)
        })
	}
};
