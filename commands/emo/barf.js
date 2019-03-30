const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class barfCommand extends Command {
    constructor(client) {
      super(client, {
            name: 'barf',
            aliases: [],
            group: 'emo',
            memberName: 'barf',
            description: 'Sends a barf'
        });
    }

	async run(message, args) {
        var imgbarf = {
            "0":"https://i.gifer.com/RNwv.gif",
            "1":"https://img.4plebs.org/boards/pol/image/1440/78/1440784849350.gif",
            "2":"https://vignette.wikia.nocookie.net/kancolle/images/a/a1/Kagura_massive_puke.gif/revision/latest?cb=20170318180441",
            "3":"http://i0.kym-cdn.com/photos/images/original/001/072/574/e3d.gif",
            "4":"https://vignette.wikia.nocookie.net/kancolle/images/4/48/Imouto_Puke.gif/revision/latest?cb=20170617212713",
            "5":"https://img.fireden.net/a/image/1445/89/1445890588601.gif",
            "6":"https://media.giphy.com/media/p5U00QZsx9GbC/giphy.gif",
            "7":"https://pa1.narvii.com/6286/938fae9089d86409995caaa27212469467fca018_hq.gif",
            "8":"https://media.giphy.com/media/w01H3jsd1pA1a/giphy.gif",
            "9":"http://i0.kym-cdn.com/photos/images/original/001/110/533/dff.gif",
            "10":"https://i.pinimg.com/originals/0b/df/09/0bdf095c87c0869c3bf3dcbdebefebde.jpg",
            "11":"https://img.buzzfeed.com/buzzfeed-static/static/2014-01/enhanced/webdr05/27/14/anigif_original-grid-image-29638-1390851792-22.gif",
            "12":"https://media1.tenor.com/images/74f975dbbb1d9791c9e5b1f34e01c036/tenor.gif?itemid=7511483",
            "13":"https://media1.tenor.com/images/9c30432b9d9a2bd10d5495c79eabadca/tenor.gif?itemid=4893648",
            "14":"https://media.giphy.com/media/8kaKWDkqM42sg/giphy.gif",
            "15":"https://i.warosu.org/data/g/img/0477/24/1430273570762.gif",
            "16":"http://i0.kym-cdn.com/photos/images/newsfeed/000/938/667/1cc.gif",
            "17":"https://i.pinimg.com/originals/38/89/77/388977f541b2ba470708ccdee21dd34b.gif",
            "18":"http://squiddy.info/ikamusume.gif",
            "19":"http://i0.kym-cdn.com/photos/images/newsfeed/001/198/340/428.gif",
        };
           const embed = new RichEmbed()
                embed.setDescription(message.author + ' is barfing' )  
                const randm = Math.random();

                    embed.setImage(imgbarf[Math.floor(randm * Object.keys(imgbarf).length).toString()])

                embed.setColor(0x23ff12)
            return message.embed(embed);
        }
	};
