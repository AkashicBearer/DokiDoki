const { Command } = require('discord.js-commando')
const { RichEmbed } = require('discord.js');

module.exports = class CalcCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'calc',
            aliases: ['calculate'],
            group: 'group4',
            memberName: 'calc',
            description: 'Calculate Nnumbers',
            examples: ['Calculate 1+1'],
            guildOnly: true,
            args: [
                {
                    key: 'exp',
                    prompt: 'what to calculate',
                    type: 'string',
                    default: ''
                }
            ]
        });
    }
async run(msg, args){
        var math = require('mathjs');
        const embed = new RichEmbed()
            .setColor('RANDOM');
        if (!args.exp) {
            embed.setDescription('Please input an expression.');
            return msg.channel.send(embed);
        }
        let result;
        var expr = args.exp;
        try {
            result = math.eval(expr);
        } catch (e) {
            result = 'Error: "Invalid Input"';
        }
        embed.addField('Input', `\`\`\`js\n${expr}\`\`\``)
            .addField('Output', `\`\`\`js\n${result}\`\`\``);
        return msg.channel.send(embed);
        
    }
};