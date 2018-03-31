const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class winkCommand extends Command {
    constructor(client) {
      super(client, {
            name: 'wink',
            aliases: [],
            group: 'group1',
            memberName: 'wink',
            description: 'You wink',
        
            args: [
                {
                    key: 'member',
                    label: 'user',
                    prompt: 'Who do you want to wink at?',
                    type: 'member',
                    default: ''
                }
            ]
        });
    }

	async run(msg, args) {
        var imgwink = {
           "0": "https://media1.tenor.com/images/0b06480cdfed314322a8abfe3d5e8004/tenor.gif?itemid=4766224",
            "1":"https://media.giphy.com/media/12NOkUXx8ffFBK/giphy.gif",
            "2": "https://i.imgur.com/3uyztWk.gif",
            "3": "https://78.media.tumblr.com/187ab8868a1a83e0986feef269f2b676/tumblr_p3iz6x6ZDg1wxklzdo1_500.gif",
            "4": "https://media1.tenor.com/images/922399d5cae85e03fccefcdd0f7bef59/tenor.gif?itemid=5316207",
            "5": "https://78.media.tumblr.com/d7df6933176cba18303b9cf61aecdda5/tumblr_o79rhoHBX91v7fbr8o1_500.gif",
            "6": "https://media.giphy.com/media/ErZ8hv5eO92JW/giphy.gif",
            "7": "http://img.zbjuran.com/uploads/allimg/170622/2-1F622144UaA.gif",
            "8": "https://media.giphy.com/media/ZFdQIq9Cu1KNi/giphy.gif",
            "9": "https://media1.tenor.com/images/1a1032f8d931626a1a2c98df904f0b84/tenor.gif?itemid=5373683",
            "10": "https://78.media.tumblr.com/03656474b86f2fe37bc0e51e2edd7d1b/tumblr_odo0rm4Y7A1ufw8o4o1_500.gif",
            "11": "https://media.giphy.com/media/CeuSr42eaLljG/giphy.gif",
            "12": "https://m.popkey.co/c8e2ec/bXEW1.gif",
            "13": "https://i.pinimg.com/originals/1c/f7/50/1cf750823a4bf89d86ac7669e0cadbf6.gif",
            "14": "https://i.pinimg.com/originals/76/67/f8/7667f8c98347b96c37cc835f6f8e9e83.gif",
            "15": "https://i.imgur.com/ijqKI6a.gif",
            "16": "https://media.giphy.com/media/WiT0AOuM0D4f6/giphy.gif",
            "17": "https://media.giphy.com/media/a8CSr8I7of9E4/giphy.gif",
            "18": "https://media1.tenor.com/images/aa90b55c867c2e5f13f9d413aba5b6d9/tenor.gif?itemid=5205821",
            "19": "https://78.media.tumblr.com/96a79c81f00673524125f0d2893ab99f/tumblr_o00xa4dELl1v312ebo1_500.gif",
        };
           const embed = new RichEmbed()
             if(msg.author.id == args.member.id || !args.member){
                embed.setDescription(msg.author + ' is winking!')
             }else{
                embed.setDescription(msg.author + ' is winking at ' + args.member + '!')  
             }
                const randm = Math.random();

                    embed.setImage(imgwink[Math.floor(randm * Object.keys(imgwink).length).toString()])

                embed.setColor(0x23ff12)
            return msg.embed(embed);
        }
	};
