const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class TestHelpCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'testhelp',
            group: 'group4',
            memberName: 'testhelp',
            description: 'Shows commands of the Bot',
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
        const groups = this.client.registry.groups;
        const commands = this.client.registry.findCommands(args.command, false, msg);
        const showAll = args.command && args.command.toLowerCase() === 'all';
        const embed = new RichEmbed()
                .setTitle('DokiDoki Commands')
//            .addField("My Discord Invite Link", "[Discord Invite Link](https://discordapp.com/api/oauth2/authorize?client_id=385115460397694977&permissions=8&scope=bot)")
            .setColor(0x23ff12)
        return msg.embed(embed);
    }

};
