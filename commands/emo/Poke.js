const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const neko = require("nekos.life");
const fetch = require("node-fetch")

module.exports = class PokeCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'poke',
            aliases: [],
            group: 'emo',
            memberName: 'poke',
            description: 'Poke a user!',
            args: [
                {
                    key: 'member',
                    prompt: 'Who to Poke?',
                    type: 'member',
                }
            ]
        });
    }
    async run(message, args, neko) {
        const IMGS = await fetch('https://nekos.life/api/v2/img/poke')
            .then(res => res.json()).catch(err => {
                message.channel.send("The gif-API is currently down, plese try again later \n")
            })

        const IMG = IMGS.url

        const poke = new MessageEmbed()
            if(message.author.id == args.member.id){

                poke.setAuthor(`${message.author.username} is Pokng themselves?!`)
            
            }else {
                
                poke.setAuthor(`${message.author.username} is Poking ${args.member.user.username}!`)
            
            }
                    
            poke.setImage(IMG)
            poke.setColor(0x23ff12)
            poke.setFooter(`Powered by Nekos.Life`)
        message.channel.send(poke)
    }   
};
