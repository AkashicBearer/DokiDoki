const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

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

        let owner = [];

        this.client.registry.commands.filter(c => c.groupID === "owner").array().forEach(command => {
            owner.push('`'+command.name+'`');
        });
        owner.join(", ");


        const embed = new MessageEmbed()
        const nero = this.client.registry.commands

        if(nero.find(command => command.name === args.command)){

            const cmd = this.client.registry.commands.find(command => command.name === `${args.command}`)

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
                embed.setThumbnail(this.client.user.avatarURL())
                embed.setFooter("Owner Only Commands v1")

                if(owner.length > 0){
                    embed.addField("Owner Commands", owner+" ")
                }
            }
                
            embed.setColor("RED")
        return message.embed(embed);
    }
}
