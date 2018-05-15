const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class punchCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'punch',
            aliases: [],
            group: 'group1',
            memberName: 'punch',
            description: 'Who do you want to punch?',
          
			args: [
				{
				key: 'member',
				label: 'user',
				prompt: 'Who to punch?',
				type: 'member'
				}
			]
        });
    }
	async run(msg, args) {
        var imgpunch = {
            "0":"https://vignette.wikia.nocookie.net/toriko/images/e/e5/Zebra_hitting_Mounturtle_with_Beat_Punch.gif/revision/latest?cb=20130819000845",
            "1":"https://orig00.deviantart.net/9e80/f/2011/345/2/0/lucy_punch_by_zombiegirl01-d4isxbn.gif",
            "2":"https://media.giphy.com/media/12jXTP8GFniH4s/giphy.gif",
            "3":"http://gifimage.net/wp-content/uploads/2017/09/anime-punch-gif-9.gif",
            "4":"http://i0.kym-cdn.com/photos/images/original/000/641/427/824.gif",
            "5":"https://i.ppy.sh/c67a0f78a16e1965995d30d20cc856d4a42b9a0e/687474703a2f2f7075752e73682f6f30504d352f616430663834643431652e676966",
            "6":"https://media.giphy.com/media/iWAqMe8hBWKVq/giphy-downsized-large.gif",
            "7":"https://pa1.narvii.com/6397/a87128b051685c1f006819269a04db7270fe4d92_hq.gif",
            "8":"https://pa1.narvii.com/6084/7233693717bc4536a8403a06b194e9c2e32172eb_hq.gif",
            "9":"https://media.giphy.com/media/xbBYfXSCXzmwg/giphy.gif",
            "10":"https://media0.giphy.com/media/arbHBoiUWUgmc/giphy.gif",
            "11":"https://i.pinimg.com/originals/18/05/7a/18057a6d6034f38f1ba92d3975be174c.gif",
            "12":"http://i.imgur.com/jDKPv.gif",
            "13":"https://vignette.wikia.nocookie.net/powerlisting/images/7/73/Yang_Punch.gif/revision/latest?cb=20160314041700",
            "14":"https://vignette.wikia.nocookie.net/akamegakill/images/d/dd/Leone%27s_Punch.gif/revision/latest?cb=20160921042303",
            "15":"https://vignette.wikia.nocookie.net/deathbattlefanon/images/0/07/Lloyd_punch.gif/revision/latest?cb=20150928190848",
            "16":"https://i.pinimg.com/originals/c9/dd/97/c9dd97e104671f34e11edb05352a22c1.gif",
            "17":"https://3.bp.blogspot.com/-IvE6RqOlJYI/WcdL3KhiyLI/AAAAAAAA8JU/EtPkrIF-rKsIwCRYc3V7qY5lhaw_YI8PACKgBGAs/s1600/Omake%2BGif%2BAnime%2B-%2BBoku%2Bno%2BHero%2BAcademia%2B-%2BEpisode%2B37%2B-%2BAll%2BMight%2BGut%2BPunches%2BBakugo.gif",
            "18":"https://i.imgur.com/jm4FlYK.gif",
            "19":"https://i.kinja-img.com/gawker-media/image/upload/t_original/1476377642231790479.gif",
        };

        
        const embed = new RichEmbed()
         if(msg.author.id == args.member.id){
            embed.setDescription(msg.author + ' punches.. themselves.. are you alright? ')
            }else{
            embed.setDescription(msg.author + ' punches ' + args.member.user)
            }
            const randm = Math.random();

                embed.setImage(imgpunch[Math.floor(randm * Object.keys(imgpunch).length).toString()])

            embed.setColor(0x23ff12)
        return msg.embed(embed);
    }
	
};
