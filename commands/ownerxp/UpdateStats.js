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

		db.getConnection(function(err, connection) {

			if (PUser.id == author.id || !PUser) {

                connection.query(`SELECT * FROM Users WHERE UserID="${author.id}"`,(err, results) => {

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
							"Name": {
								"Name":"Akashic Bearer",
								"Color":"F70202"
							},
							"Title":{
								"Name":"Etheric Ruler",
								"Color":"884EA0",
								"Bonus":{
									"Str":0,"XPB":0,"ArcmB":0,"Acc":0,"Int":0,"Mana":0,"Vit":0,"Res":0}},
							"XP": 220,
							"Level": 1,
							"Arcanium": uD.Arcanium,
							"HP": uD.HP,
							"Mana": uD.Mana,
							"Weapon": uD.Weapon,
							"Points": uD.Points,
							"CP": uD.CP,
							"SP": uD.SP,
							"CharRating":`「GM」`,
							"Class":`${uD.Class}`,
							"Race":`Etherian`,
							"Job": uD.Job,
							"Attributes": uD.Attributes,
							"Object-Authority":{
								"Authority": 100,
								"AuthorityClass":"「GM」"
							},
							"System-Authority":{
								"Authority": 100,
								"AuthorityClass": "「GM」"
							}
							}
	
							let jsonData = JSON.stringify(UserData)
	
							connection.query(`UPDATE Users SET Stats='${jsonData}' WHERE UserID ='${author.id}'`)
	
							message.channel.send(`Updated!`)
					}
				})
				
				connection.release()

			} else {

                connection.query(`SELECT * FROM Users WHERE UserID="${PUser.user.id}"`, async (err, results) => {

					if(!results[0]){
	
						const noUser = new RichEmbed()
							.setTitle(`Sorry ${author.username} but ${PUser.user.username} doesnt have a profile.`)
							.setDescription(`Tell them to create an account with [prefix]register`)
							.setThumbnail(PUser.user.avatarURL)
							.setColor("RED")
						message.channel.send(noUser)
	
					} else {
	
						let uD = JSON.parse(results[0].Stats)
						const XPWall = Math.round((Math.sqrt(50) * (2.125 + uD.Level)) * 10)
	
						const UserData = {
							"Name": uD.Name,
							"Title": uD.Title,
							"XP": 220,
							"Level": 1,
							"Arcanium": uD.Arcanium,
							"HP": uD.HP,
							"Mana": uD.Mana,
							"Weapon": uD.Weapon,
							"Points": uD.Points,
							"CP": uD.CP,
							"SP": uD.SP,
							"CharRating":`${uD.CharRating}`,
							"Class":`${uD.Class}`,
							"Race":`${uD.Race}`,
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
	
						let jsonData = JSON.stringify(UserData)
	
						connection.query(`UPDATE Users SET Stats='${jsonData}' WHERE UserID ='${author.id}'`)
	
						message.channel.send(`Updated!`)
					}
				})
				
				connection.release()
	
			}
		})
    }
}
