const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');
const neko = require("nekos.life");
const superagent = require("superagent");
const send = require("quick.hook");

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
                },
                {
                    key: 'stuff',
                    prompt: 'What would u like to Poke?',
                    type: 'string',
                    default: '',
                    validate: stuff => {
                        if (stuff.length < 201) return true;
                        return 'Message Content is above 200 characters';
                    }
                }
            ]
        });
    }
async run(msg, args, neko) {
        superagent.get('https://nekos.life/api/v2/img/poke')
        .then(body => {
            body = body.body
        const poke = new RichEmbed()
            if(msg.author.id == args.member.id){
                poke.setAuthor(`${msg.author.username} is Pokng themselves?!`)
            }else {
                poke.setAuthor(`${msg.author.username} is Poking ${args.member.user.username}!`)
            }
                    
            poke.setDescription(args.stuff)
            poke.setImage(body.url)
            poke.setColor(0x23ff12)
            poke.setFooter(`Powered by Nekos.Life`)
        msg.channel.send(poke)
        })
        .catch(err => {
            msg.channel.send("The gif-API is currently down, plese try again later \nOr try to help us get to 200 Servers so we can upgrade our API!")
        })
    }   
};
