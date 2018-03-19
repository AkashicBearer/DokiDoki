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
            "0": "https://media0.giphy.com/media/G3va31oEEnIkM/giphy.gif",
            "1": "https://media0.giphy.com/media/bGm9FuBCGg4SY/giphy.gif",
            "2": "https://media.giphy.com/media/ZRSGWtBJG4Tza/giphy.gif",
            "3": "https://em.wattpad.com/be664a8e8b471f49798ad367e7e809bea6dff987/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f5470763473634d653344323357413d3d2d3331373535353132392e3134373938323930393132363361666232353737353336373930322e676966?s=fit&w=720&h=720",
            "4": "https://media1.tenor.com/images/621ceac89636fc46ecaf81824f9fee0e/tenor.gif?itemid=4958649",
            "5": "https://i.imgur.com/eisk88U.gif",
            "6": "https://media.giphy.com/media/12VXIxKaIEarL2/giphy.gif",
            "7": "https://media.giphy.com/media/KmeIYo9IGBoGY/giphy.gif",
            "8": "https://media.giphy.com/media/Gj8bn4pgTocog/giphy.gif",
            "9": "https://thumbs.gfycat.com/DimwittedSomeArabianhorse-size_restricted.gif",
            "10": "https://78.media.tumblr.com/2bbeb57901f4a62bc8bc268d8122db9a/tumblr_p2d6setldS1r0zucyo1_540.gif",
            "11": "https://78.media.tumblr.com/3d93be7699a2ba8b4bc13a29a37b84ad/tumblr_odt2geMkpc1t86l7wo1_500.gif",
            "12": "https://vignette.wikia.nocookie.net/central/images/2/26/Kiss-anime.gif/revision/latest?cb=20140412150834",
            "13": "http://gif-finder.com/wp-content/uploads/2016/02/Death-Note-Gif-Misa-Amane-and-Light-Yagami-Kiss.gif",
            "14": "https://media.giphy.com/media/vUrwEOLtBUnJe/giphy.gif",
            "15": "http://www.lovethisgif.com/uploaded_images/41239-Anime-Cheek-Kiss-Gif-Karen-Kissing-Shino-lewd-.gif",
            "16": "https://78.media.tumblr.com/tumblr_m7x4176tyH1ro4cfco1_500.gif",
            "17": "http://i.myniceprofile.com/1401/140141.gif",
            "18": "http://i.imgur.com/OkHQh23.gif",
            "19": "https://pa1.narvii.com/6610/0e8a3ed399309f19726b042de3f90bfe6725bc19_hq.gif"
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
