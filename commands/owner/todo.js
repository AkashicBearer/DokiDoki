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

        hasPermission(message) {
        return this.client.isOwner(message.author);
    }


    async run(message, args) {
        const chann = this.client.guilds.get('389111570162122752').channels.find('name','todo');
        const embed = new RichEmbed()
            .setAuthor(message.author.tag, message.author.avatarURL)
            .setTitle('ToDo')
            .setDescription(args.text)
            .setFooter(message.guild.name + "")
            .setTimestamp()
      chann.send(embed);
      message.channel.send('Added to ToDo list!!');
    }
};
