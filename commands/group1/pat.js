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
        var imgpat = {
            "0": "https://thumbs.gfycat.com/BlankGiftedBurro-max-1mb.gif",
            "1":"https://media1.tenor.com/images/1e92c03121c0bd6688d17eef8d275ea7/tenor.gif?itemid=9920853",
            "2": "https://media.tenor.com/images/f79a9ec48bde0e592e55447b17ecfbad/tenor.gif"
        };
        const embed = new RichEmbed()
            .setDescription('DokiDoki Pats ' + args.member.user)
            .setImage(imgpat[Math.floor(Math.random() * Object.keys(imgpat).length).toString()])
            .setColor(0x23ff12)
        return msg.embed(embed);
    }
};
