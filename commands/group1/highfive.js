const { Command } = require('discord.js-commando')
const { RichEmbed } = require('discord.js');

module.exports = class HighFiveCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'highfive',
			aliases: ['hf'],
            group: 'group1',
            memberName: 'highfive',
            description: 'Highfive someone',			
			args: [
				{
					key: 'member',
					label: 'user',
					prompt: 'Who Do you want to HighFive?',
					type: 'member'
				}
			]
        });
    }
	
async run(msg, args) {
	const member = args.member;
        const user = member.user;
        var imghf = {
            "0": "http://gifimage.net/wp-content/uploads/2017/09/anime-high-five-gif-13.gif",
            "1": "https://media.giphy.com/media/ydeBqhYTdzMJ2/giphy.gif",
            "2": "http://gifimage.net/wp-content/uploads/2017/09/anime-high-five-gif-7.gif",
            "3": "http://i0.kym-cdn.com/photos/images/original/001/126/190/908.gif",
            "4": "http://gifimage.net/wp-content/uploads/2017/09/anime-high-five-gif.gif",
            "5": "https://78.media.tumblr.com/6aafbbe067a15a59e1593cf6097fbaf9/tumblr_o0l51tCl4T1tieeldo1_500.gif",
            "6": "https://2.bp.blogspot.com/-SzksqUBYkJg/Wj7cxU_-2gI/AAAAAAABBlU/xDJz8-_EyOwv2wiK0V3srZi9K1DK0Zw3gCKgBGAs/s1600/Omake%2BGif%2BAnime%2B-%2BLove%2BLive%2521%2BSunshine%2521%2521%2BS2%2B-%2BEpisode%2B12%2B-%2BFirst%2BYears%2Band%2BThird%2BYears%2BHigh%2BFive.gif",
            "7": "https://media1.tenor.com/images/d9789c904472970f6654633ac2b03aa1/tenor.gif?itemid=4746486",
            "8": "http://fanaru.com/no-game-no-life/image/185767-no-game-no-life-high-five.gif",
            "9": "http://fanaru.com/fairy-tail/image/88635-fairy-tail-high-five.gif",
            "10": "https://i.imgur.com/Z99zi6m.gif",
            "11": "https://i.imgur.com/zhKUBiJ.gif",
            "12": "https://i.pinimg.com/originals/17/0b/2d/170b2d511efc778b86d58fa12d66c0cb.gif",
            "13": "http://4.bp.blogspot.com/-zFgKJCMQY0s/VCh7Q7B6NCI/AAAAAAAAUbQ/RQu02-605Uw/s1600/Futs%C5%AB%2Bno%2BJoshik%C5%8Dsei%2Bga%2BLocodol%2BYattemita2.gif",
            "14": "https://i.pinimg.com/originals/a6/98/ec/a698ec15e91f701f2ffa1482c0c471fb.jpg",
            "15": "https://thumbs.gfycat.com/ActualWarmheartedDungbeetle-max-1mb.gif",
            "16": "http://i0.kym-cdn.com/photos/images/original/001/261/707/726.gif",
            "17": "https://78.media.tumblr.com/a125f8c7b6de525c56baf9c459e13fba/tumblr_oi4wa3eXNB1vjcm8po1_540.gif",
	    "18": "https://cloudedanime.files.wordpress.com/2016/10/hibike-eupho-s2-02-high-five.gif?w=632&h=356",
	    "19": "https://78.media.tumblr.com/tumblr_m1mw1k5ULW1qi6gaho1_400.gif"
        };

        const embed = new RichEmbed()
            embed.setDescription(msg.author + ' Highfives ' + args.member.user)
            const randm = Math.random();
             if(randm < 1){
                embed.setImage(imghf[Math.floor(randm * Object.keys(imghf).length).toString()])
             }else{
                embed.setImage(imghf[Math.floor(randm * Object.keys(imghf).length-1).toString()])
             }
            embed.setColor(0x23ff12)
        return msg.embed(embed);
    }

};
