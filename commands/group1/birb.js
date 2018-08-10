const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class birbCommand extends Command {
    constructor(client) {
      super(client, {
            name: 'birb',
            aliases: [],
            group: 'emo',
            memberName: 'birb',
            description: 'Sends a birb'
        });
    }

	async run(msg, args) {
        var imgbirb = {
            "0":"https://data.whicdn.com/images/259242568/original.gif",
            "1":"https://media.giphy.com/media/bWAAYrgpzGIBq/source.gif",
            "2":"http://gifimage.net/wp-content/uploads/2017/09/anime-bird-gif-3.gif",
            "3":"https://media.giphy.com/media/3DXycZFSizyec/giphy.gif",
            "4":"https://media.tenor.com/images/68f6414602a975ca4b7ce7255811b873/tenor.gif",
            "5":"http://i0.kym-cdn.com/photos/images/original/001/004/641/c72.gif",
            "6":"http://gifimage.net/wp-content/uploads/2017/09/anime-bird-gif-11.gif",
            "7":"https://thumbs.gfycat.com/MetallicTautAlaskajingle-max-1mb.gif",
            "8":"http://gifimage.net/wp-content/uploads/2017/09/anime-bird-gif-14.gif",
            "9":"http://gifimage.net/wp-content/uploads/2017/09/anime-bird-gif-1.gif",
            "10":"https://i.imgur.com/jFECMfu.gif",
            "11":"https://vignette.wikia.nocookie.net/arslansenki/images/5/5e/Tumblr_nmcb7pZ8Wg1s94573o1_500.gif/revision/latest?cb=20150810140515",
            "12":"https://media.giphy.com/media/jFZlMxYD9vqCI/giphy.gif",
            "13":"https://media.giphy.com/media/mMxnpD7qP7L1e/giphy.gif",
            "14":"https://78.media.tumblr.com/tumblr_m463q671sI1r3c09go2_r1_500.gif",
            "15":"http://pa1.narvii.com/6518/f2252902615098caa1a2b1a018e4230c56c909b6_hq.gif",
            "16":"https://drunkenanimeblog.files.wordpress.com/2017/07/gif.gif?w=640&h=360&crop=1",
            "17":"https://78.media.tumblr.com/edd1c42a0217566475f0cb09df05f9fb/tumblr_n9aa1fUKxM1shdhdjo1_500.gif",
            "18":"https://media1.tenor.com/images/be3bf14140dcf76fee79c4c6c0cec0c6/tenor.gif?itemid=5634791",
            "19":"https://78.media.tumblr.com/bdab04ae1d05f042943d54d4c8eacf16/tumblr_nb2pwhqXL51tg3a8ao1_500.gif",
            "20":"https://78.media.tumblr.com/cc8760a8ebccc3b893fed863bc7296ae/tumblr_n8xdmwCDVX1t1hiooo1_r1_500.gif"
        };
           const embed = new RichEmbed()
                embed.setDescription('Have a birb!' )  
                const randm = Math.random();

                    embed.setImage(imgbirb[Math.floor(randm * Object.keys(imgbirb).length).toString()])

                embed.setColor(0x23ff12)
            return msg.embed(embed);
        }
	};
