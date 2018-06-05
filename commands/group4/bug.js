const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class BugCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'bug',
            aliases: ['bugreport', 'report', 'br'],
            group: 'group4',
            memberName: 'bug',
            description: 'Sends a bug report to the Bots Server',
            examples: ['<bug This Image link is not working', '<bug this command does not work'],
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
        embed.setAuthor(msg.author.tag, msg.author.avatarURL)
        embed.setTitle('Bug Report')
        embed.setDescription(args.text)
        embed.setFooter(msg.guild.name + "")
        embed.setTimestamp()
      const chann = this.client.guilds.get('389111570162122752').channels.find('name','bug-reports');
      chann.sendMessage(embed);
      msg.channel.send('Your Bug report was sent!');
    }
};