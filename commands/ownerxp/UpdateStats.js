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

module.exports = class UpdateUserDataCommand extends Command {
    constructor(client) {
        super(client, {
			name: 'updatedata',
			aliases: ["upd", 'update'],
            group: 'ownerxp',
            memberName: 'updatedata',
			description: 'Updates ur data to match the newest update',
			args: [
                {
                    key: 'person',
                    prompt: 'Who would you like to updaet',
                    type: 'member',
                    default: ``
                }
            ],
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
		let PUser = args.person

		db.getConnection( function(err, connection) {

			var Nyan = function ProfileOfUser(a) {

                if(!PUser || PUser.user.id == author.id) {

                    return a = author

                } else {
                    
                    return a = PUser.user

                }

            }

            connection.query(`SELECT * FROM Users WHERE UserID="${Nyan().id}"`,(err, results) => {

				if(!results[0]){
	
					const noUser = new RichEmbed()
						.setTitle(`Sorry ${author.username} but you dont have a profile.`)
						.setDescription(`Please create an account with [prefix]register`)
						.setThumbnail(author.avatarURL)
						.setColor("RED")
					message.channel.send(noUser)
	
				} else {
	
					let uD = JSON.parse(results[0].Stats)
					const XPWall = Math.round((Math.sqrt(50) * (2.125 + uD.Level)) * 10)
					
					const UserData = {
						"Name": uD.Name,
						"Title": uD.Title,
						"XP": uD.XP,
						"Level": uD.Level,
						"Arcanium": uD.Arcanium,
						"HP": uD.HP,
						"Mana": uD.Mana,
						"Weapon": uD.Weapon,
						"Points": uD.Points,
						"CP": uD.CP,
						"SP": uD.SP,
						"CharRating": uD.CharRating,
						"Class":`${uD.Class}`,
						"Race": uD.Class,
						"Job": uD.Job,
						"Attributes": uD.Attributes,
						"Object-Authority":{
							"Authority": 0,
							"AuthorityClass":"Human"
						},
						"System-Authority":{
							"Authority": 0,
							"AuthorityClass": "Mortal"
						}
					}

					const Rewards = {
						"Starter": {
							"Status": "Unclaimed",
							"LevelReq": 5,
							"Rewards": {
								"XP": 100,
								"Arcanium": 1000
							}
						},
						"Begginer": {
							"Status": "Unclaimed",
							"LevelReq": 15,
							"Rewards": {
								"XP": 250,
								"Arcanium": 2000
							}
						},
						"Adventurer": {
							"Status": "Unclaimed",
							"LevelReq": 45,
							"Rewards": {
								"XP": 500,
								"Arcanium": 5000
							}
						}
	
					}
	
					let jsonData = JSON.stringify(UserData)
	
					connection.query(`INSERT INTO Users(UserID, Stats, Rewards, Inventory, Battle) VALUES('${author.id}','${jsonData}','${JSON.stringify(Rewards)}','','')`)
	
					message.channel.send(`Updated!`)

				}
			})
			connection.release()
		})
    }
}
