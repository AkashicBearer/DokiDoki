const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class kissCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'kiss',
            group: 'group1',
            memberName: 'kiss',
            description: 'Who do you want to kiss?',
          
			args: [
				{
				key: 'member',
				label: 'user',
				prompt: 'Who to kiss?',
				type: 'member'
				}
			]
        });
    }
	async run(msg, args) {
        var imgkiss = {
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
         if(msg.author.id == args.member.id){
            embed.setDescription(msg.author + ' kisses.. themselves.. why? ')
            }else{
            embed.setDescription(msg.author + ' kisses ' + args.member.user)
            }
            embed.setImage(imgkiss[Math.floor(Math.random() * Object.keys(imgkiss).length).toString()])
            embed.setColor(0x23ff12)
        return msg.embed(embed);
    }
	
};
