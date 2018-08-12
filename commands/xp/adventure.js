let { Command } = require('discord.js-commando');
let { RichEmbed } = require('discord.js');

module.exports = class AdventureCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'adventure',
            aliases: ['adv'],
            group: 'xp',
            memberName: 'adventure',
            description: 'Go on an Adventure and Earn Stuff',
            examples: ['<adv'],
            throttling: {
                usages: 1,
                duration: 15,
            }
        })    
    }


async run(msg, args) {
if (msg.author.bot) return;
        let { Pool } = require ('pg');    
        let pool = new Pool({ connectionString: process.env.DATABSE_URL, port: 5432, host: process.env.dbhost, database: process.env.db, user: process.env.user, password: process.env.password, ssl: true, });  
        pool.connect()

        pool.query(`Select * FROM xp WHERE userid ='${msg.author.id}'`,(err, result) => {
            
                let level = result.rows[0].level
                

                let arcboost = result.rows[0].arcboost;
                let xpboost = result.rows[0].xpboost;
                const xpb = xpboost / 100;
                const arcb = arcboost / 100;


                const lvlreq = 1
                const lvl = level / 4;


                if(level >= lvlreq){
                    if(result.rows[0].advhp <= 0){
                        const adv = new RichEmbed()
                        adv.setDescription('Please Heal!')
                        adv.setColor('RED')
                        msg.channel.send(adv);
                    }else {
                        if(result.rows[0].mob_hp2 <= 0 || !result.rows[0].mob_hp2 || !result.rows[0].mob_name || !result.rows[0].mobbasehp){
                            pool.query(`SELECT * FROM mobs ORDER BY random() limit 1`, (err, result1) => {
                            let basehp = result1.rows[0].mob_hp1
                            let mobdmg = result1.rows[0].mob_dmg


                            const mob_hp = Math.round(Math.floor(lvl) * basehp * 15)
                            const mob_dmg =  Math.round((Math.random() * Math.floor(lvl)) / (0.5 * lvl) * (5 * mobdmg))

                            pool.query(`UPDATE xp SET mob_hp2 = '${mob_hp}',mobbasehp = '${mob_hp}', mob_name = '${result1.rows[0].mob_name}'  WHERE userid = '${msg.author.id}'`)
                            pool.end(err => {
                                if(err) throw err; 
                                })
                            })

                            msg.channel.send("You initiaded a battle, use the command again to fight")
                        }else{ 
                            pool.query(`SELECT * FROM mobs WHERE mob_name='${result.rows[0].mob_name}' `, (err, result1) => {
                            const basehp = result.rows[0].mobbasehp
                            const mobdmg = result1.rows[0].mob_dmg
                            var mobhp = result.rows[0].mob_hp2 - result.rows[0].dmg
                            const mob_dmg =  Math.round((Math.random() * Math.floor(lvl)) / (0.2 * lvl) * (1 * mobdmg))
                            let rew = result1.rows[0].mob_rew;
                            var hp = result.rows[0].advhp - mob_dmg

                            const advarc = Math.round(((Math.round(1 * 15))* lvl) + arcboost * 0.005)
                            const advxp = Math.round(((Math.round(0.5 *10))* lvl  + arcboost)) 

                            pool.query(`UPDATE xp SET mob_hp2 = ${mobhp}, advhp = '${hp}' WHERE userid = '${msg.author.id}'`)
                            
                            const adv = new RichEmbed()
                            adv.setAuthor(this.client.user.username, this.client.user.avatarURL)
                            adv.setTitle(msg.author.username + '\`s Adventure')
                            adv.setColor('RANDOM')
                            adv.setThumbnail(msg.author.avatarURL)
                            adv.setDescription(`You Attacked ${result1.rows[0].mob_name} and dealt ${result.rows[0].dmg} damage!\n\n${result1.rows[0].mob_name} dealt ${mob_dmg} damage to you!`)
                            adv.addField(`Health`, `${hp} / ${result.rows[0].hp}`)
                            adv.addField(`${result1.rows[0].mob_name}`, `Health: ${mobhp} / ${basehp}`)
                            msg.channel.send(adv);

                            if(mobhp <= 0){
                                pool.query(`UPDATE xp SET xp = '${result.rows[0].xp + advxp}', arcanium = '${result.rows[0].arcanium + advarc}' WHERE userid = '${msg.author.id}'`)
                                const adv = new RichEmbed()
                                adv.setAuthor(this.client.user.username, this.client.user.avatarURL)
                                adv.setTitle(msg.author.username + '\`s Adventure')
                                adv.setDescription(`You have Slained ${result1.rows[0].mob_name}!`)
                                adv.addField(`Rewards:`,`${advxp} XP and ${advarc} Arcanium!`)
                                adv.setColor('GREEN')
                                msg.channel.send(adv)

                            }
                            pool.end(err => {
                                if(err) throw err; 
                                })
                            })
                        }
                    }  
                }else{
                    let adv = new RichEmbed()
                    adv.setAuthor(this.client.user.username, this.client.user.avatarURL)
                    adv.setDescription(`You need to be Lvl ${lvlreq} in order to use this command!`)
                    adv.setColor('RED')
                    msg.channel.send(adv);
                }

            
        })
    }
}
