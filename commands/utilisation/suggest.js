const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

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

        const chann = this.client.guilds.cache.find(guild => guild.id === '389111570162122752').channels.cache.find(chann => chann.id === "425032471113891840")

        const SuggestEmbed = new MessageEmbed()
            .setAuthor(message.author.tag +  `( ${message.author.id} )`, message.author.avatarURL)
            .setTitle('Suggestion')
            .setDescription(args.text)
            .setFooter(message.guild.name + "")
            .setTimestamp()
        chann.send(SuggestEmbed);

      message.channel.send(`Your Suggestion was sent ${message.author.tag}!`);

    }
};
