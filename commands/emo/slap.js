const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');
const neko = require("nekos.life");
const superagent = require("superagent");
const send = require("quick.hook");

module.exports = class SlapCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'slap',
            aliases: [],
            group: 'emo',
            memberName: 'slap',
            description: 'slap at a user.',
            args: [
                {
                    key: 'member',
                    prompt: 'Who to slap?',
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
        superagent.get('https://nekos.life/api/v2/img/slap')
        .then(body => {
            body = body.body
        const slap = new RichEmbed()
            if(msg.author.id == args.member.id || !args.member.id){
                slap.setAuthor(`${msg.author.username} is slapging themselves?!`)
            }else {
                slap.setAuthor(`${msg.author.username} is slaping ${args.member.user.username}!`)
            }
                    
            slap.setDescription(args.stuff)
            slap.setImage(body.url)
            slap.setColor(0x23ff12)
            slap.setFooter(`Powered by Nekos.Life`)
        msg.channel.send(slap)
        })
        .catch(err => {
            msg.channel.send("The gif-API is currently down, plese try again later \n")
        })
    }   
};
