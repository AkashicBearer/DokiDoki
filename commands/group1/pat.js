const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class PatCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'pat',
            group: 'group1',
            memberName: 'pat',
            description: 'Who do you want to pat?>,<',
          
			args: [
				{
					key: 'member',
					label: 'user',
					prompt: 'Who to pat?',
					type: 'member'
				}
			]
        });
    }
	async run(msg, args) {
		const member = args.member;
        const user = member.user;
        var imgpat = {
            "0": "https://thumbs.gfycat.com/BlankGiftedBurro-max-1mb.gif",
            "1":"https://media1.tenor.com/images/1e92c03121c0bd6688d17eef8d275ea7/tenor.gif?itemid=9920853",
            "2": "https://media.tenor.com/images/f79a9ec48bde0e592e55447b17ecfbad/tenor.gif",
            "3": "https://uploads.disquscdn.com/images/995470f2fc3d0d20003d8a6fdab47a54cdade9111389dfdaa2f6751e15f0da51.gif",
            "4": "http://gifimage.net/wp-content/uploads/2017/09/anime-pat-gif-2.gif",
            "5": "http://gifimage.net/wp-content/uploads/2017/09/anime-pat-gif-4.gif",
            "6": "https://giffiles.alphacoders.com/248/2482.gif",
            "7": "https://data.whicdn.com/images/297125597/original.gif",
            "8": "https://i.imgur.com/TPqMPka.gif",
            "9": "http://gifimage.net/wp-content/uploads/2017/09/anime-pat-gif-8.gif",
            "10": "https://68.media.tumblr.com/584a3894e3483eed23d1afaf1f6f9347/tumblr_ok1oplyzSF1r0tp5lo1_500.gif",
            "11": "https://i.pinimg.com/originals/8b/42/6c/8b426c9bedc37054cd7e73925fa10da5.gif",
            "12": "https://78.media.tumblr.com/364e5ba769517c4295a218dcb81c0602/tumblr_mp0yr2VHQQ1rvdjx0o1_1280.gif",
            "13": "https://i.pinimg.com/originals/7b/b4/04/7bb404a3fd5376fa3b539407904a5291.gif",
            "14": "https://pa1.narvii.com/6279/f72997893c952a02e6ef1732ecf98e61ef57863a_hq.gif",
            "15": "https://media1.tenor.com/images/183ff4514cbe90609e3f286adaa3d0b4/tenor.gif?itemid=5518321",
            "16": "https://pa1.narvii.com/6401/e11bc915114f632da1d2cc70716b7cb86478c130_hq.gif",
            "17": "https://pa1.narvii.com/6401/9629e80dbe24f32a009ac51ee633a32dfbe1773f_hq.gif"
        };

        var imgselfpat = {
            "0": "https://pa1.narvii.com/6401/655b40f33530a90101682ee74c5fa12a673df749_hq.gif",
            "1": "https://i.redd.it/2ohfjanym13z.gif",
            "2": "https://i.imgur.com/65yP14R.gif",
            "3": "https://pa1.narvii.com/5790/0556780a813c3f6d93b0b178187bca7cec5b68dd_hq.gif",
            "4": "http://i.imgur.com/uacfoA9.gif"
        };
        const embed = new RichEmbed()
            .setAuthor(msg.author.username)
            .setDescription(msg.author.username + ' DokiDoki pats ' + args.member.user)
            .setImage(imgpat[Math.floor(Math.random() * Object.keys(imgpat).length).toString()])
            .setColor(0x23ff12)
        return msg.embed(embed);
    }
};
