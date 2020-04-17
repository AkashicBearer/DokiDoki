const { Command } = require('discord.js-commando')
const { MessageEmbed } = require('discord.js');

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
    async run(message, args) {
        const roll = Math.floor(Math.random() * args.xsides) + 1;
        const embed = new MessageEmbed()
            .setAuthor(message.author.username, message.author.avatarURL)
            .setTitle("Rolling a " + args.xsides + " sided dice.")
            .setDescription("You rolled a " + roll)
            .setThumbnail("https://gilkalai.files.wordpress.com/2017/09/dice.png?w=640")
            .setColor(0x212121)
        message.channel.send(embed)
    } 
};