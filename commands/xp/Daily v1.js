const { Command } = require('discord.js-commando');
const { createCanvas, loadImage, Canvas } = require('canvas');
const { MessageEmbed, Discord, MessageAttachment } = require('discord.js');
const MySQL = require("mysql2");

const db = MySQL.createPool({
    connectionLimit: 100,
    host: process.env.host,
    port: "3306",
    user: process.env.user,
    password: process.env.password,
    database: process.env.database,
});

module.exports = class DailyCOmmand extends Command {
    constructor(client) {
        super(client, {
            name: 'daily',
            group: 'xp',
            memberName: 'daily',
			description: 'Claim your daily',
            throttling: {
                usages: 1,
                duration: 86400,
            }
        })    
	}
	
	async run(message) {
        let author = message.author
        
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
                        .setFooter(`Daily v1 || Arcanium v0.0.3`)
                        .setColor("RED")
                    message.channel.send(noUser)

                } else {

                    const UData = JSON.parse(results[0].Stats)
                    const daily = Math.round(50 + (Math.random() * 10)) + (10 * UData.Character.Attributes.ArcmB)
                    const Total = UData.Arcanium + daily

                    UData.Arcanium=Total

                    const Daily = new MessageEmbed()
                        .setTitle(`Daily Claimed!`)
                        .setDescription(`Successfully claimed ${daily} Arcanium!\n\n**New Total**: ${Total}`)
                        .setThumbnail(message.author.avatarURL())
                        .setFooter(`Daily v1 || Arcanium v0.0.3`)
                        .setColor("GREEN")
                    message.channel.send(Daily)

                    connection.query(`UPDATE Users SET Stats='${JSON.stringify(UData)}' WHERE UserID ='${author.id}'`)

                }
            })

        connection.release()

        })
    }
}