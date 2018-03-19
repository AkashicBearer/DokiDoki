const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class InfoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'testhelp',
            aliases: ["commands"],
            group: 'group4',
            memberName: 'testhelp',
            description: 'Displays a list of available commands, or detailed information for a specified command.',
            details: oneLine`
                The command may be part of a command name or a whole command name.
                If it isn't specified, all available commands will be listed.
            `,
            examples: ['help', 'help prefix'],
            guarded: true,

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
        const commands = this.client.registry.findCommands(args.command, false, msg)
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
