 const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class RateWaifuCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'ratewaifu',
            aliases: ['rw'],
            group: 'fun',
            memberName: 'ratewaifu',
            description: "Rates your waifu",
            examples: ['<ratewaifu @user'],
			args: [
				{
					key: 'user',
					prompt: 'Who do you want to rate?',
					type: 'string',
                    			default:''
				}
			]
        });
    }

async run(msg, args) {
  if(!args.user){
	  msg.channel.send("Please Mention a User or Put a Name");
  } else {	
    var rate = (Math.random()*100).toFixed(2);
    var rating = "";
        if(rate <= 30){
            rating = `${args.user} is Shitty waifu material \n\nWaifu Rating: **${rate}%**`;
        }
        if(rate <= 50 && rate > 30){
            rating = `${args.user} isnt very good Waifu Material \n\nWaifu Rating: **${rate}%**`;
        }
        if(rate > 50 && rate <75){
            rating = `${args.user} is acceptable Waifu Material \n\nWaifu Rating: **${rate}%**l`;
        }
        if(rate >= 75 && rate < 90){
            rating = `${args.user} is good Waifu Material \n\nWaifu Rating: **${rate}%**`;
        }
        if(rate >= 90 && rate < 95){
            rating = `${args.user} is an Elite waifu Material!\n\nWaifu Rating: **${rate}%** `;
        }
        if(rate >= 95){
            rating = `${args.user} is an Elite \/ Best of the Best of the Waifus!\n\nWaifu Rating: **${rate}%** `;
        }
    const embed = new RichEmbed()
        embed.setAuthor(this.client.user.username, this.client.user.avatarURL)
        embed.setTitle(`Waifu Rating!`)
        embed.setDescription(rating)
        embed.setFooter(`Requested By ${msg.author.username}`)
        embed.setColor('RANDOM')
    msg.channel.send(embed);
  }
}
};
