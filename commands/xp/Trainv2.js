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

module.exports = class TrainCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'train',
            aliases: ['workout', 'cultivate'],
            group: 'xp',
            memberName: 'train',
            description: 'Train to gain random attributes',
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

                if(!results[0]) {

                    const error = new RichEmbed()
                        .setTitle("Uou dont have an account!")
                        .setDescription("Please create your account with [prefix]register")
                        .setColor("RED")
                        .setFooter(`Training System v2 & Arcanium v0.0.1`)
                    message.channel.send(error)

                } else {

                    let att = JSON.parse(results[0].Stats)
                    
                    const XPWall = Math.round(((Math.floor(6.66) * (Math.sqrt(6) * att.Level * (att.Level+1))) / 3.05 ) * 4.25)

                    var attrbs = ["Str", "Acc","Int", "Vit", "Res"]

                    const newatt = attrbs[Math.floor(Math.random()*attrbs.length)]

                    att.Attributes[newatt]++
                    att.XP++

                    let cxp = Math.round(((Math.floor(6.66) * (Math.sqrt(6) * att.Level * (att.Level+1)) ) / 3.05 ) * 4.25)

                    const Train = new RichEmbed()
                        .setTitle("Finished Training!")
                        .setDescription(`You Decided to train using the dummy and got rewarded!`)
                        .addField("**Before**", `${att.Attributes[newatt] - 1} ${newatt} & ${att.XP - 1}/${cxp} XP`)
                        .addField("**After**", `${att.Attributes[newatt]} ${newatt} & ${att.XP}/${cxp} XP`, true)
                        .setColor("RANDOM")
                        .setFooter("Training System v2 & Arcanium v0.0.1")
                    message.channel.send(Train)

                    if(att.XP >= XPWall) {
                        let hp = att.HP.HP +25
                        let mhp = att.HP.MHP + 25
                        let chp = att.HP.CHP + 25
                        let mn = att.Mana.Mana + 10
                        let cmn = att.Mana.CMana + 10
                        let mmn = att.Mana.MMana + 10
                        let sp = att.SP +5
                        let cp = att.CP +1

                        att.Level++;
                        att.Points++;
                        att.HP.HP=hp;
                        att.HP.MHP=mhp;
                        att.HP.CHP=chp;
                        att.Mana.Mana=mn;
                        att.Mana.CMana=cmn;
                        att.Mana.MMana=mmn;
                        att.SP=sp;
                        att.CP=cp;
                        
                        const LvlUpEmbed = new RichEmbed()
                            .setTitle(`${message.author.username} has Leveled UP!`)
                            .setDescription(`Level: ${att.Level}\nPoints: ${att.Points}`)
                            .setColor("RANDOM")
                            .setThumbnail(message.author.avatarURL)
                            .setFooter("Training System v2 & Arcanium v0.0.1")
                        message.channel.send(LvlUpEmbed)

                        connection.query(`UPDATE Users SET Stats='${JSON.stringify(att)}' WHERE UserID ='${author.id}'`)
                    } else {
                        connection.query(`UPDATE Users SET Stats='${JSON.stringify(att)}' WHERE UserID ='${author.id}'`)
                    }
                }
            })

            connection.release()

        })
   }
}