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
			.setImage("https://vignette.wikia.nocookie.net/kancolle/images/4/40/Ryona_SLAP%21%21.gif/revision/latest?cb=20161129141305")
			.setColor(0x23ff12)
        return msg.embed(embed);
    }
	
};
