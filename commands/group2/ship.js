const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class shipCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'ship',
            aliases: [],
            group: 'group2',
            memberName: 'ship',
            description: 'Who do you want to ship?',
          
			args: [
				{
					key: 'usr1',
					label: 'user1',
					prompt: 'Who do you want to Ship?',
					type: 'member',
                    default:''
				},
                {
                    key: 'usr2',
                    label: 'user2',
                    prompt: 'Who do you want to Ship?',
                    type: 'member',
                    default:''
                }
			]
        });
    }
	async run(msg, args) {
        const embed = new RichEmbed()
        var shipname = "";
        if(args.usr1 && args.usr2){
            const usrn1 = args.usr1.user.username;
            const usrn2 = args.usr2.user.username;
           
            shipname = usrn1.substring(0,usrn1.length/2)+""+usrn2.substring(usrn2.length/2,usrn2.length).toLowerCase()
            embed.setTitle("Shipping " + usrn1 + " and " + usrn2)
            embed.setDescription("Their Shipname is: **"+shipname+"**!")
        }

        if(args.usr1 && !args.usr2){
            embed.setTitle()
            embed.setDescription()
        }

        if(!args.usr1 && args.usr2){
            embed.setTitle()
            embed.setDescription()
        }

        if(!args.usr1 && !args.usr2){
            var candidates = []; 
            var membArray = msg.guild.members.array();
            for (var user in membArray) 
                    candidates.push(membArray[user].user.username);
            const randMemb = candidates[Math.floor(Math.random()*candidates.length)]

            embed.setTitle("Shipping " + msg.author.username + " and " + randMemb)
            embed.setDescription()
        }
            embed.setThumbnail("https://vignette.wikia.nocookie.net/parody/images/b/b0/Anime_Heart.png/revision/latest?cb=20161125185957")
            embed.setColor(0x23ff12)
        return msg.embed(embed);
    }
};
