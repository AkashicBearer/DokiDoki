const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class SayCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'dm',
            aliases: [],
            group: 'fun',
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
    
    hasPermission(msg) {
        return this.client.isOwner(msg.author);
    }
  
     run(msg,args,  { user, content }) {
        const embed = new RichEmbed()
            embed.setDescription(args.content)  
            embed.setAuthor(msg.author.username, msg.author.avatarURL)
            embed.setFooter(msg.guild.name + " | " + msg.channel.name)
            embed.setColor(0x23ff12)
            if(msg.attachments.first()){
                embed.setImage(msg.attachments.first().url)
            }

        args.user.send(embed)
        msg.channel.send('Your DM was Sent to' + args.user + ' !')
        msg.delete()
     }
};
