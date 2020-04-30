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

module.exports = class RegisterCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'register',
            aliases: ['signup', 'start'],
            group: 'xp',
            memberName: 'register',
			description: 'Start your Adventure in the world of Arcanium!',
			example: "[prefix]register {race}",
			args:[
				{
					key: 'races',
					prompt: 'What race do you want to be? All Races are supported inclueding whatever you come up with!',
					type: 'string',
					default: `Human`
				}
			],
            throttling: {
                usages: 1,
                duration: 15,
            }
        })    
	}
	
	async run(message, args) {
		let author = message.author
		let race = args.races

		db.getConnection(function(err, connection) {

			if (err) {
                console.error('error connecting: ' + err.stack);
                return;
			}
			
			connection.query(`SELECT * FROM Users WHERE UserID="${author.id}"`, (err, results) => {

				if (err) throw err;


				if(!results[0]){

					const UserData = {
                        "Name": {
							"Name": author.username,
							"Color": "ffffff"
						},
                        "Title": {
							"Name": "Worlds Weakest Entity",
							"Color": "ffffff",
							"Bonus": {
								"Str": 0,
								"XPB": 0,
								"ArcmB": 0,
								"Acc": 0,
								"Int": 0,
								"Mana":  0,
								"Vit": 0,
								"Res": 0
							}
						},
                        "XP": 1,
						"Level": 1,
						"Arcanium": 50,
						"HP": {
							"HP": 25,
							"MHP": 25,
							"CHP": 25,
						},
						"Mana": {
							"Mana": 50,
							"CMana": 50,
							"MMana": 50
						},
						"Weapon":{
							"WeaponLvl": 0,
							"WeaponDmg": 10,
							"WeaponName":"Fists",
							"WeaponClass": 0,
							"WeaponReAuthority": 0,
							"WeaponBonus":{
								"Str": 0,
								"XPB": 0,
								"ArcmB": 0,
								"Acc": 0,
								"Int": 0,
								"Mana":  0,
								"Vit": 0,
								"Res": 0
							}
						},
						"Points": 0,
						"CP": 0,
						"SP": 5,
						"CharRating":"Z",
						"Class":"None",
						"Race": `${race}`,
						"Job": {
							"Name": "None",
							"Rank": 0,
							"Lvl": 0,
							"Bonus": {
								"Str": 0,
								"XPB": 0,
								"ArcmB": 0,
								"Acc": 0,
								"Int": 0,
								"Mana":  0,
								"Vit": 0,
								"Res": 0
							}
						},
						"Attributes":{
							"Str": 0,
							"XPB": 0,
							"ArcmB": 0,
							"Acc": 0,
							"Int": 0,
							"Mana":  0,
							"Vit": 0,
							"Res": 0
						},
						"Object-Authority":{
							"Authority": 0,
							"AuthorityClass":"Human"
						},
						"System-Authority":{
							"Authority": 0,
							"AuthorityClass": "Mortal"
						},
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

					connection.query(`INSERT INTO Users(UserID, Stats, Rewards, Inventory, Battle) VALUES('${author.id}','${jsonData}','${JSON.stringify(Rewards)}','','0')`)
					
					const RegisteredEmbed = new RichEmbed()
						.setTitle(`Welcome ${author.username} to the world of Arcanium!`)
						.setColor("GREEN")
						.setDescription("May the Gods and the Goddesses Shine upon you.\n\nCurrently in Betav1")
						.setFooter(`Arcanium v0.0.1`)
						.setThumbnail(author.avatarURL)
					message.channel.send(RegisteredEmbed)

				} else {

					const ErrorEmbed = new RichEmbed()
						.setTitle(`Sorry ${author.username}`)
						.setColor("GREEN")
						.setDescription("You Already have an account, therefor you cant create another!")
						.setFooter(`Arcanium v0.0.1`)
					message.channel.send(ErrorEmbed)
					
				}
			})
			connection.release()
		})
	}
}