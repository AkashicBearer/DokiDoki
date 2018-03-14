const { Command } = require('discord.js-commando')
const { RichEmbed } = require('discord.js');

module.exports = class FuckCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'fuck',
            group: 'group2',
            memberName: 'fuck',
            description: 'Send a Middle Finger...',
			args: [
				{
					key: 'member',
					label: 'user',
					prompt: 'Fuck who?',
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
			.setImage("https://i.imgur.com/vYSYi11.jpg")
			.setColor(0x212121)
        return msg.embed(embed);
    }
};



