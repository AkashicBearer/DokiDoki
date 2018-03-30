const { Command } = require('discord.js-commando')
const { RichEmbed } = require('discord.js')

module.exports = class SingCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'sing',
            aliases: [],
            group: 'group1',
            memberName: 'sing',
            description: 'Sing'
        });
    }
    
async run(msg, args) {
        var imgSing = {
            "0": "https://media.giphy.com/media/fgwnNNRRdvmMg/giphy.gif",
            "1":"https://i.pinimg.com/originals/c6/13/44/c6134464259fe9065643b6ad6369b19d.gif",
            "2": "https://media1.tenor.com/images/2b5da971e6b467d1d5fec51d1d4f3f03/tenor.gif?itemid=5434329",
            "3": "https://media.giphy.com/media/U2PhiMvBhzuTu/giphy.gif",
            "4": "https://media.giphy.com/media/9l2l0V90XFOxi/giphy.gif",
            "5": "https://media.giphy.com/media/17eewAJe1KRxe/giphy.gif",
            "6": "https://am21.akamaized.net/tms/cnt/uploads/2015/10/imas7.gif",
            "7": "http://gifimage.net/wp-content/uploads/2017/09/anime-singing-gif-10.gif",
            "8": "https://uploads.disquscdn.com/images/f189cf296e54467abeb1bed6034402ab03e3c12b3acbc3e1c6bf41bfe7810cd6.gif",
            "9": "https://78.media.tumblr.com/24a89af71eec6af50889b0795669e0ec/tumblr_n882plD1D21rlulmlo1_400.gif",
            "10": "http://i.imgur.com/KPLdLMM.gif",
            "11": "https://secure.static.tumblr.com/20a6e94a2cd5a88753d433adbd58197d/xgrkdqx/H8Emgjj1n/tumblr_static_sing__22_.gif",
            "12": "http://auto.img.v4.skyrock.net/1039/77651039/pics/3099452505_1_3_8sRyELXW.gif",
            "13": "https://northeastofnorth.com/wp-content/uploads/2015/10/karaoke.gif",
            "14": "https://i.pinimg.com/originals/0b/24/ff/0b24ff2c1f9fbf8fe76f765664422725.gif",
            "15": "https://vignette.wikia.nocookie.net/date-a-live/images/7/76/Miku-izayoi-date-a-live-gif.gif/revision/latest?cb=20150726093033",
            "16": "https://thumbs.gfycat.com/SparklingSpiffyAntelopegroundsquirrel-size_restricted.gif",
            "17": "https://i.stack.imgur.com/a4ar5.gif",
            "18": "https://media.giphy.com/media/UpJ2V3uGyQ8Ug/giphy.gif",
            "19": "http://fanaru.com/love-live-school-idol-project/image/239577-love-live-school-idol-project-nozomi-singing.gif",
        };

        const embed = new RichEmbed()
            embed.setDescription(msg.author + ' is Singing')
            const randm = Math.random();

                embed.setImage(imgsing[Math.floor(randm * Object.keys(imgsing).length).toString()])

            embed.setColor(0x23ff12)
        return msg.embed(embed);
    }
};
