const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class LewdtCommand extends Command {
    constructor(client) {
      super(client, {
            name: 'lewd',
            aliases: [],
            group: 'emo',
            memberName: 'lewd',
            description: 'T-to Lewd...',
            args: [
                {
                    key: 'member',
                    label: 'user',
                    prompt: 'Who is being lewd?',
                    type: 'member',
                    default: ''
                }
            ]
        });
    }

	async run(message, args) {
        var imglewd = {
            "0": "https://media1.tenor.com/images/aae2940763e3af82279a705bd16d40ca/tenor.gif?itemid=8681419",
            "1": "https://i.imgur.com/75DgmLA.gif",
            "2": "https://media.giphy.com/media/13rb0irBhpZ076/giphy.gif",
            "3": "https://pa1.narvii.com/5739/19db0112ec582cf8c287ee87f3b9db90c6dc40dd_hq.gif",
            "4": "https://i.imgur.com/qknrvCO.gif?noredirect",
            "5": "https://media.giphy.com/media/12lLTU2L0CIufC/giphy.gif",
            "6": "http://i0.kym-cdn.com/photos/images/newsfeed/000/786/305/7db.gif",
            "7": "http://i.stack.imgur.com/MKMpFm.jpg",
        };
           const embed = new MessageEmbed()
                if(!args.member){
                    embed.setDescription(message.author.username + ' thinks this is Lewd!' )  
                }else{
                    embed.setDescription(message.author.username + ' thinks ' + args.member.user.username + ' is too lewd.')  
                }
                const randm = Math.random();
                embed.setImage(imglewd[Math.floor(randm * Object.keys(imglewd).length).toString()])
                embed.setColor(0x23ff12)
            message.channel.send(embed)
        }
	};
