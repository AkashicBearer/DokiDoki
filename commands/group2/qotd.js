const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class qotdCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'qotd',
            aliases: [],
            group: 'group2',
            memberName: 'qotd',
            description: "Sends a quote in a fancy manner. \nUse `-a` to define the Author and where it's from.",
            examples: ['<qotd This is my Quote -a Discord'],
			args: [
				{
					key: 'quote',
					label: 'quote',
					prompt: 'What is your quote?',
					type: 'string'
				}
			]
        });
    }
	async run(msg, args) {

        var infos = args.quote;

        const embed = new RichEmbed()

        if(infos.indexOf('-a ')){
            if(infos.indexOf('-',infos.indexOf('-a ')+3) > 0){
                embed.setFooter(infos.substring(infos.indexOf('-a ')+3, infos.indexOf('-',infos.indexOf('-a')+2)))  
            }else{
                embed.setFooter(infos.substring(infos.indexOf('-a ')+3, infos.length))  
            }
        }

        if(infos.indexOf('-') < 0){
            embed.setDescription(infos)
        }else{
            embed.setDescription(infos.substring(0,infos.indexOf('-')))
        }

        embed.setThumbnail("https://img00.deviantart.net/a56c/i/2013/170/3/e/cute_speech_bubble_render_by_klleiachan-d69rv96.png")      
        embed.setTitle("Quote of the day")
        msg.channel.send(embed);
    }
}

