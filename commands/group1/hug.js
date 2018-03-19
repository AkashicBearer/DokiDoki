const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class hugCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'hug',
            group: 'group1',
            memberName: 'hug',
            description: 'Who do you want to hug?',
          
			args: [
				{
				key: 'member',
				label: 'user',
				prompt: 'Who to hug?',
				type: 'member'
				}
			]
        });
    }
	async run(msg, args) {
        var imghug = {
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
            embed.setDescription(msg.author + ' hugs.. themselves.. seems like someone needs some love. ')
            }else{
            embed.setDescription(msg.author + ' hugs ' + args.member.user)
            }
            embed.setImage(imghug[Math.floor(Math.random() * Object.keys(imghug).length).toString()])
            embed.setColor(0x23ff12)
        return msg.embed(embed);
    }
	
};
