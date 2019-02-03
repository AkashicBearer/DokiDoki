const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');
const neko = require("nekos.life");
const superagent = require("superagent");
const send = require("quick.hook");

module.exports = class FeedCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'feed',
            aliases: [],
            group: 'emo',
            memberName: 'feed',
            description: 'Feed a user.',
            args: [
                {
                    key: 'member',
                    prompt: 'Who to feed?',
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
        superagent.get('https://nekos.life/api/v2/img/feed')
        .then(body => {
            body = body.body
        const feed = new RichEmbed()
            if(msg.author.id == args.member.id || !args.member.id){
                feed.setAuthor(`${msg.author.username} is feading themselves?!`)
            }else {
                feed.setAuthor(`${msg.author.username} is feeding  ${args.member.user.username}!`)
            }
                    
            feed.setDescription(args.stuff)
            feed.setImage(body.url)
            feed.setColor(0x23ff12)
            feed.setFooter(`Powered by Nekos.Life`)
        msg.channel.send(feed)
        })
        .catch(err => {
            msg.channel.send("The gif-API is currently down, plese try again later \n")
        })
    }   
};
