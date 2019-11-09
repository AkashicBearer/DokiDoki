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

module.exports = class AddXPCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'addxp',
            aliases: ['axp'],
            group: 'ownerxp',
            memberName: 'addxp',
            description: 'Add XP to a user.',
            throttling: {
                usages: 1,
                duration: 15,
            }
        })
    }

    hasPermission(message) {
        return this.client.isOwner(message.author);
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
                    message.channel.send(error)

                } else {

                    const UData = JSON.parse(results[0].Stats)
                    let nxp = UData.XP + 100;
                    UData.XP=nxp

                    const XPWall = Math.round(((Math.floor(6.66) * (Math.sqrt(6) * UData.Level * (UData.Level+1))) / 3.05 ) * 4.25)
                    
                    if(UData.XP >= XPWall) {
                        let hp = UData.HP.HP +25
                        let mhp = UData.HP.MHP + 25
                        let chp = UData.HP.CHP + 25
                        let mn = UData.Mana.Mana + 10
                        let cmn = UData.Mana.CMana + 10
                        let mmn = UData.Mana.MMana + 10
                        let sp = UData.SP +5
                        let cp = UData.CP +1

                        UData.Level++;
                        UData.Points++;
                        UData.HP.HP=hp;
                        UData.HP.MHP=mhp;
                        UData.HP.CHP=chp;
                        UData.Mana.Mana=mn;
                        UData.Mana.CMana=cmn;
                        UData.Mana.MMana=mmn;
                        UData.SP=sp;
                        UData.CP=cp;
                        
                        const LvlUpEmbed = new RichEmbed()
                            .setTitle(`${message.author.username} has Leveled UP!`)
                            .setDescription(`Level: ${UData.Level}\nPoints: ${UData.Points}`)
                            .setColor("RANDOM")
                            .setThumbnail(message.author.avatarURL)
                        message.channel.send(LvlUpEmbed)
                    }

                    let jsonData = JSON.stringify(UData)

                    connection.query(`UPDATE Users SET Stats='${jsonData}' WHERE UserID ='${author.id}'`)
                
                    const AddXPEmbed = new RichEmbed()
                        .setTitle("XP Added")
                        .setDescription(`Old Xp: ${UData.XP - 100}\n New XP: ${UData.XP}`)
                        .setThumbnail(message.author.avatarURL)
                        .setColor("GREEN")
                    message.channel.send(AddXPEmbed)

                }
            })
            connection.release()
        })
    }
}