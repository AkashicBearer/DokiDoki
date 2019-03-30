const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js')

module.exports = class ClearCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'clear',
            aliases: ['clean'],
            group: 'admin',
            memberName: 'purge',
            description: 'Deletes messages from a channel.',
            examples: ['{Prefix}purge <number> '],
            clientPermissions: ['MANAGE_MESSAGES'],
            args: [
                {
                 key: "number",
                 prompt: "How many messages to delete??",
                 type: "float",
                 default: '2'
                 }
                ]
            }
        );
    }
    
async run(message, args){
    if (message.author.bot) return;
    if(message.member.hasPermission("MANAGE_MESSAGES")){
        if(!args.number){
            const purging = new RichEmbed()
                .setDescription(`You forgot to specify a number so I\'ll only purge 2 message.`)
                .setColor("GREEN")
            message.channel.send(purging)
        } else {
            const purge = new RichEmbed()
                .setDescription(`Deleted the latest ${args.number} messages!`)
                .setColor("Green")
            message.channel.send({embed: purge}).then(embedMessage => { embedMessage.delete(10000) })
            message.channel.bulkDelete(args.number)
        }
    } else {
        const noperms = new RichEmbed()
            .setDescription(`Sorry but you dont have the permission to Manage Messages on this server!`)
            .setColor("RED")
        message.channel.send(noperms)
    }
  }
};
