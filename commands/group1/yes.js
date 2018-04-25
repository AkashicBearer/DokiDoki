const { Command } = require('discord.js-commando')
const { RichEmbed } = require('discord.js')

module.exports = class YesCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'yes',
            aliases: [],
            group: 'group1',
            memberName: 'yes',
            description: 'Sends a yes GIF',
        });
    }
    
async run(msg, args) {
        var yes = {
        "0":"https://media.giphy.com/media/dwZOgH1bBCwco/giphy.gif",
        "1": "https://media2.giphy.com/media/xgxPHzl4k7pGE/giphy.gif",
        "2": "http://pa1.narvii.com/5969/315094e0c7b639c33240a01178bccfaaaa113a2d_hq.gif",
        "3": "https://thumbs.gfycat.com/EthicalOrnateAyeaye-max-1mb.gif",
        "4": "http://i0.kym-cdn.com/photos/images/original/001/103/137/7d4.gif",
        "5": "https://media.giphy.com/media/ABAoprpHlW5t6/giphy.gif",
        "6": "https://thumbs.gfycat.com/CircularTartHochstettersfrog-max-1mb.gif",
        "7": "http://gifimage.net/wp-content/uploads/2017/10/dance-anime-gif-7.gifhttps://media.giphy.com/media/gwaYVvi0KLWQo/giphy.gif",
        "8": "https://purfektcirno.files.wordpress.com/2010/11/76b531be9799ddaac8feec5e7bbb231a.gif?w=950",
        "9": "http://gifimage.net/wp-content/uploads/2017/07/excited-anime-gif-9.gif",
        "10": "https://media3.giphy.com/media/anDhBXwgvIa7m/giphy.gif",
        "11": "https://media.giphy.com/media/TqBthbq76TyI8/giphy.gif",
        "12": "https://media1.tenor.com/images/4f8c3b6db8eed790852bb4ccb96cc2e6/tenor.gif?itemid=5967731",
        "13": "https://media1.tenor.com/images/0f9847a5f258da9a3bdccc3860f91eb5/tenor.gif?itemid=9188246",
        "14": "https://media.giphy.com/media/cZ9OTWKzdLRba/giphy.gif",
        "15": "http://gifimage.net/wp-content/uploads/2017/07/excited-anime-gif-8.gif",
        "16": "https://media3.giphy.com/media/yd1p7Gp8EdauY/giphy-downsized.gif",
        "17": "https://media1.tenor.com/images/db4313bff0071d49eec85819955515fe/tenor.gif?itemid=10852688",
        "18": "https://media.tenor.com/images/23ade6d3080784b3f3eb93b750e72989/tenor.gif",
        "19": "https://media1.tenor.com/images/e66822849285eef7d2637dc2b4b9499c/tenor.gif?itemid=8774327",
        };
        const embed = new RichEmbed()
            embed.setDescription(msg.author + ' Says Yes!')
            const randm = Math.random();
            mbed.setImage(yes[Math.floor(randm * Object.keys(yes).length).toString()])
            embed.setColor(0x23ff12)
        return msg.embed(embed);
    }
};
