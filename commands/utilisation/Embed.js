const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class EmbedCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'embed',
            group: 'util',
            memberName: 'embed',
            description: 'Embeds the text you provide.',
            guildOnly: true,
            args: [
                {
                    key: 'text',
                    prompt: 'What text would you like the bot to embed?',
                    type: 'string'
                }
            ]
        });    
    }

    run(message, args) {
        const { text } = args;
        message.delete();
        const embed = new MessageEmbed()
            .setDescription(text)
            .setAuthor(message.author.username, message.author.displayAvatarURL)
            .setColor(0x00AE86)
            .setTimestamp()
        message.channel.send(embed)
    }
};
