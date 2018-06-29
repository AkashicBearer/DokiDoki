const { Command } = require('discord.js-commando')
const { RichEmbed } = require('discord.js');

module.exports = class SetAvatarCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'savatar',
			aliases: ['setavatar'],
			group: 'owner',
			memberName: 'bavatar',
			description: 'Sets the bots avatar.',
			examples: ['avatar [link]'],
			args: [
				{
					key: 'link',
					prompt: 'Image Link',
					type: 'string',
				}
			]
		});
	}
   	hasPermission(msg) {
        return this.client.isOwner(msg.author);
    }
async run(msg, args) {
	this.client.user.setAvatar(args.link)
	const embed = new RichEmbed()
		embed.setAuthor(this.client.user.username, this.client.user.avatarURL)  
		embed.setDescription('New Avatar set to: ')
    	embed.setImage(args.link)
   		embed.setColor('RANDOM')
	return msg.embed(embed);  
}
};
