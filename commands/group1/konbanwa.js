const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class konbanwaCommand extends Command {
    constructor(client) {
      super(client, {
        name: 'konbanwa',
        aliases:['kon'],
        group: 'group1',
        memberName: 'konbanwa',
        description: 'Konbanwa!!',
            args: [
                {
                    key: 'member',
                    label: 'user',
                    prompt: 'Who do you want to say Konbanwa?',
                    type: 'member'
                }
            ]
        });
    }

	async run(msg, args) {
        var imgkon = {
            "0": "http://4.bp.blogspot.com/-Bk7l0ehbx-g/UjTHJHDKz7I/AAAAAAAADTY/9be5jIRhi5s/s1600/tumblr_mfxmbe0g4H1qk24ijo1_500.gif",
            "1": "http://pa1.narvii.com/6285/532de6cdf092c265d4c713e0246fc348a723fd01_hq.gif",
            "2": "https://www.zupimages.net/up/14/22/ofzt.gif",
            "3": "https://2.bp.blogspot.com/-7qXydPpzXYE/V5_P-CpefUI/AAAAAAAADSU/h9pzlyPlpR4CuaWmgYyVbEF8YPDEtW78wCLcB/s320/manga-girl-gif.gif",
            "4": "https://animecafehost.files.wordpress.com/2015/10/oreki-newspaper.gif",
            "5": "https://invasionotaku.files.wordpress.com/2016/12/ee9.gif?w=702",
            "6": "https://68.media.tumblr.com/dc53c0b36a60bb274815ed822fa0f71f/tumblr_nh6eb8y8Am1rkmjxwo1_500.gif",
            "7": "https://uploads.disquscdn.com/images/edfe4892651a38362e153c599fff22bd310ae50261efd82129859092834d8dca.gif",
            "8": "https://i.pinimg.com/originals/45/3b/78/453b7806cd1f8144001e34e51fc7a606.gif",
            "9": "http://yumestate.com/wp-content/uploads/2011/03/konbanwa.png",
            "10": "http://m0shi-m0shi.com/images/data/avatar_membre/7012_IMG_3589_grand.gif",
            "11": "http://pa1.narvii.com/6085/426168899cb3fdfced9c50fee193387416bfdf2a_hq.gif",
            "12": "https://2.bp.blogspot.com/-DBTBPpexDxk/Wj56PkUsdxI/AAAAAAAACU4/_rgn0qAHZFkX1v6QLJd6oXAcNJgOZYYEwCLcBGAs/s1600/re-creators-gif-voce-sabia-anime%2B%25287%2529.gif",
            "13": "http://images6.fanpop.com/image/photos/32500000/-Hyouka-Eru-Chitanda-hyouka-32580592-500-240.gif",
            "14": "https://data.whicdn.com/images/208992684/original.gif",
            "15": "http://pa1.narvii.com/6148/b2a8e81579bb58002a0993a7b3721176f55933af_hq.gif"
        };
            const embed = new RichEmbed()
                embed.setDescription(msg.author + 'Konbanwa' + args.member)        
                embed.setImage(imgkon[Math.floor(Math.random() * Object.keys(imgkon).length).toString()])
                embed.setColor(0x23ff12)
            return msg.embed(embed);
	};
