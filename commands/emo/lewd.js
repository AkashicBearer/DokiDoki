const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');
const neko = require("nekos.life");
const superagent = require("superagent");
const send = require("quick.hook");

module.exports = class LewdCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'lewd',
            aliases: [],
            group: 'emo',
            memberName: 'lewd',
            description: 'Mentions a User who is being lewd',
            args: [
                {
                    key: 'member',
                    prompt: 'Who is being lewd?',
                    type: 'member',
                    default: ''
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
        superagent.get('https://nekos.life/api/v2/img/lewd')
        .then(body => {
            body = body.body
        const lewd = new RichEmbed()
            if(msg.author.id == args.member.id){
                lewd.setAuthor(`${msg.author.username} thinks they are being too lewd!`)
            }else if(!args.member){
                lewd.setAuthor(`Someone is being too lewd!!!`)
            } else {
                lewd.setAuthor(`${msg.author.username} thinks ${args.member.user.username} is being too lewd!`)
            }
                    
            lewd.setDescription(args.stuff)
            lewd.setImage(body.url)
            lewd.setColor(0x23ff12)
            lewd.setFooter(`Powered by Nekos.Life`)
        msg.channel.send(lewd)
        })
        .catch(err => {
            msg.channel.send("The gif-API is currently down, plese try again later \nOr try to help us get to 200 Servers so we can upgrade our API!")
        })
    }   
};
