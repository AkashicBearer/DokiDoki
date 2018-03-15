const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');
//test
module.exports = class BakaCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'baka',
            group: 'group1',
            memberName: 'baka',
            description: 'Mentions a User who is a Baka >,<',
			args: [
				{
					key: 'member',
					label: 'user',
					prompt: 'Who is a Baka?',
					type: 'member'
				}
			]
        });
    }
	async run(msg, args) {
		const member = args.member;
        const user = member.user;
        const embed = new RichEmbed()
            .setDescription(args.member.user + " is a Being a Baka!")
			.setImage("https://media.giphy.com/media/Gf3AUz3eBNbTW/giphy.gif")
			.setColor(0x212121)
        return msg.embed(embed);
    }
	
};
