const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class InfoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'info',
	    aliases: ["about", "invite", "information"],
            group: 'group4',
            memberName: 'info',
        });
    }
    async run(msg, args) {
        const embed = new RichEmbed()
			.setTitle('DokiDoki Information')
            		.setDescription('My Information:')
			.setDescription("My Discord Invite Link")
			.setUrl("https://discordapp.com/api/oauth2/authorize?client_id=385115460397694977&permissions=8&scope=bot")
         		.addDescription("My Github Documentation")
	    		.setUrl("https://github.com/AkashicBearer/DokiDoki")
			.addDescription("DokiDoki Runs on Discird.JS-Commando")
			.setColor(0x23ff12)
        return msg.embed(embed);
    }

};
