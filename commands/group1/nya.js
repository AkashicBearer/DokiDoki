const { Command } = require('discord.js-commando')
const { RichEmbed } = require('discord.js');

module.exports = class NyaCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'nya',
            aliases: ['neko'],
            group: 'group1',
            memberName: 'nya',
            description: 'Replies with a Neko.'
        });
    }

	async run(msg, args) {
        var imgneko = {
            "0": "https://media.giphy.com/media/M5yyzCim2A6li/giphy.gif",
            "1": "http://gifimage.net/wp-content/uploads/2017/09/anime-neko-girl-gif-7.gif",
            "2": "https://media.giphy.com/media/svAVUj69hK5a0/giphy.gif",
            "3": "https://i.imgur.com/B9ogjI2.gif",
            "4": "https://i.imgur.com/B9ogjI2.gif",
            "5": "https://k60.kn3.net/7/D/3/4/8/B/F97.gif",
            "6": "https://media.giphy.com/media/j0SAkJD6RchKE/giphy.gif",
            "7": "http://gifimage.net/wp-content/uploads/2017/09/anime-neko-girl-gif-9.gif",
            "8": "https://pa1.narvii.com/6334/8168808489c888880183588d81ff7503325f7860_hq.gif",
            "9": "https://media1.giphy.com/media/YW3obh7zZ4Rj2/giphy.gif",
            "10": "http://img.jf258.com/uploads/2013-08-18/110940547.jpg",
            "11": "https://media.giphy.com/media/qWAvh9GmlryEg/giphy.gif",
            "12": "https://i.pinimg.com/originals/11/cb/be/11cbbe0dfd012ab37fad3ff427e2bb12.gif",
            "13": "http://i0.kym-cdn.com/photos/images/original/000/936/930/bc4.gif",
            "14": "https://pa1.narvii.com/6451/7296079b1c7b5555ba106e426bbec5ee4362b449_hq.gif",
            "15": "https://media.giphy.com/media/mMcDEfSDUfNBu/giphy.gif",
            "16": "https://pa1.narvii.com/5993/b02d6ce36d662b7fbd03d54493aebfb1031892d8_hq.gif",
            "17": "http://i0.kym-cdn.com/photos/images/newsfeed/000/989/155/a6e.gif",
	    	"18": "https://nokywln.files.wordpress.com/2012/06/hastur-11.gif",
	  		"19": "https://i.pinimg.com/originals/4e/d6/43/4ed6435b4073fa285f75b1545f44d7f2.gif",
	    	"20": "https://data.whicdn.com/images/250142989/original.gif",
			"21": "https://media1.tenor.com/images/c41b0d9eabb1ed05c017918463895cd8/tenor.gif?itemid=7797160",
			"22": "http://gifimage.net/wp-content/uploads/2017/09/anime-neko-girl-gif-1.gif",
			"23": "https://media.giphy.com/media/VcGAyTT62OIdq/giphy.gif",
			"24": "https://media.giphy.com/media/eenSsRGbw8C4g/giphy.gif",
			"25": "http://s.orzzzz.com/news/3c/27//57171c71a5b7e.gif",
			"26": "https://cdn155.picsart.com/227838839007202.gif?r1024x1024",
			"27": "https://pa1.narvii.com/5994/9fabce59cb1f806a633f5fd9f645a8b71a693288_hq.gif",
			"28": "https://i.imgur.com/15JtJds.gif",
			"29": "https://data.whicdn.com/images/161181867/original.gif",
			"30": "https://4.bp.blogspot.com/-rFvrImr_ogo/VsURaWB5oZI/AAAAAAAAX6U/2MueQEwuER8/s1600/Omake%2BGif%2BAnime%2B-%2BMusaigen%2Bno%2BPhantom%2BWorld%2B-%2BEpisode%2B7%2B-%2BReina%2BNeko.gif",
			"31": "https://pa1.narvii.com/5994/d7560490a997d0ed77c203ddecf364414bd9bd1d_hq.gif",
			"32": "http://cloud-3.steamusercontent.com/ugc/92730090856640968/E45972F81F4130FE7CC10CCECE43F24ACFE8E08E/",
			"33": "https://i.pinimg.com/originals/e5/e6/9a/e5e69aa252e032fe32324549a8e6fc77.gif",
			"34": "https://media.giphy.com/media/RvI3EuOdoqdOw/giphy.gif",
			"35": "https://i.skyrock.net/7142/87907142/pics/3172846751_1_36_3e7nhLOm.gif",
			"36": "https://giffiles.alphacoders.com/102/102151.gif",
			"37": "https://lh3.googleusercontent.com/-U-vdHE2kU4I/VcYirygDkWI/AAAAAAADrEs/0tkXBOMLzXk/w800-h800/Nico-Yazawa-Neko-GIF.gif",
			"38": "http://s.orzzzz.com/news/ba/20//57171db3dd61a.gif",
			"39": "https://i.pinimg.com/736x/0e/5a/13/0e5a138a81bc9251f52346779755e994--cute-fox-anime-neko.jpg",
			"40": "https://media.giphy.com/media/eTGF02IxyCQyA/giphy.gif",
			"41": "https://i.pinimg.com/originals/b6/82/25/b68225630a66d352224ed5c5628421e6.gif",
			"42": "https://images.gr-assets.com/hostedimages/1473324696ra/20446632.gif",
			"43": "https://i.gifer.com/8UdF.gif",
			"44": "https://pa1.narvii.com/5862/0fccba3c2305679312f2a5c17838bd01a2665269_hq.gif",
			"45": "https://i.pinimg.com/originals/c5/8d/9c/c58d9c3dbc9c4f16ceecd45f98ae095e.gif",
			"46": "https://media.giphy.com/media/iAn8h3tmCBJ0k/giphy.gif",
			"47": "https://pa1.narvii.com/6074/b614095ed29ec0142fd9b644db8593e816e66a46_hq.gif",
			"48": "https://data.whicdn.com/images/55011453/original.gif",
			"49": "https://i.pinimg.com/originals/e9/3c/03/e93c035c292812aeba9971d1e9da78fa.jpg",
			"50": "https://i.pinimg.com/originals/dd/bd/02/ddbd0218c1103d03828c4fc465c693bd.gif",
        };

        const embed = new RichEmbed()
            embed.setDescription("Have a Neko")
            const randm = Math.random();
                embed.setImage(imgneko[Math.floor(randm * Object.keys(imgneko).length).toString()])
            embed.setColor(0x23ff12)
        return msg.embed(embed);
    }

};
