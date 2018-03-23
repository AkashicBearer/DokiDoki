const { Command } = require('discord.js-commando')
const { RichEmbed } = require('discord.js')

module.exports = class NameCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'nico',
            aliases: [],
            group: 'group1',
            memberName: 'nico',
            description: 'Nic Nico Nii!!',
        });
    }
    
async run(msg, args) {
        var imgnico = {
            "0": "https://media.giphy.com/media/ZLr299JYCUEHm/giphy.gif",
            "1":"https://i.imgur.com/lqSm7gk.gif",
            "2": "https://vignette.wikia.nocookie.net/animalcrossing/images/2/26/Nico_nico_nii.gif/revision/latest?cb=20150322204022",
            "3": "https://media1.giphy.com/media/ZMDjBCVgPuFMY/giphy.gif",
            "4": "http://gifimage.net/wp-content/uploads/2017/08/nico-nico-nii-gif-10-1.gif",
            "5": "http://gifimage.net/wp-content/uploads/2017/08/nico-nico-nii-gif-9-1.gif",
            "6": "http://gifimage.net/wp-content/uploads/2017/08/nico-nico-nii-gif-13-1.gif",
            "7": "https://vignette.wikia.nocookie.net/love-live/images/1/15/Nico_nii.gif/revision/latest?cb=20150925155932",
            "8": "https://i.imgur.com/LNtF8H3.gif",
            "9": "https://steamusercontent-a.akamaihd.net/ugc/858349365846751476/D7EED80E596B50AE45AE8C5DD7E247F5F6F7EDB2/",
            "10": "https://media.tenor.com/images/6c572997c88e9fe71d17736023ec6093/tenor.gif",
            "11": "https://secure.static.tumblr.com/3402571ec2f6dc0db5f86c0f6b768392/klj8vdc/oSAnahs37/tumblr_static_tumblr_static_crgdvk6mjjks0ck4ws08swos4_640.gif",
            "12": "https://media.giphy.com/media/3cpVCW1XkDuQ8/giphy.gif",
            "13": "https://78.media.tumblr.com/764193dac73325e5639dd694d87a8229/tumblr_oknms7tZQQ1s7ywhuo4_500.gif",
        };

        const embed = new RichEmbed()
            embed.setDescription(msg.author + 'Nico Nico Nii!')
            embed.setImage(imgnico[Math.floor(Math.random() * Object.keys(imgnico).length).toString()])
            embed.setColor(0x23ff12)
        return msg.embed(embed);
    }
};
