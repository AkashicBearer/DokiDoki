const { Command } = require('discord.js-commando')
const { RichEmbed } = require('discord.js');

module.exports = class DiceRollCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'dice',
            aliases: ['roll', 'rolldice', 'diceroll', 'rd'],
            group: 'fun',
            memberName: 'dice',
            description: 'Rolls a Dice with provided sides.',
            examples: ['<rd', '<rd 124'],
            throttling: {
                usages: 2,
                duration: 1
            },
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
            .setTitle("Rolling a " + args.xsides + " sided dice.")
            .setDescription("You rolled a " + roll)
            .setThumbnail("https://gilkalai.files.wordpress.com/2017/09/dice.png?w=640")
            .setColor(0x212121)
        return msg.embed(embed);
    } 
};