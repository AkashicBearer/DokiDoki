const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class danceCommand extends Command {
    constructor(client) {
      super(client, {
            name: 'dance',
            group: 'group1',
            memberName: 'dance',
            description: 'You dance', 
        });
    }

	async run(msg, args) {
	const member = args.member;
        const user = member.user;
        var imgdance = {
            "0": "",
            "1": "",
            "2": "",
            "3": "",
            "4": "",
            "5": "",
            "6": "",
            "7": "",
            "8": "",
            "9": "",
            "10": "",
            "11": "",
            "12": "",
            "13": "",
            "14": "",
            "15": "",
            "16": "",
            "17": "",
            "18": "",
            "19": ""
        };
           const embed = new RichEmbed()
                embed.setDescription(msg.author + ' is dancing')  
                embed.setImage(imgdance[Math.floor(Math.random() * Object.keys(imgdance).length).toString()])
                embed.setColor(0x23ff12)
            return msg.embed(embed);
        }
	};
