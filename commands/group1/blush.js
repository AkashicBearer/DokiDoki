const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class BlushCommand extends Command {
    constructor(client) {
      super(client, {
            name: 'blush',
            aliases: [],
            group: 'emo',
            memberName: 'blush',
            description: 'Sends a Blush GIF'
        });
    }

	async run(msg, args) {
        var imglewd = {
            "0": "https://media1.tenor.com/images/1bb57bb553ea96c150ab167e145f9a66/tenor.gif?itemid=4964136",
            "1": "https://media1.tenor.com/images/9eba52d0506b552b7ef6a1981c0cfcff/tenor.gif?itemid=8680309",
            "2": "https://media2.giphy.com/media/7nlbYoryJoV6o/giphy.gif",
            "3": "https://media.giphy.com/media/12YleBEPoJmTu/giphy.gif",
            "4": "https://media.giphy.com/media/ZNrGKGPrvAeYg/giphy.gif",
            "5": "https://gifimage.net/wp-content/uploads/2017/09/blush-gif-anime-13.gif",
            "6": "https://media.giphy.com/media/sHtPxmEJ5yXio/giphy.gif",
            "7": "https://media1.tenor.com/images/dc917566da214fa3c4e7ddcc58228db9/tenor.gif?itemid=3554995",
            "8": "https://3.bp.blogspot.com/-nMCIC_MDCRs/Vgr62eOG7PI/AAAAAAAAALY/Du7NbnIYiLU/s640/original.gif",
            "9": "https://thumbs.gfycat.com/TeemingTintedIzuthrush-size_restricted.gif",
            "10": "https://m.popkey.co/3307ed/MlE7k.gif",
            "11": "http://gifimage.net/wp-content/uploads/2017/06/anime-blush-gif.gif",
            "12": "https://media.giphy.com/media/YRGW8nGURzZQY/giphy.gif",
            "13": "http://aws-cf.ados.fr/prod/photos/2/0/7/8037207/4358323/img-4358323ef0.gif?v=0",
            "14": "https://media.giphy.com/media/uU8IHAFVDVhks/source.gif",
            "15": "https://i.imgur.com/kyLABnB.gif",
            "16": "https://data.whicdn.com/images/26947458/large.gif",
            "17": "https://media.giphy.com/media/V8QqGkaD8fZCM/source.gif",
            "18": "https://media1.tenor.com/images/2a3a020417deca849d7cb6218edf75fa/tenor.gif?itemid=8680310",
            "19": "https://i.imgur.com/hl1ee7x.gif",
        };
           const embed = new RichEmbed()
                embed.setDescription(msg.author + ' is blushing')  
                const randm = Math.random();
                embed.setImage(imglewd[Math.floor(randm * Object.keys(imglewd).length).toString()])
                embed.setColor(0x23ff12)
            return msg.embed(embed);
        }
	};
