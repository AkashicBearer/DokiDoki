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
        const roll = Math.floor(Math.random() * args.xsides) + 1;
        const embed = new RichEmbed()
            .setAuthor(msg.author.username, msg.author.avatarURL)
            .setTitle("Rolling " + args.xsides + " sided dice.")
            .setDescription("You rolled a " + roll)
            .setThumbnail("https://gilkalai.files.wordpress.com/2017/09/dice.png?w=640")
            .setColor(0x212121)
        return msg.embed(embed);
    } 
};