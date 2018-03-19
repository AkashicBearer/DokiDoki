const { Command } = require('discord.js-commando')
const { RichEmbed } = require('discord.js');

module.exports = class TestDiceRollCommand extends  Command {
    constructor(client) {
        super(client, {
            name: 'testdice',
            group: 'group2',
            memberName: 'testdice',
            description: 'Rolls a 6 Sided Dice.',
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
                    default: 6
                }
            ]
        });
    }
async run(message, args) {
//    var roll = Math.floor(Math.random() * args.xsides) + 1;
 //   message.reply("You rolled a " + roll);

     const embed = new RichEmbed()
            .setDescription('TestDice' + args.xsides)
            .setColor(0x212121)
        return msg.embed(embed);
}

}
