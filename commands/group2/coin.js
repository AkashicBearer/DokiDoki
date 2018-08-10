const { Command } = require('discord.js-commando')
const { RichEmbed } = require('discord.js');

module.exports = class CoinFlipCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'coin',
            aliases: ['flip', 'coinflip', 'flipcoin'],
            group: 'fun',
            memberName: 'coin',
            description: 'Flips a coin',
            throttling: {
                usages: 2,
                duration: 1
            }
        });
    }
    async run(msg, args) {
        const flips = Math.floor(Math.random() * 100) + 1;
        const embed = new RichEmbed()
            embed.setAuthor(msg.author.username, msg.author.avatarURL)
            embed.setTitle("Flipping a coin.")

            if(flips<50){
                embed.setDescription("It landed on tails!")
                embed.setThumbnail("https://i.imgur.com/YgITIS6.png")
            }else{
                embed.setDescription("It landed on head!")
                embed.setThumbnail("https://i.imgur.com/PlEnG9I.png")
            }
            embed.setColor(0x212121)
        return msg.embed(embed);
    } 
};