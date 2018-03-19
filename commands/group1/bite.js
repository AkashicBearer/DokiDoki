const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class biteCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'bite',
            group: 'group1',
            memberName: 'bite',
            description: 'Who do you want to bite?',
          
			args: [
				{
				key: 'member',
				label: 'user',
				prompt: 'Who to bite?',
				type: 'member'
				}
			]
        });
    }
	async run(msg, args) {
        var imgbite = {
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
            embed.setDescription(msg.author + ' bites.. themselves.. seems like someone needs some love. ')
            }else{
            embed.setDescription(msg.author + ' bites ' + args.member.user)
            }
            embed.setImage(imgbite[Math.floor(Math.random() * Object.keys(imgbite).length).toString()])
            embed.setColor(0x23ff12)
        return msg.embed(embed);
    }
	
};
