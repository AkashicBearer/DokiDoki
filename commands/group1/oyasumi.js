const { Command } = require('discord.js-commando')
const { RichEmbed } = require('discord.js');

module.exports = class oyasumiCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'oyasumi',
            group: 'group1',
            memberName: 'oyasumi',
            description: 'Oyasumi Nasai'
        });
    }

     async run(msg, args) {
        const embed = new RichEmbed()
            .setDescription(' Oyasumi Nasai Master\~')
			.setImage('https://s1.zerochan.net/Toyosatomimi.no.Miko.600.1452679.jpg')
            .setColor(0x9013FE)
        return msg.embed(embed);
    }
};