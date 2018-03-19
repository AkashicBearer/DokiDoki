const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class lickCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'lick',
            group: 'group1',
            memberName: 'lick',
            description: 'Who do you want to lick?',
          
			args: [
				{
				key: 'member',
				label: 'user',
				prompt: 'Who to lick?',
				type: 'member'
				}
			]
        });
    }
	async run(msg, args) {
        var imglick = {
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
            embed.setDescription(msg.author + ' licks.. themselves.. do you taste that good? ')
            }else{
            embed.setDescription(msg.author + ' licks ' + args.member.user)
            }
            embed.setImage(imglick[Math.floor(Math.random() * Object.keys(imglick).length).toString()])
            embed.setColor(0x23ff12)
        return msg.embed(embed);
    }
	
};
