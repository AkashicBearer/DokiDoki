const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class SuggestCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'suggest',
            aliases: ['sug', 'sc'],
            group: 'utilisation',
            memberName: 'suggest',
            description: 'Sends a Suggestion to the Bots Server',
            examples: ['<suggest A Currency System', '<suggest More Images for commands'],
            args: [
                {
                    key: 'text',
                    label: 'user',
                    prompt: 'What do you want to suggest?',
                    type: 'string'
                }
            ]
        });
    }
    async run(message, args) {
        const SuggestEmbed = new RichEmbed()
            .setAuthor(message.author.tag +  `( ${message.author.id} )`, message.author.avatarURL)
            .setTitle('Suggestion')
            .setDescription(args.text)
            .setFooter(message.guild.name + "")
            .setTimestamp()
      const chann = this.client.guilds.get('389111570162122752').channels.find('name','suggestions');
      chann.send(SuggestEmbed);
      message.channel.send('Your Suggestion was sent!');
    }
};
