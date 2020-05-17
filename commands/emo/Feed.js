const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const neko = require("nekos.life");
const fetch = require("node-fetch")

module.exports = class FeedCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'feed',
            group: 'emo',
            memberName: 'feed',
            description: 'Feed a user.',
            args: [
                {
                    key: 'member',
                    prompt: 'Who to feed?',
                    type: 'member',
                }
            ]
        });
    }
    async run(message, args, neko) {
        const IMGS = await fetch('https://nekos.life/api/v2/img/feed')
            .then(res => res.json()).catch(err => {
                message.channel.send("The gif-API is currently down, plese try again later \n")
            })
            
            const IMG = IMGS.url
            
        const feed = new MessageEmbed()
            if(message.author.id == args.member.id || !args.member.id){
                feed.setAuthor(`${message.author.username} is feading themselves?!`)
            }else {
                feed.setAuthor(`${message.author.username} is feeding  ${args.member.user.username}!`)
            }
                    
            feed.setImage(IMG)
            feed.setColor(0x23ff12)
            feed.setFooter(`Powered by Nekos.Life`)
        message.channel.send(feed)
    }   
};
