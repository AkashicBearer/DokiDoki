const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class hungryCommand extends Command {
    constructor(client) {
      super(client, {
            name: 'hungry',
            aliases: [],
            group: 'group1',
            memberName: 'hungry',
            description: 'Sends a hungry gif'
        });
    }

	async run(msg, args) {
        var imghungry = {
            "0": "https://78.media.tumblr.com/39ce67d89020bd51003ec2b90ca22afc/tumblr_mpzqslLQFH1r657odo1_500.gif",
            "1": "https://i.gifer.com/ZXFh.gif",
            "2": "https://78.media.tumblr.com/tumblr_lz53j0erQg1rn1630o1_500.gif",
            "3": "http://gifimage.net/wp-content/uploads/2017/10/hungry-anime-gif-4.gif",
            "4": "https://media1.tenor.com/images/b2135c229b5771b6075cb902ed0d2ec6/tenor.gif?itemid=7257188",
            "5": "https://media.giphy.com/media/oJId0BfJPRZVm/giphy.gif",
            "6": "https://thumbs.gfycat.com/TheseWeeklyEasteuropeanshepherd-max-1mb.gif",
            "7": "https://media.giphy.com/media/9SzWduWEsKqME/giphy.gif",
            "8": "https://i.pinimg.com/originals/1a/cd/0b/1acd0bc1aae7c53d498beffc06712116.gif",
            "9": "https://78.media.tumblr.com/e20564f38b914a59e52b0ed7aa586811/tumblr_nx5ghkNyeE1r7i5gpo3_540.gif",
            "10": "https://78.media.tumblr.com/4c0844712838c34f46a588938c6671f4/tumblr_ole23wHZNT1qzxv73o1_r1_500.gif",
            "11": "https://i.gifer.com/Apcw.gif",
            "12": "https://thumbs.gfycat.com/QuarterlyTinyGreatwhiteshark-size_restricted.gif",
            "13": "https://thebackloggers.files.wordpress.com/2016/10/tumblr_n512mzyzcs1rpxpqbo3_500.gif",
            "14": "https://media.giphy.com/media/sp5EbLOzYaM92/giphy.gif",
            "15": "https://shannonathompson.files.wordpress.com/2014/09/55365451-jpg.gif",
            "16": "https://media0.giphy.com/media/10nrJGAmG5xmla/200w.gif",
            "17": "https://i.gifer.com/ZXFh.gif",
            "18": "https://i.pinimg.com/originals/97/f2/ec/97f2ec8e400571a4c98968a9ca2cc820.gif",
            "19": "https://media1.tenor.com/images/e228666e9ffcb56a7b01c2b6acb00f14/tenor.gif?itemid=9975193",
        };
           const embed = new RichEmbed()
                embed.setDescription(msg.author + ' is hungry' )  
                const randm = Math.random();

                    embed.setImage(imghungry[Math.floor(randm * Object.keys(imghungry).length).toString()])

                embed.setColor(0x23ff12)
            return msg.embed(embed);
        }
	};
