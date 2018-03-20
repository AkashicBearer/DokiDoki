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
        const groups = this.client.registry.groups.findAll();
        const commands = this.client.registry.findCommands();
        const showAll = args.command && args.command.toLowerCase() === 'all';
        const grp1c = commands.findAll('groupID','group1')
        
        var grp1 = "";
        var grp2 = "";
        var grp3 = "";
        var grp4 = "";
        var grp5 = "";
        var grp6 = "";
        var grp7 = "";

        for(var i = 0; i < grp1c.length; i++){
            grp1=grp1+"`"+grp1c[i].name+"`";
            if(i+1 < grp1c.length){
                grp1=grp1+", ";
            }
        }
        const embed = new RichEmbed()
                .setTitle('DokiDoki Commands')
                .addField(groups.find('id','group1').name,grp1)
                //.addField(groups[0].name + "",grp1+"",true)
            .setColor(0x23ff12)
        return msg.embed(embed);
    }

};
