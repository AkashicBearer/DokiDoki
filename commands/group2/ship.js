const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class shipCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'ship',
            aliases: ['pair', 'couple'],
            group: 'group2',
            memberName: 'ship',
            description: "Mention two Members to ship them. \nMention one member to randoly ship them with another member. \nDon't mention anyone to randomly ship yourself.",
            examples: ['<ship @User1 @User2', '<ship @User', '<ship'],
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
        var compab = (Math.random()*100).toFixed(2);
        var compatibility = ""
        if(compab <= 50){
            compatibility = "They are not very compatible: **"+compab+"%**";
        }
        if(compab > 50 && compab <90){
            compatibility = "They are compatible: **"+compab+"%**";
        }
        if(compab >= 90){
            compatibility = "They are very compatible: **"+compab+"%**";
        }
        if(args.usr1 && args.usr2){
            const usrn1 = args.usr1.user.username;
            const usrn2 = args.usr2.user.username;
           
            shipname = usrn1.substring(0,usrn1.length/2)+""+usrn2.substring(usrn2.length/2,usrn2.length).toLowerCase()
            embed.setTitle("Shipping " + usrn1 + " and " + usrn2)
            embed.setDescription("Their Shipname is: **"+shipname+"**! \n"+compatibility)
        }

        if(args.usr1 && !args.usr2){
            var candidates = []; 
            var membArray = msg.guild.members.array();
            for (var user in membArray) 
                    candidates.push(membArray[user].user.username);
            const randMemb = candidates[Math.floor(Math.random()*candidates.length)]
            const usrn1 = args.usr1.user.username;
            const usrn2 = randMemb;
            shipname = usrn1.substring(0,usrn1.length/2)+""+usrn2.substring(usrn2.length/2,usrn2.length).toLowerCase()
            embed.setTitle("Shipping " + usrn1 + " and " + usrn2)
            embed.setDescription("Their Shipname is: **"+shipname+"**! \n"+compatibility)
        }

        if(!args.usr1 && !args.usr2){
            var candidates = []; 
            var membArray = msg.guild.members.array();
            for (var user in membArray) 
                    candidates.push(membArray[user].user.username);
            const randMemb = candidates[Math.floor(Math.random()*candidates.length)]
            const usrn1 = msg.author.username;
            const usrn2 = randMemb;
            shipname = usrn1.substring(0,usrn1.length/2)+""+usrn2.substring(usrn2.length/2,usrn2.length).toLowerCase()
            embed.setTitle("Shipping " + usrn1 + " and " + usrn2)
            embed.setDescription("Their Shipname is: **"+shipname+"**! \n"+compatibility)
        }
            embed.setThumbnail("https://vignette.wikia.nocookie.net/parody/images/b/b0/Anime_Heart.png/revision/latest?cb=20161125185957")
            embed.setColor(0x23ff12)
        return msg.embed(embed);
    }
};
