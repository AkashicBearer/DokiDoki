const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class TestHelpCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'testhelp',
            aliases: ["commands"],
            group: 'group4',
            memberName: 'testhelp',
            description: 'Displays a list of available commands, or detailed information for a specified command.',
            args: [
                {
                    key: 'command',
                    prompt: 'Which command would you like to view the help for?',
                    type: 'string',
                    default: ''
                }
]
        });
    }
    async run(msg, args) {
        //const commands = this.client.registry.findCommands(args.command)
        const embed = new RichEmbed()
            .setTitle('DokiDoki Commands')
                    .setDescription('')
            .addField("")
                .addField("")
            .addField("")
            .addField("")
            .setColor(0x23ff12)
        return msg.embed(embed);
    }

};
