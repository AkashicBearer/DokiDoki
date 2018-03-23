const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class hugCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'hug',
            aliases: [],
            group: 'group1',
            memberName: 'hug',
            description: 'Who do you want to hug?',
          
			args: [
				{
				key: 'member',
				label: 'user',
				prompt: 'Who to hug?',
				type: 'member'
				}
			]
        });
    }
	async run(msg, args) {
        var imghug = {
            "0": "https://media1.tenor.com/images/b0de026a12e20137a654b5e2e65e2aed/tenor.gif?itemid=7552093",
            "1": "https://media1.tenor.com/images/49a21e182fcdfb3e96cc9d9421f8ee3f/tenor.gif?itemid=3532079",
            "2": "https://media1.tenor.com/images/b8b017d93d2e24d43f48ac6c63464a9c/tenor.gif?itemid=7552069",
            "3": "https://m.popkey.co/fca5d5/bXDgV.gif",
            "4": "https://thumbs.gfycat.com/JealousFlakyArabianwildcat-max-1mb.gif",
            "5": "https://im-01.gifer.com/Lqgh.gif",
            "6": "https://media.giphy.com/media/DjczAlIcyK1Co/giphy.gif",
            "7": "https://im-01.gifer.com/8WPN.gif",
            "8": "https://media.giphy.com/media/wnsgren9NtITS/giphy.gif",
            "9": "http://gifimage.net/wp-content/uploads/2017/09/anime-hug-gif-1.gif",
            "10": "https://media1.tenor.com/images/37a4c26fe65660b79f2efb73fc7bf76b/tenor.gif?itemid=9200935",
            "11": "https://media.giphy.com/media/lrr9rHuoJOE0w/giphy.gif",
            "12": "http://cdn.smosh.com/sites/default/files/2015/11/itnernet-hugs-anime-japan2.gif",
            "13": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyAi-p4vM-HZMXYTWpImlqG8CFi2xkO0Sp2N_L_dW6u8ODN-tMLw",
            "14": "https://78.media.tumblr.com/f95126745e7f608d3718adae179fad6e/tumblr_o6yw691YXE1vptudso1_500.gif",
            "15": "https://i.pinimg.com/originals/9e/aa/dd/9eaadde3891872fa2d29781874cbfcfc.gif",
            "16": "http://i0.kym-cdn.com/photos/images/newsfeed/000/935/627/3a5.gif",
            "17": "https://media.giphy.com/media/pXQhWw2oHoPIs/giphy-downsized-large.gif",
            "18": "http://gifimage.net/wp-content/uploads/2017/01/Anime-hug-GIF-Image-Download-10.gif",
            "19": "https://78.media.tumblr.com/d795df9b60134d4971dd372796ae3ab4/tumblr_nox50xwORk1toklayo1_500.gif"
        };

        
        const embed = new RichEmbed()
         if(msg.author.id == args.member.id){
            embed.setDescription(msg.author + ' hugs.. themselves.. seems like someone needs some love. ')
            }else{
            embed.setDescription(msg.author + ' hugs ' + args.member.user)
            }
            embed.setImage(imghug[Math.floor(Math.random() * Object.keys(imghug).length).toString()])
            embed.setColor(0x23ff12)
        return msg.embed(embed);
    }
	
};
