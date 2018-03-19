const { Command } = require('discord.js-commando')
const { RichEmbed } = require('discord.js');

module.exports = class TestDiceCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'testdice',
            group: 'group2',
            memberName: 'testdice',
            description: 'Rolls a Dice'
            args: [
                {
                    key: 'xsides',
                    label: 'sides',
                    prompt: 'How many sides does the dice have?',
                    type: 'float',
                    default: 6
                }
            ]
        });
    }
    async run(msg, args) {
        const embed = new RichEmbed()
            .setDescription('Test')
            .setColor(0x212121)
        return msg.embed(embed);
    } 
};