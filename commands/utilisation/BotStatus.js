const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class BotStatsCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'status',
            aliases: ["info", "specs","invite", "information", "about"],
            group: 'util',
            memberName: 'stats',
            description: 'Shows the status of the Bot'
        });
    }

    async run(message) {
        const os = require('os');
        const arch = os.arch()
        const used = process.memoryUsage().heapUsed / 1024 / 1024;
    
        let totalSeconds = process.uptime();
        let realTotalSecs = Math.floor(totalSeconds % 60);
        let days = Math.floor((totalSeconds % 31536000) / 86400);
        let hours = Math.floor((totalSeconds / 3600) % 24);
        let mins = Math.floor((totalSeconds / 60) % 60);

        const StatusEmbed = new MessageEmbed()
            .setThumbnail(this.client.user.avatarURL)
            .setTitle(`Status of ${this.client.user.username}`)
            .setColor('BLACK')
            .addField(`Memory usage:`,`${Math.round(used * 100) / 100}MB` ,true)
            .addField(`Uptime:`,`${days} : ${hours} : ${mins} : ${realTotalSecs}` ,true)
            .addField('Node and Library',` Node: ${process.version} \nDiscord.js 12.012\nDiscord.js/Commando` ,true)
            .addField(`Platform`,`${os.platform}`, true)
            .addField('Servers, Users',`On ${this.client.guilds.cache.size} servers, with a total of ${this.client.users.cache.size} users.`)
            .addField("My Discord Invite Link", "[Discord Invite Link](https://discordapp.com/api/oauth2/authorize?client_id=385115460397694977&permissions=8&scope=bot)", true)
            .addField("DokiDoki Support Server", "[Support Server Invite](https://discord.gg/gjv2SZU)", true)
                code: 'AsciiDoc'
        message.channel.send(StatusEmbed);
    }
};
