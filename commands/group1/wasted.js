const { Command } = require('discord.js-commando')
const { RichEmbed } = require('discord.js')

module.exports = class WastedCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'wasted',
            group: 'group1',
            memberName: 'wasted',
            description: 'You commit Suicide...',
			args: [
				{
					key: 'member',
					label: 'user',
					prompt: 'Who Commited Suicide?',
					type: 'member'
				}
			]
        });
    }
	
async run(msg, args) {
        var imgwasted = {
            "0": "https://media1.tenor.com/images/ff2dcd44504000e320c21ae5682b5369/tenor.gif?itemid=5749160",
            "1":"https://media.giphy.com/media/VwrUtzmbvo1he/giphy.gif",
            "2": "https://pa1.narvii.com/5748/8c6805c5fb2172cfdc445ef193a4527f4492012a_hq.gif",
            "3": "https://media1.tenor.com/images/3918ab9203b15b16cfc872f5540bfedc/tenor.gif?itemid=5958526",
            "4": "https://media.giphy.com/media/14igRO8Okm42rK/giphy.gif",
            "5": "https://media1.tenor.com/images/87cf4e6c9d7d523d736f9e8fddc4e951/tenor.gif?itemid=5502476",
            "6": "http://gifimage.net/wp-content/uploads/2017/06/wasted-gif-3.gif",
            "7": "https://pa1.narvii.com/5772/7cdffcb220d4c4fe51f3a3ab7324729f83be59c0_hq.gif",
            "8": "https://78.media.tumblr.com/9c74ef34ecda129d9e5e1c3b9bbf75d1/tumblr_inline_n9aipgiMib1qcjo32.gif",
            "9": "http://pa1.narvii.com/6146/39eaa6f028cd7030e144185ecc3c5be11efd49ea_00.gif",
        };

        const embed = new RichEmbed()
         if(msg.author.id == args.member.id){
         	embed.setDescription(msg.author + 'Killed Themselves')
         }else{
         	embed.setDescription(msg.author + ' Killed ' + args.member.user)
         }
            embed.setImage(imgwasted[Math.floor(Math.random() * Object.keys(imgwasted).length).toString()])
            embed.setColor(0x23ff12)
        return msg.embed(embed);
    }
};
