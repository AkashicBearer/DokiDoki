const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');
const https = require('https');
const Danbooru = require('danbooru');


module.exports = class DanbooruCommand extends Command {
    constructor(client) {
      super(client, {
            name: 'danbooru',
            aliases: [],
            group: 'group6',
            memberName: 'danbooru',
            description: 'Search Danbooru for Images \nRatings can be: safe, questionable, or explicit',
            argsType: 'multiple',
            args:[
                {
                    key: 'item',
                    prompt: 'Which to search for?',
                    type: 'string'
                },
                {
                    key: 'rating',
                    prompt: 'Which tag to use?',
                    type: 'string'
                }
            ]
        });
    }


async run(msg, args, danbooru){
if (!msg.channel.nsfw) return msg.reply("You can only use this comand in a NSFW Channel");
    const booru = new Danbooru()
        booru.posts({ "post": { "rating": `${args.rating}`, "tag_string": `${args.item}` } }).then(posts => {
    const random = Math.floor(Math.random() * posts.length);
    const post = posts[random]
    const url = booru.url(post.file_url)
    const boorulink = `${post.file_url}`

    require('https').get(url, response => {
    const embed = new RichEmbed()
        embed.setTitle(`Search Resuflt for: ${args.item}`)
        embed.setImage(boorulink)
        embed.addField('Post Link: ' , boorulink)
        embed.addField('Author: ', post.tag_string_artist, true)
        embed.addField('Rating: ', args.rating, true)
        embed.setColor('RANDOM')
    return msg.channel.send(embed);
  })
})
}
}