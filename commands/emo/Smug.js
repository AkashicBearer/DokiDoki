const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const neko = require("nekos.life");
const fetch = require("node-fetch")

module.exports = class SmugCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'smug',
            group: 'emo',
            memberName: 'smug',
            description: 'Smug at a user.',
            args: [
                {
                    key: 'member',
                    prompt: 'Who to Smug at?',
                    type: 'member',
                    default: '',
                }
            ]
        });
    }
    async run(message, args, neko) {
        const IMGS = await fetch('https://nekos.life/api/v2/img/smug')
        .then(res => res.json()).catch(err => {
            message.channel.send("The gif-API is currently down, plese try again later \n")
        })
        const IMG = IMGS.url
        const smug = new MessageEmbed()

            if(message.author.id == args.member.id || !args.member.id){

                smug.setAuthor(`${message.author.username} is Smugging`)

            }else {

                smug.setAuthor(`${message.author.username} is Smugging at ${args.member.user.username}!`)
            
            }
                    
            smug.setImage(IMG)
            smug.setColor(0x23ff12)
            smug.setFooter(`Powered by Nekos.Life`)
        message.channel.send(smug)
    }   
};
