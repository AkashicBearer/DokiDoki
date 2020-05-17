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

module.exports = class HealCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'heal',
            aliases: ['h'],
            group: 'xp',
            memberName: 'heal/*',
            description: 'Heal Yourself ',
            throttling: {
                usages: 1,
                duration: 15,
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

            if (!results[0]) {

                const noUser = new MessageEmbed()
                    .setTitle(`Sorry ${author.username} but you dont have a profile.`)
                    .setDescription(`Please create an account with [prefix]register`)
                    .setFooter(`Heal v1 & Arcanium v0.0.1`)
                    .setThumbnail(author.avatarURL())
                message.channel.send(noUser)

            } else {
                let UD = JSON.parse(results[0].Stats)
                let THP = UD.Character.Health.MaxHealth / 5
                let Price = Math.round(THP * 0.75)
                const newArc = UD.Arcanium - Price

                if(UD.Arcanium >= Price) {

                    if(UD.Character.Health.BattleHealth == UD.Character.Health.MaxHealth) {

                        const FullHP = new MessageEmbed()
                            .setTitle(`Sorry ${author.username} but your health is already full`)
                            .setColor("RED")
                            .setFooter(`Heal v1 & Arcanium v0.0.3`)
                        message.channel.send(FullHP)

                    } else {

                        UD.Character.Health.BattleHealth=UD.Character.Health.MaxHealth
                        UD.Arcanium=newArc

                        connection.query(`UPDATE Users SET Stats='${JSON.stringify(UD)}' WHERE UserID ='${author.id}'`)

                        const TooPoor = new MessageEmbed()
                            .setTitle(`${author.username} has been healed!`)
                            .setDescription(`Healing cost: ${Price}\nYour now have ${UD.Arcanium} Arcanium left!`)
                            .setColor("RANDOM")
                            .setFooter(`Heal v1 & Arcanium v0.0.1`)
                            .setThumbnail(author.avatarURL())
                        message.channel.send(TooPoor)

                    }

                } else {

                    const TooPoor = new MessageEmbed()
                        .setTitle(`Sorry ${author.username} but your too poor to heal yourself`)
                        .setDescription(`Please go work <3`)
                        .setColor("RED")
                        .setFooter(`Heal v1 & Arcanium v0.0.1`)
                        .setThumbnail(author.avatarURL())
                    message.channel.send(TooPoor)

                }

            }

           })

            connection.release()

        })

    }
}
