const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class scaredCommand extends Command {
    constructor(client) {
      super(client, {
            name: 'scared',
            aliases: [],
            group: 'emo',
            memberName: 'scared',
            description: 'Sends a scared gif',
            args: [
                {
                    key: 'member',
                    label: 'user',
                    prompt: 'Who is going to sleep?',
                    type: 'member',
                    default: ''
                }
            ]
        });
    }

	async run(msg, args) {
        var imgscared = {
            "0":"http://i0.kym-cdn.com/photos/images/original/001/110/890/449.gif",
            "1":"https://vignette.wikia.nocookie.net/dragonball/images/7/78/Mio-scared-03.gif/revision/latest?cb=20130331012931",
            "2":"https://media1.tenor.com/images/e2b367b70b13da72285d5942db990d9f/tenor.gif?itemid=5840907",
            "3":"https://i.gifer.com/8y0I.gif",
            "4":"https://i.gifer.com/C7Ig.gif",
            "5":"https://media2.giphy.com/media/KS8YLQCLdzYUE/giphy.gif",
            "6":"http://gifimage.net/wp-content/uploads/2017/09/anime-scared-gif-7.gif",
            "7":"https://media.giphy.com/media/Q5ql3GnGEz3NK/giphy.gif",
            "8":"https://78.media.tumblr.com/ec58d392fbf9046b49b1794782772e12/tumblr_npk61bzfWS1tml5xeo1_500.gif",
            "9":"https://i.gifer.com/8gh.gif",
            "10":"https://media1.tenor.com/images/e476c87351124febce3c129a51157ed4/tenor.gif?itemid=5619917",
            "11":"https://media.giphy.com/media/5FRde2FWAR9Kw/giphy.gif",
            "12":"https://media1.tenor.com/images/4113860d26c424de44262e71a13a4e63/tenor.gif?itemid=5945186",
            "13":"https://i.imgur.com/P00fSNx.gif",
            "14":"https://media.giphy.com/media/hXEubnO587uk8/giphy.gif",
            "15":"https://m.popkey.co/42d226/1xLew.gif",
            "16":"https://i.imgur.com/bNV8A5M.gif",
            "17":"https://media.giphy.com/media/23Bp4B9gBBune/giphy.gif",
            "18":"http://i.imgur.com/gIPk3Ef.gif",
            "19":"https://media.giphy.com/media/WVPSK6lWAh1u0/giphy.gif",
        };
           const embed = new RichEmbed()
                if(msg.author.id == args.member.id || !args.member){
                    embed.setDescription(msg.author + ' is scared.')
                }else{
                    embed.setDescription(msg.author + ' is scared of ' + args.member + '.')
                }  
                const randm = Math.random();

                    embed.setImage(imgscared[Math.floor(randm * Object.keys(imgscared).length).toString()])

                embed.setColor(0x23ff12)
            return msg.embed(embed);
        }
	};
