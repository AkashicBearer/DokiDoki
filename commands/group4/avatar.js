const { Command } = require('discord.js-commando')
const { RichEmbed } = require('discord.js');

module.exports = class avatarCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'avatar',
			group: 'group4',
			memberName: 'avatar',
			description: 'Shows a Users Avatar.',
			examples: ['avatar @...'],

			args: [
				{
					key: 'user',
					label: 'user',
					prompt: 'Whose avatar would you like to see?',
					type: 'member',
					default: ''
				}
			]
		});
	}

	async run(msg, args) {
		const embed = new RichEmbed()
             if(!args.user){
                embed.setImage(msg.author.avatarURL)
                embed.setAuthor(msg.author.tag)
             }else{
                embed.setImage(args.user.avatar)
                embed.setAuthor(args.user.tag)  
             }
                embed.setColor(0x23ff12)
            return msg.embed(embed);
       
}
};
