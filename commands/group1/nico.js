const { Command } = require('discord.js-commando')
const { RichEmbed } = require('discord.js');

module.exports = class NicoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'nico',
            group: 'group1',
            memberName: 'nico',
            description: 'Sends a Nico Nico Nii!'
        });
    }
	async run(msg, args) {
        const embed = new RichEmbed()
            .setDescription('Nico Nico Nii!')
			.setImage("https://i.imgur.com/lqSm7gk.gif")
			.setColor(0x212121)
        return msg.embed(embed);
    } 
};