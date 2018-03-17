const { Commando } = require('discord.js-commando');

module.exports = class BanCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'ban',
            aliases: ['Ban', 'bean', 'banuser'],
            group: 'group5',
            memberName: 'ban',
            description: 'Bans a User',
            examples: ['{Prefix}Ban @User#0000'],
            guildOnly: true,
            clientPermissions: ['ADMINISTRATOR', "BAN_MEMBERS"],
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

async run(msg, args, ){
if(user.hasPermissions(['ADMINISTRATOR', 'BAN_MEMBERS'] [explicit = true]))
    guild.ban(args.member, {reason: args.text})  
    then(console.log, + msg.channel.send(args.member.user + "Was Banned"));
if(user..missing(['BAN_MEMBERS'] [checkAdmin = true]))
    msg.channel.send(msg.author + ' You Dont Have the Required Permissions to Ban this Member')
  }
};
