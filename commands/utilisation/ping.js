const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class PingCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'ping',
            aliases: ['p'],
            group: 'utilisation',
            memberName: 'ping',
            description: 'See the bots Ping',
            examples: ['<ping']
        });
    }
async run(message, args) {
    if (message.author.bot) return;
    const time = new Date();
    const PingEmbed = new RichEmbed()
        .setAuthor(this.client.user.username + ' Pong!')
        .addField(`The Client Ping is `, `${Math.round(this.client.ping)}ms`, true)
        .addField(`The message round-trip took `, time - message.createdAt+'ms', true)
        .setThumbnail('https://emojipedia-us.s3.amazonaws.com/thumbs/160/emoji-one/44/table-tennis-paddle-and-ball_1f3d3.png')
        .setColor(0x23ff12)
        .setTimestamp()
    message.channel.send(PingEmbed);
    }
};
