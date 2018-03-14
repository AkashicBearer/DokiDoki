const { Command } = require('discord.js-commando');

class DiceRollCommand extends  Command {
    constructor(client) {
        super(client, {
            name: 'dice2',
            aliases: ['roll2', 'rolldice2', 'diceroll2', 'rd2'],
            group: 'group2',
            memberName: 'dice2',
            description: 'Roles a custom Sided Dice.',
            throttling: {
                usages: 2,
                duration: 1
            },
			args: [
				{
					key: 'number',
					label: 'Sides',
					prompt: 'How many sides??',
					type: 'float',
					}
			]
			
        });
    }
async run(message, args) {
    var roll = Math.floor(Math.random() * args.number) + 1;
    message.reply("You rolled a " + roll);
}

}

module.exports = DiceRollCommand;