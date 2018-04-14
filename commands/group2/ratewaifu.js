const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class shipCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'ratewaifu',
            aliases: ['rw'],
            group: 'group2',
            memberName: 'ratewaifu',
            description: "",
            examples: ['<ratewaifu @user'],
			args: [
				{
					key: 'user',
					label: 'user1',
					prompt: 'Who do you want to Ship?',
					type: 'member',
          default:''
				}
			]
        });
    }
// SoonTM 
async run(msg, args) {
msg.channel.send('SoonTM')
}
};
