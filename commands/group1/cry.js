const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class CryCommand extends Command {
    constructor(client) {
      super(client, {
            name: 'cry',
            aliases: ['waa'],
            group: 'group1',
            memberName: 'cry',
            description: 'Cry'
        });
    }

	async run(msg, args) {
        var imgcry = {
            "0": "https://im-01.gifer.com/3ju8.gif",
            "1": "http://gifimage.net/wp-content/uploads/2017/07/anime-cry-gif-29.gif",
            "2": "https://animewithsky.files.wordpress.com/2015/06/03-i2ds0k7.gif?w=366&amp;h=205&amp;crop=1",
            "3": "http://gifimage.net/wp-content/uploads/2017/10/cry-anime-gif-9.gif",
            "4": "http://i.giphy.com/l3vR5e4dI4ci6LxMQ.gif",
            "5": "http://gifimage.net/wp-content/uploads/2017/07/anime-cry-gif-28.gif",
            "6": "https://myanimelist.cdn-dena.com/s/common/uploaded_files/1453262679-fd7868f00c8b7b4e1accd7dd574b7a19.gif",
            "7": "https://im-01.gifer.com/Drie.gif",
            "8": "https://78.media.tumblr.com/48bdc1aebf0531598b4cd51be7701a45/tumblr_o349ccKT9C1slmfozo1_540.gif",
            "9": "http://gif-finder.com/wp-content/uploads/2015/07/Anime-boy-crying.gif",
            "10": "https://thumbs.gfycat.com/ReadySpicyFrigatebird-max-1mb.gif",
            "11": "http://megumi.img.s3.amazonaws.com/tumblr_o5ljgu8pDF1t3uwllo1_500.gif",
            "12": "http://gifimage.net/wp-content/uploads/2017/07/anime-cry-gif-18.gif",
            "13": "https://media.giphy.com/media/ROF8OQvDmxytW/giphy.gif",
            "14": "https://tenor.com/view/anime-girl-crying-sad-black-gif-4952249",
            "15": "https://media1.tenor.com/images/d5668af606ca4d0332a6507418cabbce/tenor.gif?itemid=4952249"
        };
           const embed = new RichEmbed()
                embed.setDescription(msg.author + ' is Crying' )  
                const randm = Math.random();

                embed.setImage(imgcry[Math.floor(randm * Object.keys(imgcry).length).toString()])

             embed.setColor(0x23ff12)
            return msg.embed(embed);
        }
	};
