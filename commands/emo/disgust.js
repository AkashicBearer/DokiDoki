const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class disgustCommand extends Command {
    constructor(client) {
      super(client, {
            name: 'disgust',
            aliases: [],
            group: 'emo',
            memberName: 'disgust',
            description: 'Sends a disgust',
             args: [
                {
                    key: 'member',
                    label: 'user',
                    prompt: 'Who do you want to beg?',
                    type: 'member',
                    default: ''
                }
            ]
        });
    }

	async run(msg, args) {
        var imgdisgust = {
            "0":"https://78.media.tumblr.com/08f6cf89768d698c73d50d9174f922d0/tumblr_inline_n3hxreyKaJ1s85pmj.gif",
            "1":"https://78.media.tumblr.com/15efde8ca82fe6451cd828e87eed0cc4/tumblr_nt5lna7u8w1rwoscmo1_540.gif",
            "2":"https://78.media.tumblr.com/e36a7fe44e3711d4d3b214cd68d8b90a/tumblr_niawogIszT1u55xnmo1_400.gif",
            "3":"https://img.fireden.net/a/image/1492/95/1492957273463.gif",
            "4":"http://i0.kym-cdn.com/photos/images/newsfeed/000/752/306/79c.gif",
            "5":"https://pa1.narvii.com/6403/d7ed7f9135f83ec579b1871203267b290486f124_hq.gif",
            "6":"http://img1.ak.crunchyroll.com/i/spire3/7c4d0b7d16208180c244ebd0c0d519381515174411_full.gif",
            "7":"http://gifimage.net/wp-content/uploads/2017/10/disgusted-anime-gif.gif",
            "8":"http://i0.kym-cdn.com/photos/images/newsfeed/001/004/339/e3d.gif",
            "9":"https://pa1.narvii.com/5826/e082ed59f56da5022d11f3997447bbae51b72e98_hq.gif",
            "10":"https://vignette.wikia.nocookie.net/le-miiverse-resource/images/e/e2/Tmp_tumblr_inline_nfh1nizQPp1spo0ig-1759827573.gif/revision/latest?cb=20160326032433",
            "11":"https://media.tenor.com/images/398a6f13455143eb6be870459651cb9e/tenor.gif",
            "12":"https://img.gifmagazine.net/gifmagazine/images/70401/original.gif",
            "13":"https://78.media.tumblr.com/23d8a20b505c9394612c62179b7f4186/tumblr_nvokvqiQEX1uyl0l9o1_250.gif",
            "14":"https://imgur.com/k8qSnOL",
            "15":"http://www.unboundworlds.com/wp-content/uploads/2014/07/small-children.gif",
            "16":"https://78.media.tumblr.com/a4f75231083042f791f2c8cdac6dbdde/tumblr_o58o80ikSG1u2cqewo1_500.gif",
            "17":"https://i.imgur.com/rncCPBK.gif",
            "18":"https://78.media.tumblr.com/bd63657f75348147cce80704fef4f2e3/tumblr_oyedo5B6Os1wsajfio3_540.gif",
            "19":"https://78.media.tumblr.com/e3655a14de33c12b0d058e94f2927cbd/tumblr_o531psWIV21ufw8o4o1_500.gif",
        };
           const embed = new RichEmbed()
                if(msg.author.id == args.member.id || !args.member){
                    embed.setDescription(msg.author + ' is disgusted.')
                }else{
                    embed.setDescription(msg.author + ' is disgusted by ' + args.member + '.')
                } 
                const randm = Math.random();

                    embed.setImage(imgdisgust[Math.floor(randm * Object.keys(imgdisgust).length).toString()])

                embed.setColor(0x23ff12)
            return msg.embed(embed);
        }
	};
