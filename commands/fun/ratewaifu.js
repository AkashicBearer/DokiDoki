 const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

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

    async run(message, args) {
        if(!args.user){
            message.channel.send("Please Mention a User or Put a Name");
        } else {	
            var rate = (Math.random()*100).toFixed(2);
            var rating = "";
                if(rate <= 30){
                    rating = `${args.user.username} is Shitty waifu material \n\nWaifu Rating: **${rate}%**`;
                }
                if(rate <= 50 && rate > 30){
                    rating = `${args.user.username} isnt very good Waifu Material \n\nWaifu Rating: **${rate}%**`;
                }
                if(rate > 50 && rate <75){
                    rating = `${args.user.username} is acceptable Waifu Material \n\nWaifu Rating: **${rate}%**l`;
                }
                if(rate >= 75 && rate < 90){
                    rating = `${args.user.username} is good Waifu Material \n\nWaifu Rating: **${rate}%**`;
                }
                if(rate >= 90 && rate < 95){
                    rating = `${args.user.username} is an Elite waifu Material!\n\nWaifu Rating: **${rate}%** `;
                }
                if(rate >= 95){
                    rating = `${args.user.username} is an Elite \/ Best of the Best of the Waifus!\n\nWaifu Rating: **${rate}%** `;
                }
                
            const embed = new MessageEmbed()
                embed.setAuthor(this.client.user.username, this.client.user.avatarURL)
                embed.setTitle(`Waifu Rating!`)
                embed.setDescription(rating)
                embed.setFooter(`Requested By ${message.author.username}`)
                embed.setColor('RANDOM')
            message.channel.send(embed);
        }
    }
};
