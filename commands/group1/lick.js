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
            "0": "https://media.giphy.com/media/12MEJ2ArZc23cY/source.gif",
            "1": "http://gifimage.net/wp-content/uploads/2017/09/anime-lick-gif-4.gif",
            "2": "https://i.imgur.com/uALJJV2.gif",
            "3": "http://cdn.awwni.me/ml0q.gif",
            "4": "https://i.imgur.com/GcjeQ4v.gif",
            "5": "https://vignette.wikia.nocookie.net/the-kennel/images/7/7a/Tsundere_Lick_Gif.gif/revision/latest?cb=20130828004256",
            "6": "http://i0.kym-cdn.com/photos/images/newsfeed/000/984/223/3cf",
            "7": "http://images.pandaapp.com/android/2011/06/20/Kanamemo-7-1-licking.gif",
            "8": "https://media1.tenor.com/images/1925e468ff1ac9efc2100a3d092c54ff/tenor.gif?itemid=4718221",
            "9": "https://68.media.tumblr.com/b80cda919b3309f2cb974635e429db57/tumblr_osuazevFcj1qcsnnso1_500.gif",
            "10": "http://i.imgur.com/XchuI.gif",
            "11": "https://i.imgur.com/QDpVqHe.gif",
            "12": "https://vignette.wikia.nocookie.net/date-a-live/images/9/9a/Kurumi_licks_shido%27s_wound.gif/revision/latest?cb=20160722115544",
            "13": "http://i0.kym-cdn.com/photos/images/original/001/230/497/04d.gif",
            "14": "https://78.media.tumblr.com/5d6d5dcfb8b42e96f3721abf3187b526/tumblr_ndzz03jdmR1tkqg6no1_500.gif",
            "15": "http://img1.ak.crunchyroll.com/i/spire1/92b3653029e9196cfbedfd6a5ff3dc881488421004_full.gif",
            "16": "https://78.media.tumblr.com/52322bf4fc3ded8b0bf95a2d4b6cdac9/tumblr_nmk2q8j9WT1s21xzoo1_500.gif",
            "17": "https://files.gamebanana.com/img/ico/sprays/51dc8d0b3e6ee.gif",
            "18": "https://steamusercontent-a.akamaihd.net/ugc/266099621319806637/70FD65F58A6A393681118FF19EEB96B4F0BE25D7/",
            "19": "https://pa1.narvii.com/5848/f85c773326748c698f8c059f924eea7eed61254f_hq.gif"
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
