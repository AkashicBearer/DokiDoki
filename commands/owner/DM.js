const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class SayCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'dm',
            aliases: [],
            group: 'owner',
            memberName: 'dm',
            description: 'Sends a message to the user you mention.',
            examples: ['dm @User Hi there!'],
            args: [
                {
                    key: 'user',
                    prompt: 'Which user do you want to send the DM to?',
                    type: 'user'
                },
                {
                    key: 'content',
                    prompt: 'What would you like the content of the message to be?',
                    type: 'string'
                }
            ]
        });    
    }
    
    hasPermission(message) {
        return this.client.isOwner(message.author);
    }
  
     run(message,args,  { user, content }) {
        const embed = new MessageEmbed()
            embed.setDescription(args.content)  
            embed.setAuthor(message.author.username, message.author.avatarURL)
            embed.setColor(0x23ff12)
        args.user.send(embed)

        message.channel.send('Your DM was Sent to' + args.user + ' !')
        
        message.delete()
     }
};
