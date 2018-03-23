const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class LewdtCommand extends Command {
    constructor(client) {
      super(client, {
            name: 'lewd',
            aliases: ['blush', 'lew'],
            group: 'group1',
            memberName: 'lewd',
            description: 'T-to Lewd...',
            args: [
                {
                    key: 'member',
                    label: 'user',
                    prompt: 'Who is lewd?',
                    type: 'member',
                    default: ''
                }
            ]
        });
    }

	async run(msg, args) {
        var imglewd = {
            "0": "http://i0.kym-cdn.com/photos/images/newsfeed/000/423/812/a1c.gif",
            "1": "https://media.giphy.com/media/e6NFJK3Pvy8Yo/giphy.gif",
            "2": "http://gifimage.net/wp-content/uploads/2017/06/blush-gif-16.gif",
            "3": "https://media.tenor.com/images/f45f5c5fd72dd7c9ff50976e2bc7133c/tenor.gif",
            "4": "https://media.giphy.com/media/e6NFJK3Pvy8Yo/giphy.gif",
            "5": "https://media1.tenor.com/images/dc917566da214fa3c4e7ddcc58228db9/tenor.gif?itemid=3554995",
            "6": "https://media1.tenor.com/images/9eba52d0506b552b7ef6a1981c0cfcff/tenor.gif?itemid=8680309",
            "7": "http://gifimage.net/wp-content/uploads/2017/07/blush-anime-gif-2.gif",
            "8": "https://data.whicdn.com/images/238067664/original.gif",
            "9": "https://cdn.awwni.me/rti0.gif",
            "10": "https://m.popkey.co/077725/7jGga.gif",
            "11": "https://media.giphy.com/media/149qsFlHFVoVlm/giphy.gif",
            "12": "https://thumbs.gfycat.com/AcidicSecondhandBanteng-size_restricted.gif",
            "13": "https://78.media.tumblr.com/ee84f37c1a1793f6e0027cca5114c200/tumblr_o65c4z0exb1vrrul2o1_400.gif",
            "14": "https://media.giphy.com/media/12YleBEPoJmTu/giphy.gif",
            "15": "https://media1.tenor.com/images/2a3a020417deca849d7cb6218edf75fa/tenor.gif?itemid=8680310",
            "16": "https://media.giphy.com/media/V8QqGkaD8fZCM/source.gif",
            "17": "https://i.pinimg.com/originals/4e/43/29/4e432999bd440ca8b205d282a680634a.jpg",
            "18": "https://78.media.tumblr.com/c2e174dce5b16f24109a450c5781838a/tumblr_ni8yoi6qLO1u55xnmo3_500.gif",
            "19": "https://78.media.tumblr.com/tumblr_lwc0uhI4211qhx4eno2_250.gif",
        };
           const embed = new RichEmbed()
                if(!args.member){
                    embed.setDescription(msg.author + ' is Blushing' )  
                }else{
                    embed.setDescription(msg.author + ' thinks ' + args.member + 'is too lewd.')  
                }
                embed.setImage(imglewd[Math.floor(Math.random() * Object.keys(imglewd).length).toString()])
                embed.setColor(0x23ff12)
            return msg.embed(embed);
        }
	};
