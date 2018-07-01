const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class todoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'todo',
            aliases: ['td'],
            group: 'owner',
            memberName: 'todo',
            description: 'Sends a ToDo entry to the Bots Server',
            examples: ['<todo Make Doki best Bot'],
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

        hasPermission(msg) {
        return this.client.isOwner(msg.author);
    }


    async run(msg, args) {
        const embed = new RichEmbed()
        embed.setAuthor(msg.author.tag, msg.author.avatarURL)
        embed.setTitle('ToDo')
        embed.setDescription(args.text)
        embed.setFooter(msg.guild.name + "")
        embed.setTimestamp()
      const chann = this.client.guilds.get('389111570162122752').channels.find('name','todo');
      chann.send(embed);
      msg.channel.send('Added to ToDo list!!');
    }
};
