const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class OwOGuideCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'owoguide',
            aliases: ['owog'],
            group: 'random',
            memberName: 'owoguide',
            description: 'Shows a small guide to get started with OwO Bot',
        });
    }
	async run(message, args, neko) { 
        const SupportEmbed = new RichEmbed()
            .setTitle("How to Get Started With OwO")
            .addField("Basics", "There are a few things you can do daily on OwO bot, some of them are:\n- **OwO daily**\n- **OwO quest**\n- **OwO vote**\n- Do **OwO** hunt and **OwO battle** to get crates")
            .addField("Tips", "- While you playing DRPG, you can also hunt and battle since the CD is almost identical.\n- Do **OwO zoo** to check your zoo & **OwO zoo display** to see all animals youve caught.\n- To get Cowency easily you can do **OwO sell all** (This sells your whole zoo)")
            .addField("Advanced", "Once you get good, you can start doing **OwO hb**. This lets you hunt animals automatically.")
            .addField("Inventory", "- **OwO inv** lets you see all items in your inventory.\n- **OwO wc** Opens one Weapon Create\n- **OwO lb** Opens one LootBox\n- **OwO weapon** lets you check your weapons\n- **OwO desc** Check the description of an item\n- **OwO use** use an item.")
            .setImage(" https://cdn.discordapp.com/attachments/420111691507040266/552609917048061952/image0.jpg")
            .setColor("GREEN")
            .setFooter("Credits to Zephyr#8429 (Content) & Akashic Bearer#2305 (The Code for embed)")
        message.channel.send(SupportEmbed)
	}
};