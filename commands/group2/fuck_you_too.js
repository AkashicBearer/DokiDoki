const { Command } = require('discord.js-commando')
const { RichEmbed } = require('discord.js');

module.exports = class FuckCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'fuckt',
            group: 'group2',
            memberName: 'fuckt',
            description: 'Send a Middle Finger..',
			args: [
				{
					key: 'member',
					label: 'user',
					prompt: 'FUck who?',
					type: 'member',
				}
			]
        });
    }

    async run(msg, args) {
		const member = args.member;
        const user = member.user;
        const embed = new RichEmbed()
            .setDescription(args.member.user)  
			.setImage("https://i.imgflip.com/1irsve.jpg")
			.setColor(0xa0f000)
        return msg.embed(embed);
    }
};