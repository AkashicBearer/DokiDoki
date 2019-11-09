const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class OwnerHelpCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'ohelp',
            aliases: ['owh', 'owhelp'],
            group: 'owner',
            memberName: 'ohelp',
            description: 'Shows owner only commands of the Bot',
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

    hasPermission(message) {
        return this.client.isOwner(message.author);
    }

    async run(message, args) {
        const groups = this.client.registry.groups;
        const commands = this.client.registry.findCommands();

        const oxp = commands.findAll('groupID','ownerxp');
        var oxp1 = "";
        if(oxp.length > 0){
            for(var i = 0; i < oxp.length; i++){
                oxp1=oxp1+"`"+oxp[i].name+"`";
                if(i+1 < oxp.length){
                    oxp1=oxp1+", ";
                }
            }
        }

        const own = commands.findAll('groupID','owner');
        var own2 = "";
        if(own.length > 0){
            for(var i = 0; i < own.length; i++){
                own2=own2+"`"+own[i].name+"`";
                if(i+1 < own.length){
                    own2=own2+", ";
                }
            }
        }

        const embed = new RichEmbed()
                if(commands.find('name',args.command)){
                    const cmd = this.client.registry.findCommands().find(command => command.name, args.command);
                    embed.setTitle("Help for " + cmd.name)
                    embed.addField("Description", cmd.description+" ")
                    var aliass = "";
                    var examp = "";
                    if(cmd.aliases.length > 0){
                        for(var i = 0; i < cmd.aliases.length;i++){
                            aliass=aliass+"`"+cmd.aliases[i]+"`";
                            if(i+1 < cmd.aliases.length){
                                aliass=aliass+", ";
                            }
                        }
                    embed.addField("Aliases",aliass+" ")
                    }

                    if(cmd.examples != null){
                        for(var i = 0; i < cmd.examples.length;i++){
                            examp=examp+"`"+cmd.examples[i]+"`";
                            if(i+1 < cmd.examples.length){
                                examp=examp+", ";
                            }
                        }
                        embed.addField("Examples",examp+" ")
                    }
                
                }else{
                    embed.setTitle('DokiDoki Owner Commands')
                    embed.setThumbnail(this.client.user.avatarURL)
                    embed.setFooter("Owner Only Commands v1")

                    if(oxp.length > 0){
                        embed.addField(groups.find(group => group.id === 'ownerxp').name+"",oxp1+" ")
                    }
                        embed.addBlankField()
                    if(own.length > 0){
                        embed.addField(groups.find(group => group.id === 'owner').name+"",own2+" ")
                    }
                }
                
            embed.setColor("RED")
        return message.embed(embed);
    }
}