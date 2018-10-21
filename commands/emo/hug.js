const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');
const neko = require("nekos.life");
const superagent = require("superagent");
const send = require("quick.hook");

module.exports = class HugCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'hug',
            aliases: [],
            group: 'emo',
            memberName: 'hug',
            description: 'Hug a user!',
            args: [
                {
                    key: 'member',
                    prompt: 'Who to hug?',
                    type: 'member',
                },
                {
                    key: 'stuff',
                    prompt: 'What would u like to say?',
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
        superagent.get('https://nekos.life/api/v2/img/hug')
        .then(body => {
            body = body.body
        const hug = new RichEmbed()
            if(msg.author.id == args.member.id){
                hug.setAuthor(`${msg.author.username} is hugging themselves?!`)
            }else {
                hug.setAuthor(`${msg.author.username} is hugging ${args.member.user.username}!`)
            }
                    
            hug.setDescription(args.stuff)
            hug.setImage(body.url)
            hug.setColor(0x23ff12)
            hug.setFooter(`Powered by Nekos.Life`)
        msg.channel.send(hug)
        })
        .catch(err => {
            msg.channel.send("The gif-API is currently down, plese try again later \nOr try to help us get to 200 Servers so we can upgrade our API!")
        })
    }   
};
