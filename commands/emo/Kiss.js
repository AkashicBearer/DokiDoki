const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const neko = require("nekos.life");
const fetch = require("node-fetch")

module.exports = class KissCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'kiss',
            aliases: ['chu'],
            group: 'emo',
            memberName: 'kiss',
            description: 'Kiss a user!',
            args: [
                {
                    key: 'member',
                    prompt: 'Who to kiss?',
                    type: 'member',
                }
            ]
        });
    }
    async run(message, args, neko) {
        const IMGS = await fetch('https://nekos.life/api/v2/img/kiss')
        .then(res => res.json()).catch(err => {
            message.channel.send("The gif-API is currently down, plese try again later \n")
        })
    
        const IMG = IMGS.url
        const kiss = new MessageEmbed()
            if(message.author.id == args.member.id){

                kiss.setAuthor(`${message.author.username} is kissing themselves?!`)
            
            }else {

                kiss.setAuthor(`${message.author.username} is kissing ${args.member.user.username} <3`)
            
            }
                    
            kiss.setImage(IMG)
            kiss.setColor(0x23ff12)
            kiss.setFooter(`Powered by Nekos.Life`)
        message.channel.send(kiss)
    }   
};
