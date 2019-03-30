const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');


module.exports = class guildlistCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'guildlist',
            aliases: ['gl'],
            group: 'owner',
            memberName: 'guildlist',
            description: 'guild names list',
            examples: ['<guilds']
        })    
    }

   	hasPermission(message) {
        return this.client.isOwner(message.author);
    }

async run(message){
    const gds = this.client.guilds.findAll('available',true);
    var gdsl = "";
    for(var i = 0; i < gds.length; i++){
		gdsl = gdsl + gds[i].name+", \n";
	};    

    const embed = new RichEmbed()
    	.setAuthor(this.client.user.username , this.client.user.avatarURL)
    	.setTitle('Guild List')
    	.setDescription(`${gdsl}`)
    	.addField(`Total Guild Count:`, `${this.client.guilds.size}`, true)
    	.setColor('RANDOM')
    	.setFooter('DokiDoki Server List!')
    message.channel.send(embed);
	}
}
