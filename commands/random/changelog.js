const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class ChangelogCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'changelog',
            aliases: [`cl`],
            group: 'random',
            memberName: 'changelog',
            description: 'Sends the latest changelog',
        });
    }
	async run(message) { 
        const ChangelogEmbed = new RichEmbed()
            .setTitle(`Version 0.5.0 Changelog`)
            .setDescription(`Too many things to note so Ill only say the most important.\nDoki was recoded meaning that now its more efficient in handling stuff.\nChange log:\n- Guilds Settings have finally arrived!\n- Database integration slowly comming\n- more bot owner commands\n- new administration commands\n and much more!`)
            .setThumbnail(this.client.user.avatarURL)
            .setColor("GREEN")
            .setFooter(`Change Log of Match 30 2019`)
        message.channel.send(ChangelogEmbed);
        }
};
