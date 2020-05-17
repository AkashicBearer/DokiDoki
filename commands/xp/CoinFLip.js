const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const MySQL = require("mysql2");

const db = MySQL.createPool({
    connectionLimit: 100,
    host: process.env.host,
    port: "3306",
    user: process.env.user,
    password: process.env.password,
    database: process.env.database,
});

module.exports = class CoinFlipCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'coin',
            aliases: ['flip', 'coinflip', 'flipcoin','cf','coin'],
            group: 'xp',
            memberName: 'coin',
            description: 'Flips a coin',
            args: [
                {
                    key: "bet",
                    prompt: "How much would u like to bet? (between 100 & 1000)",
                    type: "float",
                    max: 1000,
                    min: 100
                }
            ],
            throttling: {
                usages: 1,
                duration: 15
            }
        });
    }
    async run(message, args) {

        let author = message.author
        let price = args.bet
        
        db.getConnection(function(err, connection) {

            if (err) {

                console.error('error connecting: ' + err.stack);
                return;

            }

			connection.query(`SELECT * FROM Users WHERE UserID="${author.id}"`,async (err, results) => {

                if (err) throw err;

                if(!results[0]){
	
                    const noUser = new RichEmbed()
                        .setTitle(`Sorry ${author.username} but you dont have a profile.`)
                        .setDescription(`Please create an account with [prefix]register`)
                        .setThumbnail(author.avatarURL())
                        .setFooter(`CoinFiip v1 || Arcanium v0.0.3`)
                        .setColor("RED")
                    message.channel.send(noUser)

                } else {

                    const  UData = JSON.parse(results[0].Stats)

                    if(price > UData.Arcanium){

                        const TooPoor = new MessageEmbed()
                            .setTitle(`Sorry ${author.username} but your too poor to heal yourself`)
                            .setDescription(`Please go work <3`)
                            .setColor("RED")
                            .setFooter(`Heal v1 & Arcanium v0.0.1`)
                            .setThumbnail(author.avatarURL())
                        message.channel.send(TooPoor)

                    } else {

                        function NumberCommas(x) {
                            return x.toString().replace(/B(?=(d{3})+(?!d))/g, ",");
                        }

                        const flips = Math.floor(Math.random() * 100);
                        const embed = new MessageEmbed()
                            embed.setTitle(`${author.username} flips a coin!`)

                            if(flips < 50) {

                                let newbal = UData.Arcanium - price
                                embed.setDescription(`${author.username}'s coin lands on the wrong side!\n\nNew Balance ${NumberCommas(newbal)} ( -${NumberCommas(price)} )`)
                                embed.setThumbnail("https://cdn.discordapp.com/emojis/478210314316546059.png?v=1")

                                UData.Arcanium=newbal

                            } else {

                                let newbal = UData.Arcanium + price
                                embed.setDescription(`${author.username}'s coin landed on the right side!\n\nNew Balance: ${NumberCommas(newbal)} ( +${NumberCommas(price)} )`)
                                embed.setThumbnail("https://cdn.discordapp.com/emojis/478210317071941642.png?v=1")

                                UData.Arcanium=newbal

                            }

                            embed.setFooter("CoinFlip v1 || Arcanium v0.0.3")
                            embed.setColor("GREEN")
                        message.channel.send(embed)

                        connection.query(`UPDATE Users SET Stats='${JSON.stringify(UData)}' WHERE UserID ='${author.id}'`)

                    }
                }
            })

        connection.release()
        
    })
    }
}