const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class rageCommand extends Command {
    constructor(client) {
      super(client, {
            name: 'rage',
            aliases: ['mad', 'angry'],
            group: 'group1',
            memberName: 'rage',
            description: 'You are mad',
        
            args: [
                {
                    key: 'member',
                    label: 'user',
                    prompt: 'Who do you want to say rage to?',
                    type: 'member',
                    default: ''
                }
            ]
        });
    }

	async run(msg, args) {
        var imgrage = {
            "0": "http://gifimage.net/wp-content/uploads/2017/07/anime-rage-gif.gif",
            "1": "http://gifimage.net/wp-content/uploads/2017/07/anime-rage-gif-3.gif",
            "2": "http://gifimage.net/wp-content/uploads/2017/07/anime-rage-gif-13.gif",
            "3": "http://gifimage.net/wp-content/uploads/2017/07/anime-rage-gif-1.gif",
            "4": "https://media.giphy.com/media/yRDCv6Mmxvp5e/source.gif",
            "5": "https://thedaoofdragonball.com/wp-content/uploads/2013/09/vegeta-on-fire-time-chamber-animation.gif",
            "6": "http://livedoor.4.blogimg.jp/animemangasokuhou/imgs/8/7/874db51b.gif",
            "7": "http://i0.kym-cdn.com/photos/images/original/000/937/736/920.gif",
            "8": "http://gifimage.net/wp-content/uploads/2017/07/anime-rage-gif-9.gif",
            "9": "https://media.giphy.com/media/1ZXfnXk2F7Zio/giphy.gif",
            "10": "http://pa1.narvii.com/5943/4abbc997782b296a7b5ed0f4a5735a89782aa89b_hq.gif",
            "11": "https://static.zerochan.net/Amira.%28Shingeki.no.Bahamut%29.full.2222992.gif",
            "12": "https://pa1.narvii.com/5765/1edf68b430feeaf9c387a98e3fc9daffca2e1342_hq.gif",
            "13": "https://thumbs.gfycat.com/BlindSnivelingCuttlefish-size_restricted.gif",
            "14": "http://gifimage.net/wp-content/uploads/2017/07/anime-rage-gif-10.gif",
            "15": "https://78.media.tumblr.com/b24a0335a54d99fdce2d683375b186d6/tumblr_nc3x9pDTo81tcxs2co1_1280.gif",
            "16": "https://78.media.tumblr.com/085b511407d563f0cdd18e08a7ade729/tumblr_owv7lknoeC1wuz470o5_400.gif",
            "17": "https://media1.tenor.com/images/6a2ae640f9972894314167dcdaa13325/tenor.gif?itemid=4436429",
            "18": "https://media.giphy.com/media/zSJsBKGkoQBHy/giphy.gif",
            "19": "https://media1.tenor.com/images/2831de4b79b81221e44145d96f14f6a8/tenor.gif?itemid=7198819"
        };
           const embed = new RichEmbed()
             if(msg.author.id == args.member.id || !args.member){
                embed.setDescription(msg.author + ' is really mad!')
             }else{
                embed.setDescription(msg.author + ' is very mad at ' + args.member + '!')  
             }
                embed.setImage(imgrage[Math.floor(Math.random() * Object.keys(imgrage).length).toString()])
                embed.setColor(0x23ff12)
            return msg.embed(embed);
        }
	};
