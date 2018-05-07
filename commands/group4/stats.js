const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class statsCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'stats',
	    aliases: ["info", "specs"],
            group: 'group4',
            memberName: 'stats',
	    description: 'Shows stats about the Bot'
        });
    }
    async run(msg) {
        const os = require('os');
        const arch = os.arch()
        const used = process.memoryUsage().heapUsed / 1024 / 1024;
    
        let totalSeconds = process.uptime();
        let realTotalSecs = Math.floor(totalSeconds % 60);
        let days = Math.floor((totalSeconds % 31536000) / 86400);
        let hours = Math.floor((totalSeconds / 3600) % 24);
        let mins = Math.floor((totalSeconds / 60) % 60);

        const embed = new RichEmbed()
        embed.setAuthor(this.client.user.username)
        embed.setThumbnail(this.client.user.avatarURL)
        embed.setDescription(`Status of ${this.client.user.username}`)
        embed.setColor('RANDOM')
        embed.addField(`Memory usage:`,`${Math.round(used * 100) / 100}MB` ,true)
        embed.addField(`Uptime:`,`${days}:${hours}:${mins}:${realTotalSecs}` ,true)
        embed.addField('Node and Library',` Node: ${process.version} discord.js` ,true)
        embed.addField(`Patform`,`${os.platform}`, true)
        embed.addField('Servers, Users',`On ${this.client.guilds.size} servers, with a total of ${this.client.users.size} users.`)
            code: 'AsciiDoc'
        return msg.embed(embed);
    }

};
