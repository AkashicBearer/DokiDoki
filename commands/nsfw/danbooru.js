/* const { Command } = require('discord.js-commando');
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
            examples: ['<danbooru neko safe', '<danbooru neko explicit', '<danbooru neko questionable'],
            throttling: {
                usages: 2,
                duration: 1
            },
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


async run(message, args, danbooru){
 soon tm
}
}
*/ 
