const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class biteCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'bite',
            group: 'group1',
            memberName: 'bite',
            description: 'Who do you want to bite?',
          
			args: [
				{
				key: 'member',
				label: 'user',
				prompt: 'Who to bite?',
				type: 'member'
				}
			]
        });
    }
	async run(msg, args) {
        var imgbite = {
            "0": "https://media.giphy.com/media/OqQOwXiCyJAmA/giphy.gif",
            "1": "http://gifimage.net/wp-content/uploads/2017/09/anime-bite-gif.gif",
            "2": "https://media1.tenor.com/images/c22a247affcf4cd02c7d17f5a432cd95/tenor.gif?itemid=8259627",
            "3": "https://media.giphy.com/media/fhkRUj3BWmMnu/giphy.gif",
            "4": "http://gifimage.net/wp-content/uploads/2017/09/anime-bite-gif-10.gif",
            "5": "https://i.pinimg.com/originals/c9/f1/53/c9f1535bb70e5e19d66d93cbcb856e14.jpg",
            "6": "https://media1.tenor.com/images/2440ac6ca623910a258b8616704850f0/tenor.gif?itemid=7922565",
            "7": "http://gifimage.net/wp-content/uploads/2017/09/anime-bite-gif-4.gif",
            "8": "https://media1.tenor.com/images/a74770936aa6f1a766f9879b8bf1ec6b/tenor.gif?itemid=4676912",
            "9": "http://pa1.narvii.com/5889/0634de6480adc0684f83135faadec2f5e7288ea5_hq.gif",
            "10": "http://i0.kym-cdn.com/photos/images/newsfeed/001/027/044/1cd.gif",
            "11": "https://78.media.tumblr.com/7e2cad3ab0432205cdd5c37fab83d977/tumblr_ojh7gzPyeB1uzwbyjo1_500.gif",
            "12": "http://i0.kym-cdn.com/photos/images/original/000/832/011/aaa.gif",
            "13": "https://i.pinimg.com/originals/c0/b4/a9/c0b4a94993a08d1df826e27e55dd2fb0.gif",
            "14": "http://img1.ak.crunchyroll.com/i/spire1/6992aca5d65cc35994e64d1db60712dc1269709025_full.gif",
            "15": "https://data.whicdn.com/images/81002249/original.gif",
            "16": "http://img1.ak.crunchyroll.com/i/spire3/105470d8f6fc8f277f511aada0e564c21488138818_full.gif",
            "17": "http://rs767.pbsrc.com/albums/xx320/abdul_dxr/Anime%20GIF/Headbite.gif~c200",
            "18": "https://lh3.googleusercontent.com/-wNoe2_Ncky4/UQb5btlzyzI/AAAAAAAAkrk/Mt_C00t5DYw/w500-h300-n/photo.jpg",
            "19": "http://i.imgur.com/fWSIugu.gif"
        };

        
        const embed = new RichEmbed()
         if(msg.author.id == args.member.id){
            embed.setDescription(msg.author + ' bites.. themselves.. seems like someone needs some love. ')
            }else{
            embed.setDescription(msg.author + ' bites ' + args.member.user)
            }
            embed.setImage(imgbite[Math.floor(Math.random() * Object.keys(imgbite).length).toString()])
            embed.setColor(0x23ff12)
        return msg.embed(embed);
    }
	
};
