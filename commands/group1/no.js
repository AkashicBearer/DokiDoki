const { Command } = require('discord.js-commando')
const { RichEmbed } = require('discord.js')

module.exports = class NoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'no',
            aliases: [],
            group: 'group1',
            memberName: 'no',
            description: 'Sends a No GIF'
        });
    }
    
async run(msg, args) {
        var no = {
            "0": "https://ci.memecdn.com/2054423.gif",
            "1": "https://media1.tenor.com/images/3f10d4ba54de4302c1ea37ce0b272d40/tenor.gif?itemid=8620723",
            "2": "http://i0.kym-cdn.com/photos/images/original/000/775/724/97e.gif",
            "3": "https://memestatic.fjcdn.com/gifs/Anime_eae0e1_6308880.gif",
            "4": "http://i0.kym-cdn.com/photos/images/newsfeed/001/314/085/1e6.gif",
            "5": "https://78.media.tumblr.com/ffc05b4a8f66b3f1acd1fc41ca0351ba/tumblr_inline_o481u5ODLb1tsu2ur_500.gif",
            "6": "https://media1.tenor.com/images/2e915cd96500daf6349a2f4a75a4e8de/tenor.gif?itemid=8409151",
            "7": "https://78.media.tumblr.com/77a6cf13a615be925fd6fe61b5e1a35e/tumblr_nmrqe1Yyf71tal76io1_500.gif",
            "8": "http://gifimage.net/wp-content/uploads/2017/07/angry-anime-gif-8.gif",
            "9": "https://i.gifer.com/Uiu.gif",
            "10": "https://i.pinimg.com/originals/13/e2/76/13e2761232d7671a9c2663aca5b9dbf2.gif",
            "11": "https://media.giphy.com/media/OQYmdyH3A6NnW/giphy.gif",
            "12": "https://media1.tenor.com/images/cb871efa727558862700f8f3f924df67/tenor.gif?itemid=5178234",
            "13": "https://78.media.tumblr.com/673abfe0aecddf3772182e629ee73b04/tumblr_mp4zmxHpJj1rmpwtao1_500.gif",
            "14": "http://gifimage.net/wp-content/uploads/2017/07/angry-anime-gif-12.gif",
            "15": "https://i.pinimg.com/originals/7c/24/58/7c2458af22a5ad46b734e41d87a2c21f.gif",
            "16": "https://thumbs.gfycat.com/QuickSecondaryAnteater-max-1mb.gif",
            "17": " https://78.media.tumblr.com/49e220669306008821f0980c273dc912/tumblr_orzzr93lDW1wskyx5o1_500.gif",
            "18": " https://i.gifer.com/2eIK.gif",
            "19": "https://78.media.tumblr.com/1bae93b70c1543b1a637eb352d5721a9/tumblr_ohxv2nYLdE1ufw8o4o1_500.gi"
        };
        const randm = Math.random();
        const embed = new RichEmbed()
            embed.setDescription(msg.author + ' Says No ')
            embed.setImage(no[Math.floor(randm * Object.keys(no).length).toString()])
            embed.setColor(0x23ff12)
        return msg.embed(embed);
    }
};
