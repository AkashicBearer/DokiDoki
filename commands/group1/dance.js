emoconst { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class danceCommand extends Command {
    constructor(client) {
      super(client, {
            name: 'dance',
            aliases: [],
            group: 'emo',
            memberName: 'dance',
            description: 'You dance', 
        });
    }

	async run(msg, args) {
        var imgdance = {
            "0": "http://gifimage.net/wp-content/uploads/2017/09/anime-gif-dance-6.gif",
            "1": "https://media.tenor.com/images/5f4a923689e868c41038636bde585987/tenor.gif",
            "2": "http://bestanimations.com/Music/Dancers/anime-dancing-girls/anime-dancing-girl-3.gif",
            "3": "https://im-01.gifer.com/7BN.gif",
            "4": "https://i.imgur.com/JluUY98.gif",
            "5": "https://media.giphy.com/media/D2q3HltRG9oK4/giphy.gif",
            "6": "https://i.imgur.com/GKHY47d.gif",
            "7": "http://i0.kym-cdn.com/photos/images/newsfeed/000/984/780/778.gif",
            "8": "https://2.bp.blogspot.com/-nnwov-Cogoc/UukVnWRDnpI/AAAAAAAACeQ/_MnVvvBdxuk/s1600/Dance+010.gif",
            "9": "https://media.giphy.com/media/oy8FiuwqTfWdW/giphy.gif",
            "10": "https://i.pinimg.com/originals/6e/7b/a5/6e7ba5194f8f987896236b9314b7b680.gif",
            "11": "https://media.tenor.com/images/07b90f4034ca5572a33bd25a368a8bd7/tenor.gif",
            "12": "http://bestanimations.com/Music/Dancers/anime-dancing-girls/anime-dancing-girl-30.gif",
            "13": "https://media.giphy.com/media/YZX4FWwOJTK5W/giphy.gif",
            "14": "https://m.popkey.co/5a60cb/oGmd4.gif",
            "15": "https://2.bp.blogspot.com/-nnq_E0Hfd-4/UukWpG1ERzI/AAAAAAAACe4/AwzamFM2T44/s1600/Dance+015.gif",
            "16": "https://78.media.tumblr.com/9bc3b579d14b65d45c16f7f48ab08f15/tumblr_orprpaDbI21qzxv73o1_500.gif",
            "17": "http://pa1.narvii.com/5776/5bbc8d47e5d073a4177b047e6d5fafaa1915c5db_hq.gif",
            "18": "http://i0.kym-cdn.com/photos/images/original/001/151/462/ffc.gif",
            "19": "https://cdn64.picsart.com/189798505001201.gif?r1024x1024"
        };
           const embed = new RichEmbed()
                embed.setDescription(msg.author + ' is dancing')  
                const randm = Math.random();

                    embed.setImage(imgdance[Math.floor(randm * Object.keys(imgdance).length).toString()])

                embed.setColor(0x23ff12)
            return msg.embed(embed);
        }
	};
