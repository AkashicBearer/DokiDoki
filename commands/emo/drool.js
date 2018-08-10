const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class droolCommand extends Command {
    constructor(client) {
      super(client, {
            name: 'drool',
            aliases: [],
            group: 'emo',
            memberName: 'drool',
            description: 'You drool',
        
            args: [
                {
                    key: 'member',
                    label: 'user',
                    prompt: 'Who do you want to drool at?',
                    type: 'member',
                    default: ''
                }
            ]
        });
    }

	async run(msg, args) {
        var imgdrool = {
            "0": "https://media.giphy.com/media/17lCCCe2g2X3G/giphy.gif",
            "1": "http://gifimage.net/wp-content/uploads/2017/10/drooling-anime-gif.gif",
            "2": "https://media3.giphy.com/media/xS2v1vFvOHnoI/200.gif",
            "3": "https://media1.tenor.com/images/18ff1e58cc53f77981163a1ade932ab8/tenor.gif?itemid=5085160",
            "4": "https://i.pinimg.com/originals/a8/fa/9f/a8fa9fa3806178f828e4e6054c09a06e.gif",
            "5": "https://i.pinimg.com/originals/94/57/b6/9457b65a09844b10e47b85ca5a032a83.gif",
            "6": "https://thumbs.gfycat.com/FrequentGracefulKoodoo-max-1mb.gif",
            "7": "https://em.wattpad.com/2748ab8ba45bdb507f2e743e05b52a2d5ad748e8/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f6e775476304643564c6b576a43773d3d2d3137333136343634312e313435643036653539323835366636323234393536373939353033312e676966?s=fit&w=720&h=720",
            "8": "https://media1.tenor.com/images/c5cc59bd9440de98adc1dfed7274a443/tenor.gif?itemid=4982310",
            "9": "http://i.imgur.com/LS56B.gif",
            "10": "https://pa1.narvii.com/5756/cc51001da2e10aa2274a4b3a7c063e13e56a0aa6_hq.gif",
            "11": "https://i.imgur.com/XM4qn06.gif",
            "12": "https://pa1.narvii.com/5809/73a06f6e5fef8e316b264e6ab03a124ccdd47acc_hq.gif",
            "13": "https://thumbs.gfycat.com/SelfassuredDefensiveIrishwaterspaniel-max-1mb.gif",
            "14": "https://mimi9313.files.wordpress.com/2017/08/yuki-drooling.gif",
            "15": "https://img.fireden.net/v/image/1449/38/1449389401183.gif",
            "16": "http://i42.tinypic.com/2vjc5u1.gif",
            "17": "https://78.media.tumblr.com/240fca20dbd69b1b45e2f59bc2ab38a8/tumblr_nrr0bjQzLV1qd1q2so1_540.gif",
            "18": "https://78.media.tumblr.com/7e71d0e26b0249319a619e2746b0091d/tumblr_nvo3ayd78O1rixucfo1_500.gif",
            "19": "https://pa1.narvii.com/6168/2577d875f920a60fbf7a7b6d0c659fa829df07e6_hq.gif",
        };
           const embed = new RichEmbed()
             if(msg.author.id == args.member.id || !args.member){
                embed.setDescription(msg.author + ' is drooling!')
             }else{
                embed.setDescription(msg.author + ' thinks ' + args.member + ' looks appetizing!')  
             }
                const randm = Math.random();

                    embed.setImage(imgdrool[Math.floor(randm * Object.keys(imgdrool).length).toString()])

                embed.setColor(0x23ff12)
            return msg.embed(embed);
        }
	};
