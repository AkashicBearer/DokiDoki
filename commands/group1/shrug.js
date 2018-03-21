const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class BakaCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'shrug',
            group: 'group1',
            memberName: 'shrug',
            description: 'Sends a Shrug',
});
}

async run(msg, args) {
        var imgwshrug = {
            "0": "https://media1.tenor.com/images/8e74b7dbfadfd639c35cfddf33252bbd/tenor.gif?itemid=5655161",
            "1":"http://gifimage.net/wp-content/uploads/2017/09/anime-shrug-gif.gif",
            "2": "http://gifimage.net/wp-content/uploads/2017/09/anime-shrug-gif-9.gif",
            "3": "https://media1.tenor.com/images/4d16b0553a999f24d8d016245d12ce6f/tenor.gif?itemid=5384200",
            "4": "https://78.media.tumblr.com/bd64c8776aaeb945d2e297ac5ca73563/tumblr_nc36kcZe1l1taqtpqo1_500.gif",
            "5": "https://1.bp.blogspot.com/-GySgfFQ6Xl8/WciIBt8bSyI/AAAAAAAA8K0/TtDUGoDLng4i_wxQ70VYYq7tOF9LfOETgCKgBGAs/s1600/Omake%2BGif%2BAnime%2B-%2BKakegurui%2B-%2BEpisode%2B12%2B%255BEND%255D%2B-%2BKirari%2BShrugs.gif",
            "6": "https://i.pinimg.com/originals/bb/5b/35/bb5b355ba22a387436c74625f9de205f.gif",
            "7": "https://img.fireden.net/a/image/1487/35/1487357313092.gif",
            "8": "https://steamusercontent-a.akamaihd.net/ugc/870744308638282986/1ED9693AE9300ED411B99C556C3D489EE43C8D72/",
            "9": "https://78.media.tumblr.com/0cf5b8479cc687456e29e23287910445/tumblr_p1edjjqx7m1wn2b96o1_500.gif",
            "10": "https://thumbs.gfycat.com/MedicalDazzlingAzurewingedmagpie-size_restricted.gif",
            "11": "https://media.tenor.com/images/6def41cfbfc28b3be8c20be9d6ef2dde/tenor.gif",
            "12": "https://4.bp.blogspot.com/-1CWvLCMDgFw/WoIwg2WjcfI/AAAAAAABFsQ/cT30ddVFSzc5oA3cBPAOFfrC0o0Ot77ywCKgBGAs/s1600/Omake%2BGif%2BAnime%2B-%2BFate%2BEXTRA%2BLast%2BEncore%2B-%2BEpisode%2B3%2B-%2BRin%2BShrugs.gif",
            "13": "https://i.warosu.org/data/cgl/img/0063/95/1352519163027.png",
            "14": "https://78.media.tumblr.com/b6a92069a4cf78c3ffb448afc2e60730/tumblr_nzb35cl4lT1slvqiko1_500.gif",
        };

        const embed = new RichEmbed()
            embed.setDescription(msg.author + 'is Shrugging')
            embed.setImage(imgshrug[Math.floor(Math.random() * Object.keys(imgshrug).length).toString()])
            embed.setColor(0x23ff12)
        return msg.embed(embed);
    }
};
