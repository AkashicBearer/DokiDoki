const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class BegCommand extends Command {
    constructor(client) {
      super(client, {
            name: 'beg',
            aliases: [],
            group: 'emo',
            memberName: 'beg',
            description: 'Beg someone for something.',
            args: [
                {
                    key: 'member',
                    prompt: 'Who to beg?',
                    type: 'member',
                    default: ''
                }
            ]
        });
    }

	async run(message, args) {
        var imgbeg = {
            "0": "https://pa1.narvii.com/6150/68b31f28d8f44d1cfa766e2a096a4cf61e974409_hq.gif",
            "1": "https://media1.tenor.com/images/bc62805926570acc77df7ee6fd36cf6e/tenor.gif?itemid=4555931",
            "2": "https://vignette.wikia.nocookie.net/degrassi/images/a/ae/Sawako_begging.gif/revision/latest?cb=20140715042509",
            "3": "http://api.ning.com/files/Cr*mNN-mhgZbbNHPkJCFysRXX1jyh4R3e308eigaeo4ip-LG5shACpbK3fF7q6wixruCe1b4FEH5en5WT*X87IuMl4U6uHPz/tumblr_m4k6wrP54I1qfa797o1_500.gif",
            "4": "https://media1.tenor.com/images/1617f00803f31ba58fa41d5d47fd1e5d/tenor.gif?itemid=8329872",
            "5": "https://pa1.narvii.com/6431/1a1f1a47a3e56c6a79841c3c7af6e3d5d19127ee_hq.gif",
            "6": "https://media1.tenor.com/images/8491cc628e22a7a13054b1647fb246bd/tenor.gif?itemid=9167260",
            "7": "https://lh3.googleusercontent.com/-GwGqUcUhbgw/WZHlUivlr3I/AAAAAAAAAec/k9v5GSdEMXI5yG3f42_pR2eNpJAqlJB7gCJoC/w495-h297/unnamed.gif",
            "8": "https://media.giphy.com/media/Rl6TvAg4JAWAM/giphy.gif",
            "9": "https://media1.tenor.com/images/d038682f7686d11e47bade6908bf1549/tenor.gif?itemid=4882067",
            "10": "https://media0.giphy.com/media/xT0xeoJwV7q5iVxAsw/200.gif",
            "11": "https://lh6.googleusercontent.com/-5CTIaNx8jVs/UsYa7_EEa1I/AAAAAAAA_zk/PX9OGBu249c/w500-h281/rinlol.gif",
            "12": "https://pa1.narvii.com/6452/b4df84e5fcd162874220204fc2d3f3d0ce1dce31_hq.gif",
            "13": "https://thumbs.gfycat.com/OptimalDeadlyHyena-size_restricted.gif",
            "14": "http://gifimage.net/wp-content/uploads/2017/09/anime-sparkle-gif-6.gif",
            "15": "https://fujinsei.files.wordpress.com/2016/12/anime-girl-begging-for-money.gif?w=400&h=225",
            "16": "https://thumbs.gfycat.com/PoliticalSparklingChameleon-max-1mb.gif",
            "17": "https://78.media.tumblr.com/tumblr_m2bxd48s7W1r5msn4.gif",
            "18": "https://media.tenor.com/images/5f19292930a5ebaf21c44d62e149ec89/tenor.gif",
            "19": "http://image.blingee.com/images14/content/output/2007/9/8/167045857_2c75a9a6.gif",
        };
           const embed = new MessageEmbed()

             if(message.author.id == args.member.id || !args.member){

                embed.setDescription(message.author.username + ' is begging!')

             }else{

                embed.setDescription(message.author.username + ' is begging ' + args.member.user.username + '!')  
                
             }
                const randm = Math.random();

                    embed.setImage(imgbeg[Math.floor(randm * Object.keys(imgbeg).length).toString()])

                embed.setColor(0x23ff12)
            message.channel.send(embed)
        }
	};
