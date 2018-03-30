const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class laughCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'laugh',
            aliases: ['lol'],
            group: 'group1',
            memberName: 'laugh',
            description: 'Sends a laughing gif'
        });
    }
	async run(msg) {
        var imglol = {
            "0": "https://media1.tenor.com/images/fb80a2dd4fdb86c6eeee94125f23c161/tenor.gif?itemid=5060962",
            "1":"https://78.media.tumblr.com/c687bc614458f294922daf880c24248b/tumblr_om93wdfZTF1tydz8to1_500.gif",
            "2": "https://media1.tenor.com/images/67372d90e92e4ffe3b045eae86dccd6f/tenor.gif?itemid=4911539",
            "3": "https://media1.tenor.com/images/b3e0ecd965e324aa328a0137c38a44f1/tenor.gif?itemid=5566554",
            "4": "https://78.media.tumblr.com/5d970f04489f609fd8fd2d478830c536/tumblr_ol37svr5jY1uqmh0po1_500.gif",
            "5": "https://media.giphy.com/media/12scWlqkDOzDKo/giphy.gif",
            "6": "https://media.giphy.com/media/TORQpT78yQR5S/giphy.gif",
            "7": "http://gifimage.net/wp-content/uploads/2017/07/anime-laugh-gif-3.gif",
            "8": "http://rs199.pbsrc.com/albums/aa315/SeeNoReasonToSmile/1147641141_eslaughter.gif~c200",
            "9": "http://gifimage.net/wp-content/uploads/2017/07/anime-laugh-gif-24.gif",
            "10": "http://i.imgur.com/laUXWji.gif",
            "11": "https://media1.tenor.com/images/b6e68f18daa4c9f136f0926b0ab78f04/tenor.gif?itemid=6075636",
            "12": "https://animecafehost.files.wordpress.com/2015/08/sena-laugh.gif",
            "13": "https://uploads.disquscdn.com/images/5fed555c29ebe10e79c08d1a47d2e14c8eae7d9cee0e67ed56bba31d494c1c85.gif",
            "14": "https://pa1.narvii.com/6004/493db1f507ecc336cd55d38d349a3d6ee6cfd2fb_hq.gif",
            "15": "https://k60.kn3.net/9/D/7/7/8/C/090.gif",
            "16": "https://media1.tenor.com/images/0944ac9bc62026c81078217f68b77c19/tenor.gif?itemid=5292401",
            "17": "https://78.media.tumblr.com/3d41ca6bea8797b86d238f885f1037ea/tumblr_nbae30Vi9f1rs4yfmo1_500.gif",
            "18": "https://media1.tenor.com/images/4f2bced588e158ee176a4a86741445dc/tenor.gif?itemid=5092740",
            "19": "https://i.imgur.com/jEBOpik.jpg",
            };

        const embed = new RichEmbed()
          embed.setDescription(msg.author + 'is laughing')
          const randm = Math.random();

                embed.setImage(imglol[Math.floor(randm * Object.keys(imglol).length).toString()])

          embed.setColor(0x23ff12)
        return msg.embed(embed);
    }
	
};
