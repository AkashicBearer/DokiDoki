const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');
const neko = require("nekos.life");
const superagent = require("superagent");
const send = require("quick.hook");

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
        superagent.get('https://nekos.life/api/v2/img/kiss')
        .then(body => {
            body = body.body
        const kiss = new RichEmbed()
            if(msg.author.id == args.member.id){
                kiss.setAuthor(`${msg.author.username} is kissing themselves?!`)
            }else {
                kiss.setAuthor(`${msg.author.username} is kissing ${args.member.user.username} <3`)
            }
                    
            kiss.setDescription(args.stuff)
            kiss.setImage(body.url)
            kiss.setColor(0x23ff12)
            kiss.setFooter(`Powered by Nekos.Life`)
        msg.channel.send(kiss)
        })
        .catch(err => {
            msg.channel.send("The gif-API is currently down, plese try again later \nOr try to help us get to 200 Servers so we can upgrade our API!")
        })
    }   
};
