const { Command } = require('discord.js-commando')
const { RichEmbed } = require('discord.js');

module.exports = class NyaCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'nya',
            group: 'group1',
            memberName: 'nya',
            description: 'Replies with a Neko.'
        });
    }

async run(msg, args) {
        const member = args.member;
        const user = member.user;
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
	    "19": "https://i.pinimg.com/originals/4e/d6/43/4ed6435b4073fa285f75b1545f44d7f2.gif"
        };

        const embed = new RichEmbed()
            .setDescription("Have a Neko")
            .setImage(imgneko[Math.floor(Math.random() * Object.keys(imgneko).length).toString()])
            .setColor(0x23ff12)
        return msg.embed(embed);
    }

};
    }
};
