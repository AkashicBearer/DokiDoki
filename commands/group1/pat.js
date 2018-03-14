const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class PatCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'pat',
            group: 'group1',
            memberName: 'pat',
            description: 'Who do you want to pat?>,<',
          
			args: [
				{
					key: 'member',
					label: 'user',
					prompt: 'Who to pat?',
					type: 'member'
				}
			]
        });
    }
	async run(msg, args) {
		const member = args.member;
        const user = member.user;
        const embed = new RichEmbed()
            .setDescription('DokiDoki Pats ' + args.member.user)
			.setImage("https://media1.tenor.com/images/1e92c03121c0bd6688d17eef8d275ea7/tenor.gif?itemid=9920853")
			.setColor(0x23ff12)
        return msg.embed(embed);
    }
	
};
