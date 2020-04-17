const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const neko = require("nekos.life");
const fetch = require("node-fetch")

module.exports = class SlapCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'slap',
            group: 'emo',
            memberName: 'slap',
            description: 'slap at a user.',
            args: [
                {
                    key: 'member',
                    prompt: 'Who to slap?',
                    type: 'member',
                }
            ]
        });
    }
    async run(message, args, neko) {
    const IMGS = await fetch('https://nekos.life/api/v2/img/slap')
        .then(res => res.json()).catch(err => {
            message.channel.send("The gif-API is currently down, plese try again later \n")
        })
    
    const IMG = IMGS.url
    const slap = new MessageEmbed()
        if(message.author.id == args.member.id || !args.member.id){

            slap.setAuthor(`${message.author.username} is slapging themselves?!`)
        
        }else {
            
            slap.setAuthor(`${message.author.username} is slaping ${args.member.user.username}!`)
        
        }
                
        slap.setImage(IMG)
        slap.setColor(0x23ff12)
        slap.setFooter(`Powered by Nekos.Life`)
    message.channel.send(slap)
    }   
};
