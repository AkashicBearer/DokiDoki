const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class StareCommand extends Command {
    constructor(client) {
      super(client, {
            name: 'stare',
            group: 'emo',
            aliases: ['glare'],
            memberName: 'stare',
            description: 'Stare at a User',
            args: [{
                 key: 'member',
                 label: 'user',
                 prompt: 'Who are you staring at?',
                 type: 'member',
                 default:''
	    }] 
        });
    }

	async run(msg, args) {
	const member = args.member;
        const user = member.user;
        var imgstare = {
            "0": "https://media.giphy.com/media/fzPHhmTFa3Jpm/giphy.gif",
            "1": "http://i.imgur.com/iNq7r.gif",
            "2": "https://78.media.tumblr.com/b9919a46e10b0615dd6bd6e823994c76/tumblr_methr5KTUl1roi9fwo1_500.gif",
            "3": "https://media.giphy.com/media/Cw2wHAdelPnLa/giphy.gif",
            "4": "http://gifimage.net/wp-content/uploads/2017/09/anime-stare-gif-10.gif",
            "5": "https://pa1.narvii.com/6466/23008110a6207b8bff3b76030d18a799ce98e656_hq.gif",
            "6": "http://gifimage.net/wp-content/uploads/2017/09/anime-stare-gif-5.gif",
            "7": "https://78.media.tumblr.com/59ea055213d787c847133edcca52fc37/tumblr_n361wvBYqR1r72ht7o1_500.gif",
            "8": "https://media.giphy.com/media/sD2twDzARuruM/giphy.gif",
            "9": "http://3.bp.blogspot.com/-N2Tg9WxcQeY/T_w_R6vm0BI/AAAAAAAAAC0/c8PkOjBSNTw/s1600/tumblr_m6xd7la2xy1razmqlo1_500.gif",
            "10": "https://media.giphy.com/media/jrXFhTkoiesKY/giphy.gif",
            "11": "https://media.giphy.com/media/RXrwFW84gDCcU/giphy.gif",
            "12": "https://media.giphy.com/media/1ThaK2U12YpLq/giphy.gif",
            "13": "http://gifimage.net/wp-content/uploads/2017/09/anime-stare-gif-12.gif",
            "14": "https://media.giphy.com/media/a0hgH5m2hWZ4k/giphy.gif",
            "15": "https://media.giphy.com/media/fvcrSYkOmtP8c/giphy.gif",
            "16": "https://media3.giphy.com/media/fARFPMuspJRx6/giphy.gif",
            "17": "http://fat.gfycat.com/SevereGoldenAustralianfreshwatercrocodile.gif",
            "18": "https://78.media.tumblr.com/dfb7f75c71203d4fe3d5be0f11d71b7f/tumblr_mzdiuaun4X1r409x4o2_500.gif",
            "19": "https://i.imgur.com/OFEUSbt.gif",
        };
           const embed = new RichEmbed()
                if(!args.member){
                    embed.setDescription(msg.author + ' is staring')  
                }else{
                    embed.setDescription(msg.author + ' is staring at ' + args.member.user)    
                }
                const randm = Math.random();

                    embed.setImage(imgstare[Math.floor(randm * Object.keys(imgstare).length).toString()])

                embed.setColor(0x23ff12)
            return msg.embed(embed);
        }
	};
