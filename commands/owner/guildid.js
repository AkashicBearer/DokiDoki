const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');


module.exports = class guildlistidCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'guildlistid',
            aliases: ['glid'],
            group: 'owner',
            memberName: 'guildlistid',
            description: 'guild ID List',
            examples: ['<guilds']
        })    
    }

   	hasPermission(msg) {
        return this.client.isOwner(msg.author);
    }

async run(msg){
    const gds = this.client.guilds.findAll('available',true);
    var gdsl = "";
    for(var i = 0; i < gds.length; i++){
		gdsl = gdsl + gds[i].name+", \n";
	};    

    const embed = new RichEmbed();
    	embed.setAuthor(this.client.user.username , this.client.user.avatarURL)
    	embed.setTitle('Guild List')
    	embed.setDescription(`${gdsl}`)
    	embed.addField(`Total Guild Count:`, `${this.client.guilds.size}`, true)
    	embed.setColor('RANDOM');
    	embed.setFooter('DokiDoki Server List!')
    return msg.channel.send(embed);
	}
}