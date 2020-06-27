const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class HelpCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'help',
            aliases: ['commands'],
            group: 'util',
            memberName: 'help',
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

        let emo = [];

        this.client.registry.commands.filter(c => c.groupID === "emo").array().forEach(command => {
            emo.push('`'+command.name+'`');
        });
        emo.join(", ");

        let fun = [];

        this.client.registry.commands.filter(c => c.groupID === "fun").array().forEach(command => {
            fun.push('`'+command.name+'`');
        });
        fun.join(", ");

        let util = [];

        this.client.registry.commands.filter(c => c.groupID === "util").array().forEach(command => {
            util.push('`'+command.name+'`');
        });
        util.join(", ");

        let admin = [];

        this.client.registry.commands.filter(c => c.groupID === "admin").array().forEach(command => {
            admin.push('`'+command.name+'`');
        });
        admin.join(", ");

        let nsfw = [];

        this.client.registry.commands.filter(c => c.groupID === "nsfw").array().forEach(command => {
            nsfw.push('`'+command.name+'`');
        });
        nsfw.join(", ");
        
        let xps = [];

        this.client.registry.commands.filter(c => c.groupID === "xp").array().forEach(command => {
            xps.push('`'+command.name+'`');
        });
        xps.join(", ");
        
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

            embed.setTitle('DokiDoki Commands')

            if(emo.length > 0){

                embed.addField("Emotion Commands", emo+` `)

            }
            if(fun.length > 0){

                embed.addField(`Fun Commands`, fun+" ")

            }
            if(util.length > 0){

                embed.addField(`Utilisation Commands`, util+" ")

            }
            if(admin.length > 0){

                embed.addField(`Administration Commands`, admin+" ")

            }
            if(nsfw.length > 0){

                embed.addField(`NSFW COmmands`, nsfw+" ")

            }
            if(xps.length > 0){

                embed.addField("Doki RPG", xps+" ")

            }
        }
        embed.setColor(0x23ff12)
    return msg.embed(embed);

    }
}
