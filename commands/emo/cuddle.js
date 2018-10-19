const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');
const neko = require("nekos.life");
const superagent = require("superagent");
const send = require("quick.hook");

module.exports = class CuddleCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'cuddle',
            aliases: [],
            group: 'emo',
            memberName: 'cuddle',
            description: 'Cuddle a user!',
            args: [
                {
                    key: 'member',
                    prompt: 'Who to cuddle?',
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
        superagent.get('https://nekos.life/api/v2/img/cuddle')
        .then(body => {
            body = body.body
        const cuddle = new RichEmbed()
            if(msg.author.id == args.member.id){
                cuddle.setAuthor(`${msg.author.username} is cuddling themselves?!`)
            }else {
                cuddle.setAuthor(`${msg.author.username} is cuddling ${args.member.user.username}!`)
            }
                    
            cuddle.setDescription(args.stuff)
            cuddle.setImage(body.url)
            cuddle.setColor(0x23ff12)
            cuddle.setFooter(`Powered by Nekos.Life`)
        msg.channel.send(cuddle)
        })
        .catch(err => {
            msg.channel.send("The gif-API is currently down, plese try again later \nOr try to help us get to 200 Servers so we can upgrade our API!")
        })
    }   
};
