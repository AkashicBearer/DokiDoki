const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class cuddleCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'cuddle',
            aliases: [],
            group: 'group1',
            memberName: 'cuddle',
            description: 'Who do you want to cuddle?',
          
			args: [
				{
				key: 'member',
				label: 'user',
				prompt: 'Who to cuddle?',
				type: 'member'
				}
			]
        });
    }
	async run(msg, args) {
        var imgcuddle = {
            "0": "https://media3.giphy.com/media/143v0Z4767T15e/giphy.gif",
            "1": "https://thumbs.gfycat.com/WellgroomedVapidKitten-max-1mb.gif",
            "2": "https://i.imgur.com/4j8vYD5.gif",
            "3": "https://media.giphy.com/media/od5H3PmEG5EVq/giphy.gif",
            "4": "https://pa1.narvii.com/6103/377538d76d83ec7d9d2be32870d43f2ac931a412_hq.gif",
            "5": "http://gifimage.net/wp-content/uploads/2017/09/anime-cuddle-gif.gif",
            "6": "https://i.pinimg.com/originals/2d/51/f0/2d51f061286d1ff8537babe35ee0ce8f.gif",
            "7": "https://78.media.tumblr.com/17ad5b9d06cc010a427fdaffe3ca10bf/tumblr_nr341vXtEp1r69x9to1_500.gif",
            "8": "https://myanimelist.cdn-dena.com/s/common/uploaded_files/1460988091-6e86cd666a30fcc1128c585c82a20cdd.gif",
            "9": "http://i.imgur.com/p7beIyD.gif",
            "10": "http://i0.kym-cdn.com/photos/images/original/001/094/799/80e.gif",
            "11": "http://gifimage.net/wp-content/uploads/2017/09/anime-cuddle-gif-9.gif",
            "12": "http://gifimage.net/wp-content/uploads/2017/09/anime-cuddle-gif-6.gif",
            "13": "https://media1.tenor.com/images/f855a0348c55a6d0469f34135510bcb2/tenor.gif?itemid=5690234",
            "14": "https://i.imgur.com/9UMtjfl.gif",
            "15": "http://media.tumblr.com/tumblr_m68m3wjllW1qewqw2.gif",
            "16": "https://i.pinimg.com/originals/f2/80/5f/f2805f274471676c96aff2bc9fbedd70.gif",
            "17": "https://78.media.tumblr.com/03ff7fd99493a936d99bb9f01359925c/tumblr_od31w5SNBs1vztiw8o1_500.gif",
            "18": "https://i.pinimg.com/originals/c1/8e/b4/c18eb4b8ede12c07814e240bb02b7d02.gif",
            "19": "https://media1.tenor.com/images/49a21e182fcdfb3e96cc9d9421f8ee3f/tenor.gif?itemid=3532079"
        };

        
        const embed = new RichEmbed()
         if(msg.author.id == args.member.id){
            embed.setDescription(msg.author + ' cuddles.. themselves.. seems like someone needs some love. ')
            }else{
            embed.setDescription(msg.author + ' cuddles ' + args.member.user)
            }
            const randm = Math.random();
             if(randm < 1){
                embed.setImage(imgcuddle[Math.floor(randm * Object.keys(imgcuddle).length).toString()])
             }else{
                embed.setImage(imgcuddle[Math.floor(randm * Object.keys(imgcuddle).length-1).toString()])
             }
            embed.setColor(0x23ff12)
        return msg.embed(embed);
    }
	
};
