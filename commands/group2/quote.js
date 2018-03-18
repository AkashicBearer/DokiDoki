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
					key: 'id',
					label: 'user',
					prompt: 'What message do you want to quote? (ID)',
					type: 'message'
				}
			]
        });
    }
	async run(msg, args) {
        const msgid = msg.channel.fetchMessage(args.id).id;
        const embed = new RichEmbed()
            embed.setThumbnail(msgid.author.avatar)
            embed.setAuthor(msgid.author)
            embed.setDescription(msgid.content)
            embed.setColor(0x23ff12)
        return msg.embed(embed);
    }
};
