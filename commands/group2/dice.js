const { Command } = require('discord.js-commando');

module.exports = class DiceRollCommand extends  Command {
    constructor(client) {
        super(client, {
            name: 'dice',
            aliases: ['roll', 'rolldice', 'diceroll', 'rd'],
            group: 'group2',
            memberName: 'doce',
            description: 'Roles a 6 Sided Dice.',
            throttling: {
                usages: 2,
                duration: 1
            },
			
        });
    }
async run(message, args) {
    var roll = Math.floor(Math.random() * 6) + 1;
    message.reply("You rolled a " + roll);
}

}
