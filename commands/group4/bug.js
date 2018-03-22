const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class BugCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'bug',
            group: 'group4',
            memberName: 'bug',
            description: 'Sends a bug report to the Bots Server',
          
            args: [
                {
                    key: 'text',
                    label: 'user',
                    prompt: 'Please describe the bug.?',
                    type: 'string'
                }
            ]
        });
    }
    async run(msg, args) {
        const embed = new RichEmbed()
        embed.setAuthor(msg.author, msg.author.avatarURL)
        embed.setTitle('Bug Report')
        embed.setDescription(args.text)
        embed.setFooter(msg.guild.name + "")
        embed.setTimestamp()
      const chann = this.client.guilds.find("name", "Doki Doki Server").channels.find('name','discordjs');
      chann.sendMessage(embed);
      msg.channel.send('Sent');
    }
};