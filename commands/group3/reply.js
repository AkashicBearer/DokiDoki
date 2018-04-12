const { Command } = require('discord.js-commando')

module.exports = class ReplyCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'reply',
            group: 'group3',
            memberName: 'reply',
            description: 'Replies with a Message.',
            args: [
                {
                    key: 'name',
                    label: 'user',
                    prompt: 'Which anime would you like to see?',
                    type: 'string'
                }, {
                    key: 'name2',
                    label: 'user',
                    prompt: 'Which anime would you like to see?',
                    type: 'string'
                }
            ]
        });
    }
    async run(msg) {
        msg.channel.send(args.name)
        if(args.name == 'y'){
            msg.channel.send(args.name2)
        }
        
    }
};