const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class nomCommand extends Command {
    constructor(client) {
      super(client, {
            name: 'nom',
            aliases: ['eat'],
            group: 'emo',
            memberName: 'nom',
            description: 'You eat', 
        });
    }

	async run(msg, args) {
        var imgnom = {
            "0": "https://media1.tenor.com/images/26beab5ca39fba753a2de57b1d74e519/tenor.gif?itemid=5215437",
            "1": "https://media.giphy.com/media/Y5PHkDeg2Yydi/giphy.gif",
            "2": "https://media.giphy.com/media/PtYJgFVyn6qIM/giphy.gif",
            "3": "https://media1.tenor.com/images/a54d651964d6925292105a38c52e577f/tenor.gif?itemid=3530807",
            "4": "https://i.imgur.com/Ryy3D7r.gif",
            "5": "https://m.popkey.co/87ea4b/dZGvw.gif",
            "6": "https://media.giphy.com/media/aWQGaKbpb46YM/giphy.gif",
            "7": "http://i0.kym-cdn.com/photos/images/original/001/262/670/2de.gif",
            "8": "https://orig00.deviantart.net/0010/f/2015/347/c/3/yuki_nagato_nom_nom_nom______gif_animation_by_kyoflameashhylden-d9k1did.gif",
            "9": "https://im-01.gifer.com/2Z8h.gif",
            "10": "https://media.giphy.com/media/u2Iq2GbjB0N2g/giphy.gif",
            "11": "https://i.imgur.com/s7Jcjxd.gif",
            "12": "https://im-01.gifer.com/BQii.gif",
            "13": "https://fat.gfycat.com/ThriftyComplicatedBillygoat.gif",
            "14": "https://78.media.tumblr.com/09bca9f5ba3d654a882759b453562c1a/tumblr_narxf9lirZ1tjs0two1_500.gif",
            "15": "https://yeinjee.com/wp-content/uploads/2014/07/non-non-biyori-1.gif",
            "16": "https://i.pinimg.com/originals/ec/0a/96/ec0a9655d0a45ba87a5f673276e9c67a.gif",
            "17": "https://i.imgur.com/XOlRryu.gif",
            "18": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp3FvlyDcBfhyrSgD-QmzaK-Foibe9bz-85QokLqGbnmxy_k9D",
            "19": "https://78.media.tumblr.com/f243c24381afe638f1948af71ff7a965/tumblr_omqt8pjliX1uxvvvzo1_500.gif",
            "20": "https://img.memecdn.com/nom-nom-nom-3_o_600538.gif",
            "21": "https://i.pinimg.com/originals/28/b0/40/28b040a10e9848678c56bbbbd069fded.gif"
        };
           const embed = new RichEmbed()
                embed.setDescription(msg.author + ' is nomming on something')  
                const randm = Math.random();
 
                    embed.setImage(imgnom[Math.floor(randm * Object.keys(imgnom).length).toString()])

                embed.setColor(0x23ff12)
            return msg.embed(embed);
        }
	};
