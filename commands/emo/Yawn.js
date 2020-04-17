const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class yawnCommand extends Command {
    constructor(client) {
      super(client, {
            name: 'yawn',
            aliases: [],
            group: 'emo',
            memberName: 'yawn',
            description: 'Sends a yawn'
        });
    }

	async run(message, args) {
        var imgyawn = {
            "0": "https://media.giphy.com/media/Byzxt2ompZJyE/giphy.gif",
            "1": "https://media1.tenor.com/images/9cef52ce27ab97e0fa9cfac1cdc1007f/tenor.gif?itemid=9525859",
            "2": "https://i.gifer.com/2UvD.gif",
            "3": "https://media.giphy.com/media/qbmjPU9cdaKkM/giphy.gif",
            "4": "https://media1.tenor.com/images/e6d82e3e77c6f760398aac9ebeb2201c/tenor.gif?itemid=4795675",
            "5": "https://media.giphy.com/media/Bw4ECQSe8tkT6/giphy.gif",
            "6": "https://nekketsunikki.files.wordpress.com/2013/09/prad3-25-wakana-yawning-gif.gif",
            "7": "https://pa1.narvii.com/6461/c9edb63e32a4f9b96b66e97a83c4c603259ada50_hq.gif",
            "8": "https://uploads.disquscdn.com/images/b78ebc75fbbea0323eccc3b51d07737688acd9ed5e3768b0ff96779eedec1019.gif",
            "9": "https://media.giphy.com/media/Y1Bl4MvP3fDq/giphy.gif",
            "10": "https://78.media.tumblr.com/tumblr_lq2rfnF2Wf1qi2w9yo1_500.gif",
            "11": "https://78.media.tumblr.com/a5539908fef2ead83daf15ef65226d41/tumblr_p41ekvV6iJ1vwvx0xo1_500.gif",
            "12": "https://media.giphy.com/media/2cLHHWMIYw7ni/giphy.gif",
            "13": "https://i.gifer.com/3bSa.gif",
            "14": "https://linustechtips.com/main/applications/core/interface/imageproxy/imageproxy.php?img=http://media.tumblr.com/tumblr_ltvl46j5ut1qktqch.gif&key=2221f4a064afb97ae9c728ee9e60f0e912f9c3f4bc38dcc4a3e9125e1c2bc54a",
            "15": "http://i.imgur.com/MCSYE.gif",
            "16": "https://i.imgur.com/lVXjgIS.gif",
            "17": "https://data.whicdn.com/images/94504304/original.gif",
            "18": "https://img-cache.cdn.gaiaonline.com/536c1ba9a4ea4280e60f5c9a284baedc/http://i206.photobucket.com/albums/bb246/Asamii/Morning.jpg",
            "19": "https://i.pinimg.com/originals/43/3e/85/433e85e15507982e5eca56e88b3ab47a.gif",
            "20": "http://i.imgur.com/OdPeHpb.gif"
        };
           const embed = new MessageEmbed()
                embed.setDescription(message.author.username + ' is yawning' )  
                const randm = Math.random();

                    embed.setImage(imgyawn[Math.floor(randm * Object.keys(imgyawn).length).toString()])

                embed.setColor(0x23ff12)
            message.channel.send(embed)
        }
	};
