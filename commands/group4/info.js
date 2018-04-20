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
			.setTitle(this.client.user.username + 'Information:')
			.addField("My Discord Invite Link", "[Discord Invite Link](https://discordapp.com/api/oauth2/authorize?client_id=385115460397694977&permissions=8&scope=bot)")
         		.addField("My Github Documentation", "[GitHub](https://github.com/AkashicBearer/DokiDoki)")
			.addField("DokiDoki Support Server", "[Support Server Invite](https://discord.gg/4RNvxJR)")
			.addField("Additional Information","DokiDoki Runs on Discird.JS-Commando, Its Current Devs are Akashic Bearer#2305 and Kandrina#1426")
			.addField("About:" , "DokiDoki was Inspired by some random things that came along the way while I was learning how to manage my servers. DokiDoki was Originally known as DDLC, but it was hacked somewhere along the way and I had to restart from scratch, Now DokiDoki has another developper (kandrina) Who helps me with stuff (since I'm a 馬鹿...). ")
			.setDescription('My Website [Website](https://akashicbearer.github.io/DokiDoki/index.html)')
			.setColor(0x23ff12)
        return msg.embed(embed);
    }

};
