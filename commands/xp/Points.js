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

module.exports = class PointsCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'points',
            aliases: ['cp', 'sp'],
            group: 'xp',
            memberName: 'points',
            description: 'View your Points',
            throttling: {
                usages: 1,
                duration: 10,
            }
        })
    }

    async run(message, args) {
        let author = message.author

        db.getConnection(function (err, connection) {

            if (err) {
                console.error('error connecting: ' + err.stack);
                return;
            }

            connection.query(`SELECT * FROM Users WHERE UserID="${author.id}"`, async (err, results) => {

                if (err) throw err;

                if(!results[0]) {

                    const error = new RichEmbed()
                        .setTitle("Uou dont have an account!")
                        .setDescription("Please create your account with [prefix]register")
                        .setColor("RED")
                        .setFooter("Points Embed v1 & Arcanium v0.0.1")
                    message.channel.send(error)

                } else {

                    let UData = JSON.parse(results[0].Stats)

                    const PointsEmbed = new RichEmbed()
                        .setTitle(`${author.username} Current Points`)
                        .addField("Points", UData.Points, true)
                        .addField("Class Points", UData.CP, true)
                        .addField("Skill Points", UData.SP, true)
                        .setColor("RANDOM")
                        .setFooter("Points Embed v1 & Arcanium v0.0.1")
                    message.channel.send(PointsEmbed)
                }
            })
        connection.release()
        })
    }
}