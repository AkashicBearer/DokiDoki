const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class TestHelpCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'testhelp',
            group: 'group4',
            memberName: 'testhelp',
        description: 'Shows commands of the Bot'
        });
    }
    async run(msg, args) {
        const embed = new RichEmbed()
//            .setTitle('DokiDoki Information')
                    .setTitle('DokiDoki Commands')
//            .addField("My Discord Invite Link", "[Discord Invite Link](https://discordapp.com/api/oauth2/authorize?client_id=385115460397694977&permissions=8&scope=bot)")
            .setColor(0x23ff12)
        return msg.embed(embed);
    }

};
