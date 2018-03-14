const { Command } = require('discord.js-commando')
const { RichEmbed } = require('discord.js')

module.exports = class WastedCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'wasted',
            group: 'group1',
            memberName: 'wasted',
            description: 'You commit Suicide...',
			
			args: [
				{
					key: 'member',
					label: 'user',
					prompt: 'Who Commited Suicide?',
					type: 'member'
				}
			]
        });
    }
	
	hasPermission(msg) {
    if (!this.client.isOwner(msg.author)) return 'Only the bot owner(s) may use this command.';
    return true;}

	async run(msg, args) {
		const member = args.member;
        const user = member.user;
        const embed = new RichEmbed()
            .setDescription(args.member.user + ' Commited Suicide...')
            .setColor(0x9013FE)
			.setImage("https://img.fireden.net/vg/image/1507/50/1507508777036.gif")
        return msg.embed(embed);
    } 
};