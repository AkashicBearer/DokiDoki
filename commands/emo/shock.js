const { Command } = require('discord.js-commando')
const { RichEmbed } = require('discord.js');

module.exports = class NyaCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'shock',
            aliases: ['omg'],
            group: 'emo',
            memberName: 'shock',
            description: 'Replies with a shock.'
        });
    }

	async run(msg, args) {
        var imgshock = {
            "0": "https://media.giphy.com/media/BDN8BqYikeV2g/giphy.gif",
            "1": "https://media.giphy.com/media/5iRu1GEEwfOE/giphy.gif",
            "2": "http://img1.ak.crunchyroll.com/i/spire1/01fee28811b5b0cfa2b4464f3cd189731408145817_full.gif",
            "3": "http://gifimage.net/wp-content/uploads/2017/09/anime-surprise-gif.gif",
            "4": "http://gifimage.net/wp-content/uploads/2017/09/anime-surprise-gif-8.gif",
            "5": "http://gifimage.net/wp-content/uploads/2017/09/anime-surprise-gif-1.gif",
            "6": "https://media.giphy.com/media/7vsOChWoNrbHO/giphy.gif",
            "7": "http://gifimage.net/wp-content/uploads/2017/09/anime-surprise-gif-2.gif",
            "8": "https://media1.tenor.com/images/4d34397125a4d5fd64b66935a732fac8/tenor.gif?itemid=6091843",
            "9": "https://vignette.wikia.nocookie.net/rokuaka/images/2/26/Spoiler_surprise.gif/revision/latest?cb=20170706045908",
            "10": "https://www.collegemagazine.com/wp-content/uploads/2016/04/giphy-34.gif",
            "11": "https://media1.tenor.com/images/8668d1279a29e26508f88f9032bbdc78/tenor.gif?itemid=5208552",
            "12": "http://animated.name/uploads/posts/2016-08/1471432627_818.gif",
            "13": "https://78.media.tumblr.com/d094ac79cec12ee6d4c48d9d72e33c5b/tumblr_ox1h09b35B1tdrpkqo1_400.gif",
            "14": "https://media.giphy.com/media/RKh1qvNWskJDW/giphy.gif",
            "15": "https://78.media.tumblr.com/495f6a8ae80271bd01326909d839fc76/tumblr_inline_nkqesyio0L1qeoma2.gif",
            "16": "https://78.media.tumblr.com/276117448a3a8b61fe6783abee0462b0/tumblr_njm9pcSNE81svn9hfo1_500.gif",
            "17": "http://orig12.deviantart.net/1acf/f/2012/235/8/d/shocked_yu_is_shocked__gif__by_eevee76719-d5c4rtn.gif",
            "18": "https://78.media.tumblr.com/a22c9224b9a5e3c0d3abfe72a059e6a8/tumblr_inline_n23t8dy70C1r9u0at.gif",
            "19": "http://media.tumblr.com/2d43722ab84a9352a0872a815981cb2a/tumblr_inline_n364l1Y5wR1syzw6n.gif"
        };

        const embed = new RichEmbed()
            embed.setDescription(msg.author + " is shocked.")
            const randm = Math.random();

                embed.setImage(imgshock[Math.floor(randm * Object.keys(imgshock).length).toString()])

            embed.setColor(0x23ff12)
        return msg.embed(embed);
    }

};
