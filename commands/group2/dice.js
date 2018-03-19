const { Command } = require('discord.js-commando');

class DiceRollCommand extends  Command {
    constructor(client) {
        super(client, {
            name: 'dice',
            aliases: ['roll', 'rolldice', 'diceroll', 'rd'],
            group: 'group2',
            memberName: 'doce',
            description: 'Roles a Dice with given sides, default is 6.',
            throttling: {
                usages: 2,
                duration: 1
            },
			args: [
                {
                    key: 'sides',
                    label: 'dots',
                    prompt: 'How many sides should the dice have?',
                    type: 'integer',
                    default: 6
                }
            ]
        });
    }
async run(message, args) {
    var roll = Math.floor(Math.random() * args.sides) + 1;
        const embed = new RichEmbed()
            //.setTitle('Rolling a ' + args.sides + ' sided dice.')
            .setDescription('You rolled a ' + roll)
            //.setThumbnail("https://gilkalai.files.wordpress.com/2017/09/dice.png?w=640")
            .setColor(0x212121)
        return msg.embed(embed);
    } 

}

module.exports = DiceRollCommand;
