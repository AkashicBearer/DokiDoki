const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class confusedCommand extends Command {
    constructor(client) {
      super(client, {
            name: 'confused',
            aliases: ['huh'],
            group: 'emo',
            memberName: 'confused',
            description: 'You are confused', 
        });
    }

	async run(msg, args) {
        var imgconfused = {
            "0": "https://media1.tenor.com/images/e765e06eb21f7bdd41eb6605222c4f60/tenor.gif?itemid=6014356",
            "1": "http://gifimage.net/wp-content/uploads/2017/09/anime-confused-gif-9.gif",
            "2": "http://gifimage.net/wp-content/uploads/2017/09/anime-confused-gif-8.gif",
            "3": "http://gifimage.net/wp-content/uploads/2017/10/confused-anime-gif-4.gif",
            "4": "https://media1.tenor.com/images/638fb06e79fc53891ba722133b0ef714/tenor.gif?itemid=7270304",
            "5": "https://media.giphy.com/media/i8tUurFqHl3H2/giphy.gif",
            "6": "http://gifimage.net/wp-content/uploads/2017/10/confused-anime-girl-gif-2.gif",
            "7": "https://media1.tenor.com/images/4370d233d5a77bc6054ce55c2bd125d7/tenor.gif?itemid=5609852",
            "8": "http://gifimage.net/wp-content/uploads/2017/10/confused-anime-girl-gif-11.gif",
            "9": "https://1.bp.blogspot.com/-SlhrB9KPUZ4/WKtiicbSPCI/AAAAAAAAvos/qawTScg0y6EeIiRVKm6ubKcwP0gvyMTAwCPcB/s1600/Omake%2BGif%2BAnime%2B-%2BGabriel%2BDropOut%2B-%2BEpisode%2B7%2B-%2BGab%2BConfused.gif",
            "10": "https://media.giphy.com/media/3JarTqq7zVVte/giphy.gif",
            "11": "http://gifimage.net/wp-content/uploads/2017/09/anime-confused-gif-4.gif",
            "12": "https://vignette.wikia.nocookie.net/degrassi/images/9/9a/Misaki_confused.gif/revision/latest?cb=20150321014036",
            "13": "https://78.media.tumblr.com/0e6dfcca4edf71155a374bca0c78da65/tumblr_mrdtiloV4X1qkudkfo1_500.gif",
            "14": "https://media1.tenor.com/images/818f89c2a4adccbbfbd80a818c34269a/tenor.gif?itemid=8987124",
            "15": "https://78.media.tumblr.com/fb72f1641039b57a0b76314d2abf4c1b/tumblr_ovwhww6rJY1srt81jo1_500.gif",
            "16": "http://gifimage.net/wp-content/uploads/2017/09/anime-what-gif-9.gif",
            "17": "https://www.dramafever.com/st/news/images/No_Glasses.gif",
            "18": "https://media.giphy.com/media/pIniel0wOIj60/giphy.gif",
            "19": "https://media.giphy.com/media/10E0y3sVPdnGus/giphy.gif"
        };
           const embed = new RichEmbed()
                embed.setDescription(msg.author + ' is confused')  
                const randm = Math.random();

                embed.setImage(imgconfused[Math.floor(randm * Object.keys(imgconfused).length).toString()])

          embed.setColor(0x23ff12)
            return msg.embed(embed);
        }
	};
