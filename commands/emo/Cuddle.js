const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const neko = require("nekos.life");
const fetch = require("node-fetch")

module.exports = class CuddleCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'cuddle',
            group: 'emo',
            memberName: 'cuddle',
            description: 'Cuddle a user!',
            args: [
                {
                    key: 'member',
                    prompt: 'Who to cuddle?',
                    type: 'member',
                }
            ]
        });
    }
    async run(message, args, neko) {
        const IMGS = await fetch('https://nekos.life/api/v2/img/cuddle')
        .then(res => res.json()).catch(err => {
            message.channel.send("The gif-API is currently down, plese try again later \n")
        })
        
        const IMG = IMGS.url
        const cuddle = new MessageEmbed()
            if(message.author.id == args.member.id){

                cuddle.setAuthor(`${message.author.username} is cuddling themselves?!`)
            
            }else {
                
                cuddle.setAuthor(`${message.author.username} is cuddling ${args.member.user.username}!`)
            
            }
                    
            cuddle.setImage(IMG)
            cuddle.setColor(0x23ff12)
            cuddle.setFooter(`Powered by Nekos.Life`)
        message.channel.send(cuddle)
    }   
};
