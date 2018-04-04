const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class PokeCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'poke',
            aliases: [],
            group: 'group1',
            memberName: 'poke',
            description: 'Who do you want to poke?',
          
			args: [
				{
					key: 'member',
					label: 'user',
					prompt: 'Who to poke?',
					type: 'member'
				}
			]
        });
    }
	async run(msg, args) {
        var imgpoke = {
            "0": "https://im-01.gifer.com/OWba.gif",
            "1":"http://gifimage.net/wp-content/uploads/2017/09/anime-poke-gif-4.gif",
            "2": "https://media.giphy.com/media/aZSMD7CpgU4Za/giphy.gif",
            "3": "http://gifimage.net/wp-content/uploads/2017/09/anime-poke-gif-12.gif",
            "4": "http://gifimage.net/wp-content/uploads/2017/09/anime-poke-gif-3.gif",
            "5": "https://media1.tenor.com/images/3b2bfd09965bd77f2a8cb9ba59cedbe4/tenor.gif?itemid=5607667",
            "6": "http://gifimage.net/wp-content/uploads/2017/09/anime-poke-gif-6.gif",
            "7": "http://gifimage.net/wp-content/uploads/2017/09/anime-poke-gif-11.gif",
            "8": "https://i.imgur.com/Zi4ahyj.gif",
            "9": "https://pa1.narvii.com/5679/d39dc10bcad2fd42a130de685d192c166d55f69a_hq.gif",
            "10": "https://lh3.googleusercontent.com/-ji2b4KWNveI/V8Vq5NAsQuI/AAAAAAAAAPM/sdA285ootm0YbNaTj93T8b6BLLBV4JZhACJoC/w500-h339/tumblr_mibugnXqaz1rx1dfqo1_500.gif",
            "11": "https://1.bp.blogspot.com/-0cu-3g3bio4/Vx_hCIRUcYI/AAAAAAAAcE8/mcV22O8uolst5z3Rd-reMOPhxoLLMeXaACKgB/s1600/Omake%2BGif%2BAnime%2B-%2BKuma%2BMiko%2B-%2BEpisode%2B4%2B-%2BMachi%2BCheek%2BPoke.gif",
            "12": "https://i.pinimg.com/originals/5a/d9/81/5ad981608daa351a3471ef75a71b285f.jpg",
            "13": "https://78.media.tumblr.com/4a6fc26ea70803ca1b2e5eb824aa4a48/tumblr_nkv7kaN4hr1sf82gro1_500.gif",
            "14": "https://i.pinimg.com/originals/2d/64/62/2d6462987a325ad10424c95f40a28483.gif",
            "15": "https://i.pinimg.com/originals/26/65/74/266574c657accd6c7e8452a7b9d9dc47.gif",
            "16": "https://78.media.tumblr.com/tumblr_mc7ixcNOf91r3uq66o2_500.gif",
            "17": "http://i.imgur.com/ERBet00.gif",
            "18": "https://media1.tenor.com/images/ce3593d0d5052339cdae55ed0d75e7aa/tenor.gif?itemid=9966199",
            "19": "http://i0.kym-cdn.com/photos/images/original/000/629/628/e85.gif"
        };

        
        const embed = new RichEmbed()
         if(msg.author.id == args.member.id){
            embed.setDescription(msg.author + ' pokes.. themselves.. are you feeling numb? ')
            }else{
            embed.setDescription(msg.author + ' pokes ' + args.member.user)
            }
            const randm = Math.random();

                embed.setImage(imgpoke[Math.floor(randm * Object.keys(imgpoke).length).toString()])

            embed.setColor(0x23ff12)
        return msg.embed(embed);
    }
};
