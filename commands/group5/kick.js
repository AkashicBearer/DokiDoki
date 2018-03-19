const { Command } = require('discord.js-commando');

module.exports = class kickCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'kick',
            aliases: ['kickuser'],
            group: 'group5',
            memberName: 'kick',
            description: 'Kicks a User',
            examples: ['{Prefix}Kick @User#0000'],
            guildOnly: true,
            clientPermissions: ["KICK_MEMBERS", 'ADMINISTRATOR'],
            throttling: {
                usages: 2,
                duration: 10
            },
            args: [
                { 
                 key: 'member',
                 label: 'user',
                 prompt: 'Who to kick?',
                 type: 'member'
                },
                {
                 key: "text",
                 prompt: "Why are you kicking this user?",
                 type: "string",
                 default: ''
                 }
                  ]
});
}
    
async run(msg, args, ){
    if(msg.member.hasPermission('KICK_MEMBERS')){   
    args.member.kick(args.text);
    msg.channel.send(args.member.user + "Was kicked");
    }else{
        msg.channel.send("You need to be Admin or Mod to use this");
    }
  }
};
