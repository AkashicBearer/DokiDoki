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
    const time = new Date();
    const embed = new RichEmbed()
        embed.setAuthor(this.client.user.username + ' Pong!')
        embed.addField(`The Client Ping is `, `${Math.round(this.client.ping)}ms`)
        embed.addField(`The message round-trip took `, time - msg.createdAt+'ms')
        embed.setThumbnail('https://emojipedia-us.s3.amazonaws.com/thumbs/160/emoji-one/44/table-tennis-paddle-and-ball_1f3d3.png')
        embed.setColor(0x23ff12)
        embed.setTimestamp()
     return msg.embed(embed);
    }
};
