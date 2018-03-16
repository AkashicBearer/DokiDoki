const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class InfoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'info',
	    aliases: ["about", "invite", "information"],
            group: 'group4',
            memberName: 'info',
	    description: 'Shows Info about the Bot'
        });
    }
    async run(msg, args) {
        const embed = new RichEmbed()
			.setTitle('DokiDoki Information')
            		.setDescription('My Information:')
			.addField("My Discord Invite Link", "[Discord Invite Link](https://discordapp.com/api/oauth2/authorize?client_id=385115460397694977&permissions=8&scope=bot)")
         		.addField("My Github Documentation", "[GitHub](https://github.com/AkashicBearer/DokiDoki)")
			.addField("Additional Information","DokiDoki Runs on Discird.JS-Commando, Its Current Devs are Akashic Bearer#2305 and Kandrina#1426")
			.setColor(0x23ff12)
        return msg.embed(embed);
    }

};
