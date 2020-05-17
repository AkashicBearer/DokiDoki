const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class PoutCommand extends Command {
    constructor(client) {
      super(client, {
            name: 'pout',
            group: 'emo',
            memberName: 'pout',
            description: 'Sends a pout'
        });
    }

	async run(message, args) {
        var imgpout = {
            "0": "https://i.imgur.com/ktGINkV.gif",
            "1": "https://media1.tenor.com/images/c8bf65854104f13e8e2cdc9453c5222f/tenor.gif?itemid=8687045",
            "2": "https://media.giphy.com/media/T6QsHz4lscVZm/giphy.gif",
            "3": "https://78.media.tumblr.com/c64aabcd3ce93bd0cb1bfe2d4949853e/tumblr_oktiiztx671voyry7o1_500.gif",
            "4": "http://i.imgur.com/Yy2jWO1.gif",
            "5": "https://78.media.tumblr.com/84d72c998a950f3b2d539999506dcec7/tumblr_nkplw17MLG1u7kgn9o1_500.gif",
            "6": "http://i.imgur.com/mw2aNjC.gif",
            "7": "https://thumbs.gfycat.com/ForkedKaleidoscopicCollie-size_restricted.gif",
            "8": "https://media.giphy.com/media/10abWjdcwyuKHK/giphy.gif",
            "9": "http://i.imgur.com/2JJwMO3.gif",
            "10": "https://78.media.tumblr.com/76fde5ab37340ebd838f9b1cb632c8a0/tumblr_oegkawmu8y1tydz8to1_500.gif",
            "11": "https://uploads.disquscdn.com/images/8a82068d5b61e9f6a88dffd09da8bf0046f2297532f50ca35cf4a071ed20b6c6.gif",
            "12": "http://i.imgur.com/eawMRR7.gif",
            "13": "http://i.imgur.com/V5p3iYb.gif",
            "14": "http://i.imgur.com/AFSxeoh.gif",
            "15": "http://i65.tinypic.com/212y58y.gif",
            "16": "https://media1.tenor.com/images/cb871efa727558862700f8f3f924df67/tenor.gif",
            "17": "http://i.imgur.com/FXbChLe.gif",
            "18": "http://i.imgur.com/oxrL5x5.gif",
            "19": "https://i.pinimg.com/originals/dd/8c/1b/dd8c1b1d4ef56c49d4dbfce0ccef1b7d.jpg",
            "20":"http://i.imgur.com/WB8faiz.gif",
            "21":"http://i.imgur.com/siauD6Y.gif",
            "22":"http://i.imgur.com/V0nzHKI.gif",
            "23":"http://i.imgur.com/iSfy9qQ.gif"
        };
           const embed = new MessageEmbed()
                embed.setDescription(message.author.username + ' is Pouting' )  
                const randm = Math.random();

                    embed.setImage(imgpout[Math.floor(randm * Object.keys(imgpout).length).toString()])

                embed.setColor(0x23ff12)
            message.channel.send(embed)
        }
	};
