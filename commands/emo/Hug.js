const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const neko = require("nekos.life");
const fetch = require("node-fetch")

module.exports = class HugCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'hug',
            group: 'emo',
            memberName: 'hug',
            description: 'Hug a user!',
            args: [
                {
                    key: 'member',
                    prompt: 'Who to hug?',
                    type: 'member',
                }
            ]
        });
    }
    async run(message, args, neko) {
        const IMGS = await fetch('https://nekos.life/api/v2/img/hug')
            .then(res => res.json()).catch(err => {
                message.channel.send("The gif-API is currently down, plese try again later \n")
            })
    
        const IMG = IMGS.url
        const hug = new MessageEmbed()

            if(message.author.id == args.member.id){

                hug.setAuthor(`${message.author.username} is hugging themselves?!`)
            
            }else {
                
                hug.setAuthor(`${message.author.username} is hugging ${args.member.user.username}!`)
            
            }
                    
            hug.setImage(IMG)
            hug.setColor(0x23ff12)
            hug.setFooter(`Powered by Nekos.Life`)
        message.channel.send(hug)
    }   
};
