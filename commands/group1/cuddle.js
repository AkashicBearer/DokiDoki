const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class cuddleCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'cuddle',
            group: 'group1',
            memberName: 'cuddle',
            description: 'Who do you want to cuddle?',
          
			args: [
				{
				key: 'member',
				label: 'user',
				prompt: 'Who to cuddle?',
				type: 'member'
				}
			]
        });
    }
	async run(msg, args) {
        var imgcuddle = {
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
            embed.setDescription(msg.author + ' cuddles.. themselves.. seems like someone needs some love. ')
            }else{
            embed.setDescription(msg.author + ' cuddles ' + args.member.user)
            }
            embed.setImage(imgcuddle[Math.floor(Math.random() * Object.keys(imgcuddle).length).toString()])
            embed.setColor(0x23ff12)
        return msg.embed(embed);
    }
	
};
