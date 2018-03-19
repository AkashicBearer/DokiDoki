const { Command } = require('discord.js-commando')
const { RichEmbed } = require('discord.js');

module.exports = class TestdiceCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'testdice',
            group: 'group1',
            memberName: 'testdice',
            description: 'Sends a Nico Nico Nii!',
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
            .setDescription(args.xsides)
            .setImage("https://i.imgur.com/lqSm7gk.gif")
            .setColor(0x212121)
        return msg.embed(embed);
    } 
};