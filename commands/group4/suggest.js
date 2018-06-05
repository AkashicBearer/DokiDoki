const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class SuggestCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'suggest',
            aliases: ['sug', 'sc'],
            group: 'group4',
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
    async run(msg, args) {
        const embed = new RichEmbed()
        embed.setAuthor(msg.author.tag, msg.author.avatarURL)
        embed.setTitle('Suggestion')
        embed.setDescription(args.text)
        embed.setFooter(msg.guild.name + "")
        embed.setTimestamp()
      const chann = this.client.guilds.get('389111570162122752').channels.find('name','suggestions');
      chann.sendMessage(embed);
      msg.channel.send('Your Suggestion was sent!');
    }
};
