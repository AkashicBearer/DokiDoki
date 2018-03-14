const { Command } = require('discord.js-commando')
const { RichEmbed } = require('discord.js');

module.exports = class ReplyCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'nya',
            group: 'group1',
            memberName: 'nya',
            description: 'Replies with a Message.'
        });
    }

	async run(msg, args) {
        const embed = new RichEmbed()
            .setDescription('Have a Neko')
			.setImage("https://media.giphy.com/media/M5yyzCim2A6li/giphy.gif")
			.setColor(0x212121)
        return msg.embed(embed);
    }
};