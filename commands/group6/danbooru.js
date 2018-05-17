const { Command } = require('discord.js-commando');
const moment = require('moment');
const Discord = require('discord.js');
const { RichEmbed } = require('discord.js');
var Danbooru = require('danbooru')
const authedBooru = new Danbooru({ login: 'kurihararei1@gmail.com', api_key: '8hRPkoWBjNwX3s-hNq7RSmpfxzmAgG9lmyeiD-Vrfjw' });

module.exports = class DanbooruCommand extends Command {
    constructor(client) {
      super(client, {
            name: 'danbooru',
            aliases: [],
            group: 'group6',
            memberName: 'danbooru',
            description: 'Search Danbooru for Images',
            argsType: 'multiple',
			      argsCount: 6
        });
    }
    
    async run(msg,args,danbooru){
      booru.posts({ tags: 'rating:safe order:rank' }).then(posts => {
      const index = Math.floor(Math.random() * posts.length)
      const post = posts[index]
      const url = booru.url(post.file_url)
      const name = `${post.md5}.${post.file_ext}`
      const embed = new RichEmbed()
      embed.setTitle('Test')
      embed.setImage()
      return msg.embed(embed);
    });
  }
}