const { Command } = require('discord.js-commando')
const { RichEmbed } = require('discord.js');

module.exports = class oyasumiCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'oyasumi',
            group: 'group1',
            memberName: 'oyasumi',
            description: 'Oyasumi Nasai',
        
            args: [
                {
                    key: 'member',
                    label: 'user',
                    prompt: 'Who is going to sleep?',
                    type: 'member'
                }
            ]
        });
    }

    async run(msg, args) {
        const member = args.member;
        const user = member.user;
        var imgoya = {
            "0":"https://s1.zerochan.net/Toyosatomimi.no.Miko.600.1452679.jpg",
            "1":"http://media.giphy.com/media/lqcSPTw3DuwRa/giphy.gif",
            "2":"https://animeforums.net/uploads/monthly_2017_06/62baee119a5169316483161dde2f01c2c8dd3162_hq.gif.fd82c80b0f22e19d48d6a18ac1d4112b.gif",
            "3":"http://i.giphy.com/26AHAM5NizTblvYIM.gif",
            "4":"https://media3.giphy.com/media/pO9TEHqEGzWiQ/giphy.gif",
            "5":"http://gifimage.net/wp-content/uploads/2017/09/anime-sleep-gif-9.gif",
            "6":"https://i.pinimg.com/originals/dd/4a/1b/dd4a1bb923e7090bd8ec364f26a857da.gif",
            "7":"https://media1.tenor.com/images/9650b39d78fd6b91456924ad51f79de2/tenor.gif?itemid=9352439",
            "8":"http://i.imgur.com/ZQ0G3.gif",
            "9":"https://media.giphy.com/media/RighgsIygIWrK/giphy.gif",
            "10":"https://vignette.wikia.nocookie.net/kancolle/images/0/05/Chino_sleeping.gif/revision/latest?cb=20170211223644",
            "11":"https://img.fireden.net/a/image/1446/10/1446102265145.gif",
            "12":"https://thumbs.gfycat.com/FeistyWhirlwindAllosaurus-max-1mb.gif",
            "13":"https://78.media.tumblr.com/39264c47dedd6780ac208aea82aa2848/tumblr_o8a7492ngl1tmvxxdo1_250.gif",
            "14":"https://78.media.tumblr.com/ce580475e37ec01204948c5a3c8ae63f/tumblr_o5bp26p7MN1vppss6o1_400.gif",
            "15":"https://data.whicdn.com/images/185545514/original.gif"
        };
        const embed = new RichEmbed()
            if(message.author.tag == args.member.user.tag){
                embed.setDescription(message.author + 'is going to sleep: "Oyasumi, minna-san!"')
            }else{
                embed.setDescription('Oyasumi, ' + args.member.user + '!')
            }
            
            embed.setImage(imgoya[Math.floor(Math.random() * Object.keys(imgoya).length).toString()])
            embed.setColor(0x23ff12)
        return msg.embed(embed);
    }
};