const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js')

module.exports = class PurgeCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'purge',
            aliases: ['clear', 'clean' ],
            group: 'group5',
            memberName: 'purge',
            description: 'purge messages',
            examples: ['{Prefix}purge <number> '],
            guildOnly: true,
            clientPermissions: ['ADMINISTRATOR', 'MANAGE_MESSAGES'],
            throttling: {
                usages: 2,
                duration: 10
            },
            args: [
                {
                 key: "number",
                 prompt: "How many Messages to Clear?",
                 type: "float",
                 default: ''
                 }
                  ]
});
}
    
async run(msg, args, ){
    if(msg.member.hasPermission('ADMINISTRATOR', 'MANAGE_MESSAGES')){
    msg.channel.bulkDelete(args.number)
         const embed = new RichEmbed()
            embed.setDescription(args.number + " messages were cleared")
            embed.setColor(0x23ff12)
        return msg.embed(embed);
    }else{
        const embed = new RichEmbed()
            embed.setDescription("You need to be Admin to use this")
            embed.setColor(0x23ff12)
        return msg.embed(embed);
    }
  }
};
