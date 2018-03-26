const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class timeCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'time',
            aliases: [],
            group: 'group2',
            memberName: 'time',
            description: 'What message do you want to time?'
        });
    }
	async run(msg, args) {
        const embed = new RichEmbed()
            .setAuthor(msg.author.username, msg.author.avatarURL)
            .setDescription(msg.createdAt+"")
            .setColor(0x23ff12)
        return msg.embed(embed);
    }
};
