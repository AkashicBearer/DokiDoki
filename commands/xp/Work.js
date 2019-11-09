const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');
const mysql = require("mysql");
const db = mysql.createPool({
    connectionLimit: 100,
    host: process.env.host,
    port: "3306",
    user: process.env.user,
    password: process.env.password,
    database: process.env.database,
});

module.exports = class WorkCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'work',
            group: 'xp',
            memberName: 'work',
            description: 'Work and earn some money.',
            throttling: {
                usages: 1,
                duration: 30,
            }
        })
    }

    async run(message, args) {

        let author = message.author

        db.getConnection(function (err, connection) {

            connection.query(`SELECT * FROM Users WHERE UserID="${author.id}"`, async (err, results) => {

                if(!results[0]) {

                    const error = new RichEmbed()
                        .setTitle("Uou dont have an account!")
                        .setDescription("Please create your account with [prefix]register")
                        .setColor("RED")
                        .setFooter(`Work v1 & Arcanium v0.0.1`)
                    message.channel.send(error)

                } else {

                    let UD = JSON.parse(results[0].Stats)
                    let bonus = (UD.Title.Bonus.ArcmB + UD.Weapon.WeaponBonus.ArcmB + UD.Job.Bonus.ArcmB + UD.Attributes.ArcmB) / 100
                    let rew = (UD.Level / 3) + bonus + 1
                    let nbal = Math.round(UD.Arcanium + rew)

                    UD.Arcanium=nbal

                    const WorkEmbed = new RichEmbed()
                        .setTitle(`${author.username} Finished Working!`)
                        .setDescription(`They Earned ${Math.round(rew)} Arcanium!\nCurent Balance is: ${nbal} Arcanium`)
                        .setColor("GREEN")
                        .setThumbnail(author.avatarURL)
                        .setFooter(`Work v1 & Arcanium v0.0.1`)
                    message.channel.send(WorkEmbed)

                    connection.query(`UPDATE Users SET Stats='${JSON.stringify(UD)}' WHERE UserID ='${author.id}'`)
                }
            })
        connection.release()
        })
    }
}