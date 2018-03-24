const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class QuoteCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'quote',
            aliases: [],
            group: 'group2',
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
        const stamp = args.idx.createdAt;
        const embed = new RichEmbed()
            .setAuthor(args.idx.author.username, args.idx.author.avatarURL)
            .setDescription(args.idx.content)
            .setImage(args.idx.attachments.first().proxyURL)
            .setColor(0x23ff12)
            .setFooter(stamp + "")
        return msg.embed(embed);
    }
};
