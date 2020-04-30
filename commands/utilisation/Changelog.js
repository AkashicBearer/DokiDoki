const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class ChangelogCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'changelog',
            aliases: [`cl`],
            group: 'util',
            memberName: 'changelog',
            description: 'Sends the latest changelog',
        });
    }
    
	async run(message) { 

        const ChangelogEmbed = new MessageEmbed()
            .setTitle(`Version 0.1.0 Changelog`)
            .setDescription(`Full out recode`)
            .setThumbnail(this.client.user.avatarURL)
            .setColor("GREEN")
            .setFooter(`Change Log of April 1 2020`)
        message.channel.send(ChangelogEmbed);

    }
};
