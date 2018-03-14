const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class PatCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'slap',
            group: 'group1',
            memberName: 'slap',
            description: 'Who do you want to slap?>,<',
          
			args: [
				{
					key: 'member',
					label: 'user',
					prompt: 'Who to slap?',
					type: 'member'
				}
			]
        });
    }
	async run(msg, args) {
		const member = args.member;
        const user = member.user;
        const embed = new RichEmbed()
            .setDescription('DokiDoki Slaps ' + args.member.user)
			.setImage("http://i0.kym-cdn.com/photos/images/newsfeed/001/093/848/033.25067")
			.setColor(0x23ff12)
        return msg.embed(embed);
    }
	
};
