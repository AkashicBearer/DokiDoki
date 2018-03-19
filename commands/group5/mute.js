const { Command } = require('discord.js-commando');

module.exports = class muteCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'mute',
            aliases: ['muteuser'],
            group: 'group5',
            memberName: 'mute',
            description: 'mutes a User',
            examples: ['{Prefix}mute @User#0000'],
            guildOnly: true,
            clientPermissions: ['ADMINISTRATOR', "MUTE_MEMBERS"],
            throttling: {
                usages: 2,
                duration: 10
            },
            args: [
                { 
                 key: 'member',
                 label: 'user',
                 prompt: 'Who to mute?',
                 type: 'member'
                },
                {
                 key: "text",
                 prompt: "Why are you muting this user?",
                 type: "string",
                 default: ''
                 }
                  ]
});
}
    
async run(msg, args, ){
    if(msg.member.hasPermission('MUTE_MEMBERS')){   
    args.member.mute(args.text);
    msg.channel.send(args.member.user + "Was muted");
    }else{
        msg.channel.send("You need to be Admin or Mod to use this");
    }
  }
};
