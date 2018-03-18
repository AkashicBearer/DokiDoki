const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class QuoteCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'quote',
            group: 'group1',
            memberName: 'quote',
            description: 'What message do you want to quote?',
          
			args: [
				{
					key: 'idx',
					label: 'message',
					prompt: 'What message do you want to quote? (ID)',
					type: 'message'
				}
			]
        });
    }
	async run(msg, args) {
       // const msgid = msg.channel.fetchMessage(args.idx)
       const embed = new RichEmbed()
            .setAuthor(args.idx.author.username, args.idx.author.avatarURL)
            .setDescription(args.idx.content)
            .setColor(0x23ff12)
            .setTimestamp(args.idx)
        return msg.embed(embed);
  /*      msg.channel.send({embed: {
            description: args.idx.content,
            author: {
              name: idx.author.username,
              icon_url: idx.author.avatarURL
            },
            color: 0x23ff12,
            timestamp: idx
        }})*/
    }
};
