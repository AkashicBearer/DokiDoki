const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class waveCommand extends Command {
    constructor(client) {
      super(client, {
            name: 'wave',
            group: 'group1',
            memberName: 'wave',
            description: 'You wave',
        
            args: [
                {
                    key: 'member',
                    label: 'user',
                    prompt: 'Who do you want to wave at?',
                    type: 'member',
                    default: ''
                }
            ]
        });
    }

	async run(msg, args) {
        var imgwave = {
            "0": "http://gifimage.net/wp-content/uploads/2017/09/anime-wave-gif-14.gif",
            "1": "https://media1.tenor.com/images/943a3f95936d66dc0c78fd445893431e/tenor.gif?itemid=9060940",
            "2": "http://gifimage.net/wp-content/uploads/2017/09/anime-wave-gif-11.gif",
            "3": "http://gifimage.net/wp-content/uploads/2017/09/anime-wave-gif-8.gif",
            "4": "https://im-01.gifer.com/fz.gif",
            "5": "https://m.popkey.co/c8e2ec/bXEW1.gif",
            "6": "https://78.media.tumblr.com/15df33af563301da61a47e2e7f009416/tumblr_obg1bkefkL1tydz8to1_500.gif",
            "7": "https://m.popkey.co/e6dff4/WgQWD.gif",
            "8": "https://78.media.tumblr.com/8ad5ef23cab77faf004601c3201fc127/tumblr_oalo4fRB5M1tydz8to1_500.gif",
            "9": "https://vignette.wikia.nocookie.net/animaljam/images/b/b9/Tumblr_inline_nrqbc0lrW31twd49j_500.gif/revision/latest?cb=20150830030059",
            "10": "https://data.whicdn.com/images/245075010/original.gif",
            "11": "https://media.giphy.com/media/9hEKnxxhpclbO/giphy.gif",
            "12": "http://i0.kym-cdn.com/photos/images/newsfeed/001/073/005/67f.gif",
            "13": "https://media1.tenor.com/images/3c2054130fb03de2d8549a98a3e2685a/tenor.gif?itemid=6195457",
            "14": "https://media1.giphy.com/media/yyVph7ANKftIs/giphy.gif",
            "15": "https://i.imgur.com/WoZZIPD.gif",
            "16": "http://i.imgur.com/aqyDYi7.gif",
            "17": "http://media.giphy.com/media/xpgpXaXaDgvJK/giphy.gif",
            "18": "https://media.tenor.com/images/250fc8aacb8c89b4b3b8a0384a3df4ea/tenor.gif",
            "19": "https://78.media.tumblr.com/17b0edaa7b7d5e8350f74390629195c3/tumblr_notq4gp0qw1us70pno1_500.gif"
        };
           const embed = new RichEmbed()
             if(msg.author.id == args.member.id || !args.member){
                embed.setDescription(msg.author + ' is waving!')
             }else{
                embed.setDescription(msg.author + ' is waving at ' + args.member + '!')  
             }
                embed.setImage(imgwave[Math.floor(Math.random() * Object.keys(imgwave).length).toString()])
                embed.setColor(0x23ff12)
            return msg.embed(embed);
        }
	};
