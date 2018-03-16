const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class HappyCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'happy',
            aliases: ['joy'],
            group: 'group1',
            memberName: 'happy',
            description: 'Show your happiness!',
        });
    }
	async run(msg, args) {
        var imgjoy = {
            "0": "https://media1.tenor.com/images/7706dded712d1e0f6ddb38d0f6352c95/tenor.gif?itemid=6014343",
            "1":"https://media.giphy.com/media/IWM2uI93SaTde/giphy.gif",
            "2": "https://media.giphy.com/media/3Cm8cxtSHqu6Q/giphy.gif",
            "3": "https://media1.tenor.com/images/0f9847a5f258da9a3bdccc3860f91eb5/tenor.gif?itemid=9188246",
            "4": "https://media.giphy.com/media/lDYHk3Okrag7K/giphy.gif",
            "5": "http://data.whicdn.com/images/13114101/original.gif",
            "6": "https://media1.tenor.com/images/4a967984e3517772f0f490c946a7652e/tenor.gif?itemid=5208815",
            "7": "https://media.giphy.com/media/CNUb51EbTxuRG/giphy.gif",
            "8": "http://gifimage.net/wp-content/uploads/2017/07/excited-anime-gif-9.gif",
            "9": "https://gif-free.com/uploads/posts/2017-05/1493788658_happy-anime-hearts.gif",
            "10": "http://gifimage.net/wp-content/uploads/2017/06/happy-anime-gif-5.gif",
            "11": "https://i.pinimg.com/originals/a0/2f/26/a02f26315f9c3938b9716a1773f252b8.gif",
            "12": "http://gifimage.net/wp-content/uploads/2017/09/anime-happy-cry-gif-8.gif",
            "13": "https://i.pinimg.com/originals/93/5a/d8/935ad8df25cbdbbbd715a3b19fb25af5.gif",
            "14": "http://pa1.narvii.com/6176/8e66714966d71edb2a08d2ee898b8cae01ffa1b7_00.gif",
            "15": "https://78.media.tumblr.com/tumblr_mdt6qpDEJk1rby56yo1_500.gif",
            "16": "http://bestanimations.com/Music/Dancers/anime-dancing-girls/anime-dancing-girl-42.gif",
            "17": "https://media.giphy.com/media/1jgLDGD1Bn27e/source.gif",
            "18": "https://media1.tenor.com/images/0fee1c1673d479fc80e523c3618c1d27/tenor.gif?itemid=5528113",
            "19": "https://media.tenor.com/images/07b90f4034ca5572a33bd25a368a8bd7/tenor.gif",
            "20": "https://media1.tenor.com/images/56350dfdcd3a5fa4fd66e9e87f9574bb/tenor.gif?itemid=4718162"
        };

        const embed = new RichEmbed()
            embed.setDescription("Someone is really happy!")
            embed.setImage(imgjoy[Math.floor(Math.random() * Object.keys(imgjoy).length).toString()])
            embed.setColor(0x23ff12)
        return msg.embed(embed);
    }
	
};
