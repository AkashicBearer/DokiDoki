const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class confusedCommand extends Command {
    constructor(client) {
      super(client, {
            name: 'confused',
            group: 'group1',
            memberName: 'confused',
            description: 'You are confused', 
        });
    }

	async run(msg, args) {
	const member = args.member;
        const user = member.user;
        var imgconfused = {
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
                embed.setDescription(msg.author + ' is confused')  
                embed.setImage(imgconfused[Math.floor(Math.random() * Object.keys(imgconfused).length).toString()])
                embed.setColor(0x23ff12)
            return msg.embed(embed);
        }
	};
