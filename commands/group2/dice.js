const { Command } = require('discord.js-commando');

class DiceRollCommand extends  Command {
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
			 args: [
                {
                    key: 'xsides',
                    label: 'sides',
                    prompt: 'How many sides does the dice have?',
                    type: 'integer',
                    default: '6'
                }
            ]
        });
    }

async run(msg, args) {
        const roll = Math.floor(Math.random() * args.xsides) + 1;
        const embed = new RichEmbed()
            .setDescription("You rolled a " + roll)
            .setColor(0x212121)
        return msg.embed(embed);
    } 

}

//module.exports = DiceRollCommand;
