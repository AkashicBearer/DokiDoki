const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class BakaCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'baka',
            aliases: [],
            group: 'group1',
            memberName: 'baka',
            description: 'Mentions a User who is a Baka',
			args: [
				{
					key: 'member',
					label: 'user',
					prompt: 'Who is a Baka?',
					type: 'member',
                    default: ''
				}
			]
        });
    }
	async run(msg, args) {
        var imgbaka = {
            "0": "http://i0.kym-cdn.com/photos/images/newsfeed/001/028/204/4d9.gif",
            "1":"https://media.giphy.com/media/Gf3AUz3eBNbTW/giphy.gif",
            "2": "https://im-01.gifer.com/79UU.gif",
            "3": "https://media1.tenor.com/images/99ed452a33c03a91c37083df7eb2419f/tenor.gif?itemid=5586968",
            "4": "https://im-01.gifer.com/8TJ8.gif",
            "5": "http://i0.kym-cdn.com/photos/images/newsfeed/001/093/416/a84.gif",
            "6": "https://thumbs.gfycat.com/CapitalDarlingBlackcrappie-size_restricted.gif",
            "7": "http://data.whicdn.com/images/71874842/large.gif",
            "8": "https://im-01.gifer.com/FiiA.gif",
            "9": "http://i.imgur.com/Uv675gV.gif",
            "10": "https://orig00.deviantart.net/3ac0/f/2011/216/c/6/you__re_an_idiot__by_jeditears09-d45gqs2.gif",
            "11": "http://i1152.photobucket.com/albums/p483/Thomas_Daniell/Titled%20A/Alice%20and%20Zoroku/Alice%20and%20Zouroku%203b_zpsdl3ifcvt.gif",
            "12": "https://78.media.tumblr.com/7ade33279099cd6961639dae722b3e3a/tumblr_inline_o6j95hFvDB1rfvphd_500.gif",
            "13": "http://4.bp.blogspot.com/-5p_CGTcnEPY/VV1vF1HfM_I/AAAAAAAALOA/g4XsC-lYctc/s1600/ccc.gif",
            "14": "https://theedschronicles.files.wordpress.com/2017/01/zsjsbkgkoqbhy.gif",
            "15": "http://pa1.narvii.com/6438/e559cbd92bc98a84f3e0de1636e0a5676e8b703a_hq.gif",
            "16": "http://pa1.narvii.com/5811/aa04cddc78229d07cba9a1fb68d40730121e42b9_hq.gif",
            "17": "https://i1.wp.com/i0.kym-cdn.com/photos/images/original/000/813/103/5c4.gif?resize=596%2C339",
            "18": "https://media1.tenor.com/images/7a73c890a73adaf7a461bc555542869d/tenor.gif?itemid=5589406",
            "19": "https://78.media.tumblr.com/9637a4ec073d3865d14668015cef92c1/tumblr_oqfmzhAVA51shbny2o1_500.gif",
            "20": "http://gifimage.net/wp-content/uploads/2017/09/baka-gif-11.gif"
        };

        const embed = new RichEmbed();
         if(args.member){
            if(msg.author.id == args.member.id){
                embed.setDescription(msg.author + ' is a baka, because they are calling themselves baka')
             }else{
                embed.setDescription(msg.author + ' thinks ' + args.member.user + ' is a baka.')
             }
         }else{
            embed.setDescription('Someone has been a real baka.')
         }
         
         const randm = Math.random();
            embed.setImage(imgbaka[Math.floor(randm * Object.keys(imgbaka).length).toString()])

            embed.setColor(0x23ff12)
        return msg.embed(embed);
    }
	
};
