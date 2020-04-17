const { Command } = require('discord.js-commando')
const { MessageEmbed } = require('discord.js');

module.exports = class CoinFlipCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'coin',
            aliases: ['flip', 'coinflip', 'flipcoin','cf','coin'],
            group: 'fun',
            memberName: 'coin',
            description: 'Flips a coin',
            throttling: {
                usages: 2,
                duration: 15
            }
        });
    }
    async run(message, args) {
        const flips = Math.floor(Math.random() * 100) + 1;
        const embed = new MessageEmbed()
            embed.setAuthor(message.author.username, message.author.avatarURL)
            embed.setTitle("Flipping a coin.")

            if(flips<50){
                embed.setDescription("It landed on tails!")
                embed.setThumbnail("https://i.imgur.com/YgITIS6.png")
            }else{
                embed.setDescription("It landed on head!")
                embed.setThumbnail("https://i.imgur.com/PlEnG9I.png")
            }
            embed.setColor(0x212121)
        message.channel.send(embed)
    } 
};