const { Command } = require('discord.js-commando');

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
    msg.channel.send(args.number + "Was cleared");
    }else{
        msg.channel.send("You need to be Admin to use this");
    }
  }
};
