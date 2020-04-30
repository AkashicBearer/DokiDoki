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
})

module.exports = class AdventureCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'adventure',
            aliases: ['adv', 'explore', 'a',],
            group: 'xp',
            memberName: 'adventure',
			description: 'Go on an Adventure and kill dangerous enemies!',
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

			connection.query(`SELECT * FROM Users WHERE UserID="${author.id}"`, (err, results) => {

                if (err) throw err;

                if(!results[0]){
	
                    const noUser = new RichEmbed()
                        .setTitle(`Sorry ${author.username} but you dont have a profile.`)
                        .setDescription(`Please create an account with [prefix]register`)
                        .setThumbnail(author.avatarURL)
                        .setFooter(`Adventure System v1 & Arcanium v0.0.1`)
                        .setColor("RED")
                    message.channel.send(noUser)

                } else {

                    const UD = JSON.parse(results[0].Stats)

                    let BHP = ((UD.Attributes.Vit + UD.Title.Bonus.Vit + UD.Weapon.WeaponBonus.Vit + UD.Job.Bonus.Vit) / 10) + UD.HP.HP ;
                    let BDMG = ((UD.Attributes.Str + UD.Title.Bonus.Str + UD.Weapon.WeaponBonus.Str + UD.Job.Bonus.Str) / 75 ) + UD.Weapon.WeaponDmg
                    let BINT = (UD.Attributes.Int + UD.Title.Bonus.Int + UD.Weapon.WeaponBonus.Int + UD.Job.Bonus.Int) / 75
                    let BXP = (UD.Attributes.XPB + UD.Title.Bonus.XPB + UD.Weapon.WeaponBonus.XPB + UD.Job.Bonus.XPB) 
                    let BARC = (UD.Attributes.ArcmB + UD.Title.Bonus.ArcmB + UD.Weapon.WeaponBonus.ArcmB + UD.Job.Bonus.ArcmB)

                    if(UD.Level >= 5) {

                        if(UD.HP.CHP <= 0) {

                            const NOHPEmbed = new RichEmbed()
                                .setDescription(`Please Heal, you currently have no hp left`)
                                .setColor("RED")
                                .setThumbnail(author.avatarURL)
                            message.channel.send(NOHPEmbed)

                        } else {

                            if(results[0].Battle == 0) {

                                connection.query(`SELECT * FROM Mobs ORDER BY RAND() limit 1`, (err, Mobs) => {

                                    if (err) throw err;

                                    const MD = JSON.parse(Mobs[0].MobsStats)

                                    let M_HP = Math.round(Math.round(Math.floor(UD.Level - 4.5) * ((UD.Level - 4.5)* 1.5) + MD.Vit) * Math.sqrt(MD.Vit))
                                    let M_DMG = Math.round(Math.round((Math.floor(UD.Level - 1.5) * Math.sqrt(UD.Level - 1.5))) * Math.sqrt(MD.Att)) - 10
                                    let M_XP = Math.round((Math.floor(UD.Level) + (MD.BXP * MD.BXP) * BXP))
                                    let M_ARC = Math.round((Math.floor(UD.Level) + (MD.BARC * MD.BARC) * BARC) / 3)

                                    let Battle = {
                                        "Name": MD.Name,
                                        "Att": M_DMG, 
                                        "HP": {
                                            "BHP": M_HP,
                                            "CHP": M_HP
                                        },
                                        "Res": 0, 
                                        "BXP": M_XP,
                                        "BARC": M_ARC
                                    }

                                    connection.query(`UPDATE Users SET Battle='${JSON.stringify(Battle)}' WHERE UserID='${author.id}'`)
                                    
                                    message.channel.send("You initiaded a battle, use the command again to fight")

                                })

                            } else {

                                const BattleEmbed = new RichEmbed()

                                const CBattle = JSON.parse(results[0].Battle)
                                
                                //Mob
                                let NBMHP = Math.round(CBattle.HP.CHP - BDMG)
                                CBattle.HP.CHP=NBMHP

                                 // User
                                 let NHP1 = UD.HP.CHP - CBattle.Att
                                 UD.HP.CHP=NHP1;

                                //Upds Battle Mob
                                connection.query(`UPDATE Users SET Battle='${JSON.stringify(CBattle)}' WHERE UserID='${author.id}'`)
                                // Upds User
                                connection.query(`UPDATE Users SET Stats='${JSON.stringify(UD)}' WHERE UserID='${author.id}'`)

                                    BattleEmbed.setTitle(`${author.username}\`s Battle Report`)

                                    BattleEmbed.setDescription(`Your fighting a ${CBattle.Name}`)

                                    if(UD.HP.CHP <= 0 ) {

                                        BattleEmbed.addField(`${author.username}\`s HP`, `0 / ${UD.HP.HP}`,true)

                                    } else {

                                        BattleEmbed.addField(`${author.username}\`s HP`, `${Math.round(UD.HP.CHP)} / ${UD.HP.HP}`,true)

                                    }

                                    if(CBattle.HP.CHP <= 0 ) {

                                        BattleEmbed.addField(`${CBattle.Name}\`s HP`, `0 / ${CBattle.HP.BHP}`,true)

                                    } else {

                                        BattleEmbed.addField(`${CBattle.Name}\`s HP`, `${Math.round(CBattle.HP.CHP)} / ${CBattle.HP.BHP}`,true)
                                    
                                    }

                                    if(CBattle.HP.CHP <= 0 ){

                                        // User
                                        let NHP = UD.HP.CHP - CBattle.Att
                                        UD.HP.CHP=NHP;UD

                                        const xprew = function XPReward(rew) {
                                            
                                            if(UD.Level >= 46 && UD.Level <= 135){

                                                return rew = UD.XP + (CBattle.XP * 1.05)

                                            } else if(UD.Level >= 15 && UD.Level <= 45) {

                                                return rew = UD.XP + CBattle.BXP + 5

                                            } else {

                                                return rew = UD.XP + CBattle.BXP

                                            }
                                        }
                                        UD.XP=xprew()

                                        const arcrew = function ArcReward(rew) {

                                            if(UD.Level >= 15 && UD.Level <= 45) {

                                                return rew = UD.Arcanium + CBattle.BARC + 5

                                            }else {

                                                return rew = UD.Arcanium + CBattle.BARC

                                            }
                                        }
                                        UD.Arcanium=arcrew()

                                        //let nhp2 = BHP
                                        //UD.HP.HP=nhp2
    
                                        connection.query(`UPDATE Users SET Stats='${JSON.stringify(UD)}' WHERE UserID='${author.id}'`)
    
                                        //Mob
                                        connection.query(`SELECT * FROM Mobs ORDER BY RAND() limit 1`, (err, Mobs) => {
    
                                            if (err) throw err;
        
                                            const MD = JSON.parse(Mobs[0].MobsStats)
        
                                            let M_HP = Math.round(Math.round(Math.floor(UD.Level - 4.5) * ((UD.Level - 4.5)* 1.5) + MD.Vit) * Math.sqrt(MD.Vit))
                                            let M_DMG = Math.round(Math.round((Math.floor(UD.Level - 1.5) * Math.sqrt(UD.Level - 1.5))) * Math.sqrt(MD.Att)) - 10
                                            let M_XP = Math.round((Math.floor(UD.Level) + (MD.BXP * MD.BXP) * BXP))
                                            let M_ARC = Math.round((Math.floor(UD.Level) + (MD.BARC * MD.BARC) * BARC) / 3)
                                            
                                            let Battle = {
                                                "Name": MD.Name,
                                                "Att": M_DMG, 
                                                "HP": {
                                                    "BHP": M_HP,
                                                    "CHP": M_HP
                                                },
                                                "Res": 0, 
                                                "BXP": M_XP,
                                                "BARC": M_ARC
                                            }
        
                                            connection.query(`UPDATE Users SET Battle='${JSON.stringify(Battle)}' WHERE UserID='${author.id}'`)
                                            
                                        })

                                        let clvl = Math.round(((Math.floor(6.66) * (Math.sqrt(6) * UD.Level * (UD.Level+1)) ) / 3.05 ) * 4.25)
                                        let olvl = Math.round(((Math.floor(6.66) * (Math.sqrt(6) * (UD.Level-1) * UD.Level) ) / 3.05 ) * 4.25)
                                        let nlvl = clvl - olvl
                                        let cxp = UD.XP - olvl

                                        //BattleEmbed.addBlankField()
                                        BattleEmbed.addField(`Rewards`, `${CBattle.BARC} Arcanium & ${CBattle.BXP} XP ( ${cxp} / ${nlvl} )`)
                                        //BattleEmbed.addField(`Rewards`, `${NARC} Arcanium & ${NXP} XP`)

                                    }

                                    const XPWall = Math.round(((Math.floor(6.66) * (Math.sqrt(6) * UD.Level * (UD.Level+1))) / 3.05 ) * 4.25)

                                    if(UD.XP >= XPWall) {

                                        let hp = UD.HP.HP +25
                                        let mhp = UD.HP.MHP + 25
                                        let chp = UD.HP.CHP + 25
                                        let mn = UD.Mana.Mana + 10
                                        let cmn = UD.Mana.CMana + 10
                                        let mmn = UD.Mana.MMana + 10
                                        let sp = UD.SP +5
                                        let cp = UD.CP +1

                                        UD.Level++;
                                        UD.Points++;
                                        UD.HP.HP=hp;
                                        UD.HP.MHP=mhp;
                                        UD.HP.CHP=chp;
                                        UD.Mana.Mana=mn;
                                        UD.Mana.CMana=cmn;
                                        UD.Mana.MMana=mmn;
                                        UD.SP=sp;   
                                        UD.CP=cp;

                                        connection.query(`UPDATE Users SET Stats='${JSON.stringify(UD)}' WHERE UserID ='${author.id}'`)

                                        BattleEmbed.addField('Level up!', `You've Leveled up to level ${UD.Level}`)

                                    }

                                    BattleEmbed.setFooter(`Adventure System v1 & Arcanium v0.0.1`)
                                    BattleEmbed.setColor("RANDOM")

                                message.channel.send(BattleEmbed)

                            }

                        }
                        
                    } else {

                        const noUser = new RichEmbed()
                            .setTitle(`Sorry ${author.username}`)
                            .setDescription(`You Need to be Level 5 to use this command!`)
                            .setThumbnail(author.avatarURL)
                            .setFooter(`Adventure System v1 & Arcanium v0.0.1`)
                            .setColor("RED")
                        message.channel.send(noUser)

                    }

                }

            })

            connection.release()

        })

    }

}
