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

module.exports = class TrainCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'train',
            group: 'xp',
            memberName: 'train',
			description: 'Train to get some attributes',
            throttling: {
                usages: 1,
                duration: 15,
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
                        .setFooter(`Train v3 || Arcanium v0.0.3`)
                        .setColor("RED")
                    message.channel.send(noUser)

                } else {


                    const UData = JSON.parse(results[0].Stats)
                    const Att = UData.Character.Attributes
                    
                    let clvl = Math.round(((Math.floor(6.66) * (Math.sqrt(6) * UData.Level * (UData.Level+1)) ) / 3.05 ) * 4.45)
                    let olvl = Math.round(((Math.floor(6.66) * (Math.sqrt(6) * (UData.Level-1) * UData.Level) ) / 3.05 ) * 4.45)
                    let nlvl = clvl - olvl
                    let cxp = UData.XP - olvl
                    let cxpp = Math.round(( cxp / nlvl ) * 100)
                    let XP = UData.XP + 2

                    const  attrbs = ["Str", "Acc","Int", "Vit", "Res"]
                    const newatt = attrbs[Math.floor(Math.random()*attrbs.length)]
                    const roll = Math.random() * 100

                    
                    const nyan = function BonusAttrib(att) {

                        if(roll >= 80) {

                            return att = Att[newatt] +2

                        } else {
                            
                            return att =  Att[newatt] +1

                        }
                    }

                    Att[newatt]=nyan()
                    UData.XP=XP

                    const Train = new MessageEmbed()
                        .setTitle("Finished Training!")
                        .setDescription(`You went into a training machine and got stronger!`)
                        .addField("**Before**", `${Att[newatt] - 1} ${newatt} & ${UData.XP - 2}/${nlvl}  XP`)
                        .addField("**After**", `${Att[newatt]} ${newatt} & ${UData.XP}/${nlvl} (${cxpp} %) XP`, true)
                        .setColor("RANDOM")
                        .setFooter("Training System v2 & Arcanium v0.0.1")
                    message.channel.send(Train)

                    if(UData.XP >= clvl) {

                        const UD = UData.Character

                        let hp = UD.Health.MaxHP +25
                        let bhp = UD.Health.BattleHP
                        let mn = UD.Mana.MaxMana+5
                        let mmn = UD.Mana.BattleMana

                        UD.Health.MaxHP=hp
                        UD.Health.BattleHP=bhp
                        UD.Mana.MaxMana=mn
                        UD.Mana.BattleMana=mmn
                        UData.Level++
                        
                        const LvlUpEmbed = new MessageEmbed()
                            .setTitle(`${message.author.username} has Leveled UP!`)
                            .setDescription(`Level: ${UData.Level}`)
                            .setColor("RANDOM")
                            .setThumbnail(message.author.avatarURL({format: 'png'}))
                            .setFooter("Training System v3 & Arcanium v0.0.3")
                        message.channel.send(LvlUpEmbed)

                        connection.query(`UPDATE Users SET Stats='${JSON.stringify(UData)}' WHERE UserID ='${author.id}'`)

                    } else {

                        connection.query(`UPDATE Users SET Stats='${JSON.stringify(UData)}' WHERE UserID ='${author.id}'`)

                    }
                }
            })

            connection.release()

        })
    }
}