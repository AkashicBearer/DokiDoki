const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class SlapCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'slap',
            aliases: [],
            group: 'group1',
            memberName: 'slap',
            description: 'Who do you want to slap?',
          
			args: [
				{
				key: 'member',
				label: 'user',
				prompt: 'Who to slap?',
				type: 'member'
				}
			]
        });
    }
	async run(msg, args) {
        var imgslap = {
            "0": "https://media.giphy.com/media/jLeyZWgtwgr2U/giphy.gif",
            "1": "https://media1.tenor.com/images/1cf84bf514d2abd2810588caf7d9fd08/tenor.gif?itemid=7679403",
            "2": "https://media.giphy.com/media/Zau0yrl17uzdK/giphy.gif",
            "3": "https://im-01.gifer.com/VF8X.gif",
            "4": "http://gifimage.net/wp-content/uploads/2017/07/anime-slap-gif-14.gif",
            "5": "https://static.fjcdn.com/gifs/Mm_966fc2_1916375.gif",
            "6": "https://orig00.deviantart.net/2d34/f/2013/339/1/2/golden_time_flower_slap_gif_by_paranoxias-d6wv007.gif",
            "7": "http://i0.kym-cdn.com/photos/images/original/001/225/332/e83.gif",
            "8": "http://gifimage.net/wp-content/uploads/2017/07/anime-slap-gif-15.gif",
            "9": "http://gifimage.net/wp-content/uploads/2017/07/anime-slap-gif-9.gif",
            "10": "http://img.mrdrsr.net/slap.gif",
            "11": "https://78.media.tumblr.com/db2c23d95ea558373d5ac51a7b8b4193/tumblr_nl801msjXa1saml9ao2_500.gif",
            "12": "https://im-01.gifer.com/7beD.gif",
            "13": "https://artemisunfiltered.files.wordpress.com/2014/05/golden-time-nana-slap.gif",
            "14": "https://78.media.tumblr.com/tumblr_m1nsxc3jUu1qdjfd8o1_400.gif",
            "15": "http://www.sharegif.com/wp-content/uploads/2013/09/20/slap-gif-1.gif",
            "16": "https://orig00.deviantart.net/45a9/f/2014/023/2/4/senza_titolo_1_by_lightning441-d73dgey.gif",
            "17": "https://m.popkey.co/80c11f/Ep51Y.gif",
            "18": "http://i.imgur.com/dkDScHT.gif",
            "19": "https://pa1.narvii.com/5716/2589c3050f75867c9277d33dc2e4742680c3399e_hq.gif",
            "20": "http://i0.kym-cdn.com/photos/images/original/001/264/655/379.gif"
        };

        
        const embed = new RichEmbed()
         if(msg.author.id == args.member.id){
            embed.setDescription(msg.author + ' slaps.. themselves.. are you alright? ')
            }else{
            embed.setDescription(msg.author + ' slaps ' + args.member.user)
            }
            embed.setImage(imgslap[Math.floor(Math.random() * Object.keys(imgslap).length).toString()])
            embed.setColor(0x23ff12)
        return msg.embed(embed);
    }
	
};
