const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class sighCommand extends Command {
    constructor(client) {
      super(client, {
            name: 'sigh',
            aliases: [],
            group: 'group1',
            memberName: 'sigh',
            description: 'Sends a sigh'
        });
    }

	async run(msg, args) {
        var imgsigh = {
            "0":"https://thumbs.gfycat.com/TallAnxiousCavy-max-1mb.gif",
            "1":"https://78.media.tumblr.com/tumblr_ljtfyfSyoV1qit92oo1_500.gif",
            "2":"https://media.tenor.com/images/268f813d6f83026bbe0869739802f271/tenor.gif",
            "3":"https://media.giphy.com/media/26Ff1tgMvVx4tl0U8/giphy.gif",
            "4":"https://78.media.tumblr.com/4d61a1afb33e8f4867faab937e2c8e95/tumblr_inline_nvb25gXSbi1tr6kfk_500.gif",
            "5":"https://media.tenor.com/images/03e663525554a44dc7670daa0396e5a1/tenor.gif",
            "6":"https://media1.tenor.com/images/e476c87351124febce3c129a51157ed4/tenor.gif?itemid=5619917",
            "7":"https://3.bp.blogspot.com/-ub95ZQ2HH3M/UqBk911n7eI/AAAAAAAAB-0/NWH1a1x0O7A/s1600/Worried+001.gif",
            "8":"https://media1.tenor.com/images/b09c362ac3b141b35487d22f81c4e212/tenor.gif?itemid=6088566",
            "9":"https://lh3.googleusercontent.com/-HtHs9KECkBE/UxW8wnKrR_I/AAAAAAAH55o/66CVEd-FrUc/w434-h360-n/loli2014.gif",
            "10":"https://data.whicdn.com/images/51539790/original.gif",
            "11":"https://i.gifer.com/8Vlb.gif",
            "12":"https://4.bp.blogspot.com/-EYXFa2N_Rjk/WUs_1HAX0NI/AAAAAAAA3DQ/svrG-A_4x6YRWTAEXulieDfRr79853utQCKgBGAs/s1600/Omake%2BGif%2BAnime%2B-%2BShingeki%2Bno%2BKyojin%2BS2%2B-%2BEpisode%2B37%2B%255BEND%255D%2B-%2BMikasa%2BWorried.gif",
            "13":"https://i.gifer.com/OjEk.gif",
            "14":"https://4.bp.blogspot.com/-ba93-1ksBfw/Vr5ePYkfV8I/AAAAAAAAXvg/LcUJp6FzYfI/s1600/Omake%2BGif%2BAnime%2B-%2BOshiete%2521%2BGalko-chan%2B-%2BEpisode%2B6%2B-%2BGalko%2BFunny%2BFaces.gif",
            "15":"https://mlpforums.com/uploads/post_images/sig-4390519.EovZzuP.gif",
            "16":"https://thumbs.gfycat.com/CarefulHorribleGhostshrimp-max-1mb.gif",
            "17":"https://vignette.wikia.nocookie.net/legendsofthemultiuniverse/images/7/7b/Latias_worried.gif/revision/latest?cb=20140701061102",
            "18":"https://i1.wp.com/www.bubbleblabber.com/wp-content/uploads/2015/12/Elevator.gif?resize=540%2C238",
            "19":"https://78.media.tumblr.com/1abd2ab9c01da31a2b32576134436949/tumblr_ni2c66x7ah1r717c6o1_250.gif",
        };
           const embed = new RichEmbed()
                embed.setDescription(msg.author + ' is sighing' )  
                const randm = Math.random();

                    embed.setImage(imgsigh[Math.floor(randm * Object.keys(imgsigh).length).toString()])

                embed.setColor(0x23ff12)
            return msg.embed(embed);
        }
	};
