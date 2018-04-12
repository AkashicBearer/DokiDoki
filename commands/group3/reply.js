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
        const message = await msg.say('Hi, I\'m awake!');
        return message.edit('I want to go to bed.');
    }
};