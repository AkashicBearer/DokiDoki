const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const neko = require("nekos.life");
const fetch = require("node-fetch")

module.exports = class BakaCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'baka',
            group: 'emo',
            memberName: 'baka',
            description: 'Sends a Image telling someone they are a baka.',
			args: [
                {
                    key: 'member',
                    prompt: 'Who is a Baka?',
                    type: 'member',
                    default: ''
                }
            ],
        });
    };

    async run(message, args, neko) {

        const baka = new MessageEmbed()

        const IMGS = await fetch('https://nekos.life/api/v2/img/baka')
            .then(res => res.json()).catch(err => {
                message.channel.send("The gif-API is currently down, plese try again later \n")
            })
            
            const IMG = IMGS.url

             if(message.author.id == args.member.id){

                 baka.setAuthor(`${message.author.username} thinks they are a baka!`)

             }else if(!args.member){

                 baka.setAuthor(`Someone is being a Baka!`)

             } else {

                 baka.setAuthor(`${message.author.username} thinks ${args.member.user.username} is a baka!`)
                 
             }
                baka.setImage(IMG)
                baka.setColor(0x23ff12)
                baka.setFooter(`Powered by Nekos.Life`)
            message.channel.send(baka)
    };
};
