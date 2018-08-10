const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class lickCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'lick',
            aliases: [],
            group: 'emo',
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
            "5": "https://i.imgur.com/DrNAjWk.gif",
            "6": "https://media.giphy.com/media/x4P8TaYhGn4FW/giphy.gif",
            "7": "http://images.pandaapp.com/android/2011/06/20/Kanamemo-7-1-licking.gif",
            "8": "https://media1.tenor.com/images/1925e468ff1ac9efc2100a3d092c54ff/tenor.gif?itemid=4718221",
            "9": "https://68.media.tumblr.com/b80cda919b3309f2cb974635e429db57/tumblr_osuazevFcj1qcsnnso1_500.gif",
            "10": "http://i.imgur.com/XchuI.gif",
            "11": "https://i.imgur.com/QDpVqHe.gif",
            "12": "https://im-01.gifer.com/4r7J.gif",
            "13": "http://i0.kym-cdn.com/photos/images/original/001/230/497/04d.gif",
            "14": "https://78.media.tumblr.com/5d6d5dcfb8b42e96f3721abf3187b526/tumblr_ndzz03jdmR1tkqg6no1_500.gif",
            "15": "http://img1.ak.crunchyroll.com/i/spire1/92b3653029e9196cfbedfd6a5ff3dc881488421004_full.gif",
            "16": "https://78.media.tumblr.com/52322bf4fc3ded8b0bf95a2d4b6cdac9/tumblr_nmk2q8j9WT1s21xzoo1_500.gif",
            "17": "https://files.gamebanana.com/img/ico/sprays/51dc8d0b3e6ee.gif",
            "18": "https://i.pinimg.com/originals/b3/76/47/b37647141288a8f67f56d2a4a0b33062.gif",
            "19": "https://pa1.narvii.com/5848/f85c773326748c698f8c059f924eea7eed61254f_hq.gif"
        };

        
        const embed = new RichEmbed()
         if(msg.author.id == args.member.id){
            embed.setDescription(msg.author + ' licks.. themselves.. do you taste that good? ')
            }else{
            embed.setDescription(msg.author + ' licks ' + args.member.user)
            }
            const randm = Math.random();

                embed.setImage(imglick[Math.floor(randm * Object.keys(imglick).length).toString()])

            embed.setColor(0x23ff12)
        return msg.embed(embed);
    }
	
};
