const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class BugReportCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'bug',
            aliases: ['bugreport', 'report', 'br'],
            group: 'util',
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
    
    async run(message, args) {

        const chann = this.client.guilds.cache.find(guild => guild.id === '389111570162122752').channels.cache.find(channels => channels.id === '391683807754977311')
        
        const BugEmbed = new MessageEmbed()
            .setAuthor(message.author.tag, message.author.avatarURL)
            .setTitle('Bug Report')
            .setDescription(args.text)
            .setFooter(message.guild.name + "")
            .setTimestamp()
        chann.send(BugEmbed);

      message.channel.send(`Your bug report  was sent ${message.author.tag}!`);

    }
};
