const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class PingCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'ping',
            aliases: ['p'],
            group: 'group4',
            memberName: 'ping',
            description: 'Ping the Server',
            examples: ['<ping']
        });
    }
    async run(msg, args) {
     const embed = new RichEmbed()
        embed.setTitle('Ping')
        embed.setDescription(`This Ping is ${this.client.ping})
        embed.setTimestamp()
     return msg.embed(embed);
    }
};
