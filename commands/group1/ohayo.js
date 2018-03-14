const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class ohayoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'ohayo',
            group: 'group1',
            memberName: 'ohayo',
            description: 'Ohayo Gozaimasu'
        });
    }

	async run(msg, args) {
        const embed = new RichEmbed()
            .setDescription(' Ohayo Gozaimasu Master >,<')
			.setImage('https://data.whicdn.com/images/49009068/large.png')
            .setColor(0x9013FE)
        return msg.embed(embed);
    }
};