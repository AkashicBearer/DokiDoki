const { Command } = require('discord.js-commando');

module.exports = class BanCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'ban',
            aliases: ['ban', 'bean', 'banuser'],
            group: 'group5',
            memberName: 'ban',
            description: 'Bans a User',
            examples: ['{Prefix}Ban @User#0000'],
            guildOnly: true,
            clientPermissions: ['ADMINISTRATOR', "BAN_MEMBERS"],
            userPermissions: ['ADMINISTRATOR', "BAN_MEMBERS"],
            throttling: {
                usages: 2,
                duration: 10
            },
            args: [
                { 
                 key: 'member',
                 label: 'user',
                 prompt: 'Who to Ban?',
                 type: 'member'
                },
                {
                 key: "text",
                 prompt: "Why are you Banning this user?",
                 type: "string"
                 }
                  ]
});
}
const new Discord.Permissions(member, [ 
                                    'ADMINISTRATOR'.
                                    'BAN_MEMBERS'
                                    ]);

async run(msg, args, ){
 if member.hasPermission then guild.ban(args.member, {reason: args.text})  
 msg.channel.send(args.member.user + "Was Banned");
 else msg.channel.send(msg.author + ' You Dont Have the Required Permissions to Ban this Member')
  }
};
