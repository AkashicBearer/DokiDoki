const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class scaryCommand extends Command {
    constructor(client) {
      super(client, {
            name: 'scary',
            aliases: [],
            group: 'group1',
            memberName: 'scary',
            description: 'Sends a scaryface'
        });
    }

	async run(msg, args) {
        var imgscary = {
            "0":"https://media1.giphy.com/media/EZsslvmhSontu/giphy.gif",
            "1":"https://78.media.tumblr.com/39fbdd36bfe995594953b0d9e7ba5d5f/tumblr_mw1su49HH91rmxbouo1_500.gif",
            "2":"https://media1.tenor.com/images/516232d7f81e6e27074cac2cc39f19f4/tenor.gif?itemid=9361947",
            "3":"https://media1.tenor.com/images/867a9c1d6f466e7526574b891de681d7/tenor.gif?itemid=5310363",
            "4":"https://media3.giphy.com/media/4ozoTBgdesw2A/giphy.gif",
            "5":"https://media1.tenor.com/images/db1136b19969ca0809daffc3d93fc848/tenor.gif?itemid=9983954",
            "6":"https://media2.giphy.com/media/fXoM4gLeNamZy/giphy.gif",
            "7":"https://78.media.tumblr.com/38885044ea81661c6f42a8d66bf85233/tumblr_o7jbrk4pVq1v1u6k0o1_500.gif",
            "8":"http://pa1.narvii.com/5688/aa491b7769ee39289090aefff8c7f719a0e3783e_hq.gif",
            "9":"https://m.popkey.co/2d2bc7/az486.gif",
            "10":"https://pa1.narvii.com/5883/383ede164c385f57a713c118a4daa4f4914f13a4_hq.gif",
            "11":"https://i.gifer.com/8yY6.gif",
            "12":"https://vignette.wikia.nocookie.net/f379b8b8-c01a-4bff-af00-31ff30ace2bd/scale-to-width-down/627",
            "13":"https://data.whicdn.com/images/73214553/original.gif",
            "14":"https://cdn55.picsart.com/175386449000202.gif?r1024x1024",
            "15":"http://fanaru.com/random/image/153435-random-anime-girl-scary-gif.gif",
            "16":"https://78.media.tumblr.com/885c56e5531493b845d841fbda602776/tumblr_nmxcb901nh1ta52dfo1_400.gif",
            "17":"https://i.gifer.com/7A5P.gif",
            "18":"https://78.media.tumblr.com/53860ec1eefa8ae8f961eac17717ad71/tumblr_mra674WiiX1srn4ooo1_500.gif",
            "19":"https://i.gifer.com/5xg9.gif",
        };
           const embed = new RichEmbed()
                embed.setDescription(msg.author + ' is scary' )  
                const randm = Math.random();

                    embed.setImage(imgscary[Math.floor(randm * Object.keys(imgscary).length).toString()])

                embed.setColor(0x23ff12)
            return msg.embed(embed);
        }
	};
