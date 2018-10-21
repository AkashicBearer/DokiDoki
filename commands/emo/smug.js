const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');
const neko = require("nekos.life");
const superagent = require("superagent");
const send = require("quick.hook");

module.exports = class SmugCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'smug',
            aliases: [],
            group: 'emo',
            memberName: 'smug',
            description: 'Smug at a user.',
            args: [
                {
                    key: 'member',
                    prompt: 'Who to Smug at?',
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
        superagent.get('https://nekos.life/api/v2/img/smug')
        .then(body => {
            body = body.body
        const smug = new RichEmbed()
            if(msg.author.id == args.member.id || !args.member.id){
                smug.setAuthor(`${msg.author.username} is Smugging`)
            }else {
                smug.setAuthor(`${msg.author.username} is Smugging at ${args.member.user.username}!`)
            }
                    
            smug.setDescription(args.stuff)
            smug.setImage(body.url)
            smug.setColor(0x23ff12)
            smug.setFooter(`Powered by Nekos.Life`)
        msg.channel.send(smug)
        })
        .catch(err => {
            msg.channel.send("The gif-API is currently down, plese try again later \nOr try to help us get to 200 Servers so we can upgrade our API!")
        })
    }   
};
