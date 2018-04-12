const { Command } = require('discord.js-commando')

module.exports = class ReplyCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'reply',
            group: 'group3',
            memberName: 'reply',
            description: 'Replies with a Message.'
        });
    }
    async run(msg) {
        this.client.on('message', msg => {
          if (msg.content === 'ping') {
            msg.reply('Pong!');
            return true;
          }
        });
    }
};