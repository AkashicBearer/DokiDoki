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
        if(args.idx.embeds.length == 0){
            return msg.embed(args.idx.embeds);
        }else{
            const embed = new RichEmbed()
                embed.setAuthor(args.idx.author.username, args.idx.author.avatarURL)
                embed.setDescription(args.idx.content)
                if(args.idx.attachments.first()){
                    embed.setImage(args.idx.attachments.first().proxyURL)
                }
                
                embed.setColor(0x23ff12)
                embed.setFooter(stamp + "")
            return msg.embed(embed);
        }
    }
};
