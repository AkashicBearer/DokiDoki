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

module.exports = class WorkCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'work',
            group: 'xp',
            memberName: 'work',
			description: 'Work for some XP & Arcanium',
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
	
                    const noUser = new MessageEmbed()
                        .setTitle(`Sorry ${author.username} but you dont have a profile.`)
                        .setDescription(`Please create an account with [prefix]register`)
                        .setThumbnail(author.avatarURL())
                        .setFooter(`Work v3 || Arcanium v0.0.3`)
                        .setColor("RED")
                    message.channel.send(noUser)

                } else {
                    
                    const  UData = JSON.parse(results[0].Stats)
                    const work = function Work(work) {

                        let base = 2
                        let ArcmB = UData.Character.Attributes.ArcmB
                        let boosted = base * (ArcmB/100)
                        
                        return work = base + Math.round(boosted)

                    }

                    let Arc = UData.Arcanium + work()

                    let XP = UData.XP
                    let clvl = Math.round(((Math.floor(6.66) * (Math.sqrt(6) * UData.Level * (UData.Level+1)) ) / 3.05 ) * 4.45)
                    let olvl = Math.round(((Math.floor(6.66) * (Math.sqrt(6) * (UData.Level-1) * UData.Level) ) / 3.05 ) * 4.45)
                    let nlvl = clvl - olvl
                    let cxp = UData.XP - olvl

                    UData.Arcanium=Arc
                    UData.XP++

                    const WorkMessage = {
                        "0": " ",
                        "1": "You went around picking up trash and got",
                        "2": "You sold some candies and got",
                        "3": "You helped your sister and got",
                        "4": "You helped a grandma cross the road and got"
                    }

                    const randm = Math.random();

                    const WOrkMSG = WorkMessage[Math.floor(randm * Object.keys(WorkMessage).length).toString()]

                    const WorkEmbed = new MessageEmbed()
                        .setTitle(`${message.author.username}'s work report!`)
                        .setDescription(`${WOrkMSG} ${work()} Arcanium & 1 XP`)
                        .setFooter(`Work v3 || Arcanium v0.0.3`)
                        .setColor("GREEN")
                    message.channel.send(WorkEmbed)
                    
                    function levelup (level) {

                        if(XP >= clvl) {

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
                                .setThumbnail(message.author.displayAvatarURL({format: 'png'}))
                                .setFooter("Training System v3 & Arcanium v0.0.3")
                            message.channel.send(LvlUpEmbed)

                            connection.query(`UPDATE Users SET Stats='${JSON.stringify(UData)}' WHERE UserID ='${author.id}'`)

                        }
                    }

                    if(XP >= clvl) return levelup();

                    connection.query(`UPDATE Users SET Stats='${JSON.stringify(UData)}' WHERE UserID ='${author.id}'`)
                }
            })
  
        connection.release()
  
    })
    }
}