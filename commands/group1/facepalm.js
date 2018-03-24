const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class FacepalmCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'facepalm',
            aliases: ['fp'],
            group: 'group1',
            memberName: 'facepalm',
            description: 'Facepalm....',
        });
    }
	async run(msg) {
        var imgfp = {
            "0": "https://media.giphy.com/media/USpSzYSiH3N1C/giphy.gif",
            "1":"https://im-01.gifer.com/YYBe.gif",
            "2": "http://gifimage.net/wp-content/uploads/2017/09/anime-facepalm-gif-9.gif",
            "3": "http://gifimage.net/wp-content/uploads/2017/11/facepalm-anime-gif-9.gif",
            "4": "https://orig00.deviantart.net/1bb1/f/2012/232/3/9/naruto_face_palm_gif_by_springsonata-d5bufes.gif",
            "5": "http://rs293.pbsrc.com/albums/mm76/RayRaySerza5/Avatars/FuuFacePalm.gif?w=280&h=210&fit=crop",
            "6": "https://media.giphy.com/media/11J2nVfNsQyHVm/giphy.gif",
            "7": "https://thumbs.gfycat.com/LividDeadlyFairyfly-max-1mb.gif",
            "8": "https://data.whicdn.com/images/222683178/original.gifhttps://media.giphy.com/media/3ohjUOpLsuAoBuryp2/giphy.gif",
            "9": "https://orig00.deviantart.net/42e8/f/2011/225/2/4/sasuke_facepalm_by_ilovenaruto567-d46h0rf.gif",
            "10": "https://cdn74.picsart.com/190954990001202.gif?r240x240",
            "11": "https://i.pinimg.com/originals/b8/32/89/b832894fd4e950c91e344859a4f9b561.gif",
            "12": "https://i.pinimg.com/originals/47/c4/43/47c4431631083744b7cecb32d359bfe1.gif",
            "13": "https://im-01.gifer.com/KoR7.gif",
            "14": "https://media1.tenor.com/images/4393544537d2096c6970d6ed8a2c9c54/tenor.gif?itemid=7392519",
            "15": "https://linustechtips.com/main/applications/core/interface/imageproxy/imageproxy.php?img=http://i.imgur.com/iNo9Bob.gif&key=8b93b2822e58e7b71791bd16f756bbe2c8bc907d3a5cdf3c570809781a289800",
            "16": "https://78.media.tumblr.com/a90b90cdf720d3f39b5e3320f46f2e46/tumblr_n6ysczOK0p1qzmfgzo1_r1_500.gif",
            "17": "https://orig00.deviantart.net/125a/f/2014/301/3/5/49_by_prettykitty_13-d84gtw2.gif",
            };

        const embed = new RichEmbed()
         	embed.setDescription(msg.author + ' thinks ' + args.member.user + ' is a baka.')
          embed.setImage(imgfp[Math.floor(Math.random() * Object.keys(imgfp).length).toString()])
          embed.setColor(0x23ff12)
        return msg.embed(embed);
    }
	
};
