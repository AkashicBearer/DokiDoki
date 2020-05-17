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
                            "Username": author.username,
                            "NameColor": "FFFFFF"
                        },
                        "Title": {
                            "Name": "Worlds Weakest",
                            "TitleColor": "00FF00",
                            "Bonus": ""
                        },
                        "Weapon": "",
                        "Points:": {
                            "SkillPoints": 0,
                            "CharacterPoints": 0,
                            "Points": 0,
                        },
                        "Character": {
                            "Race": `${race}`,
                            "Jobs": {
                                "MinerLv": 0,
                                "HUnterLv": 0,
                            },
                            "Class": "",
                            "Rank": "Z",
                            "Kills": 0,
                            "Attributes": {
                                "Str": 0,
                                "XPB": 0,
                                "ArcmB": 0,
                                "Acc": 0,
                                "Int": 0,
                                "Mana":  0,
                                "Vit": 0,
                                "Res": 0
                            },
                            "Health": {
                                "MaxHP": 50,
                                "BattleHP": 50
                            },
                            "Mana": {
                                "MaxMana": 25,
                                "BattleMana": 25
                            }
                        },
                        "Authority":{
                            "Object": {
                                "Authority": 0,
                                "AuthorityClass":"Human"
                            },
                            "System": {
                                "Authority": 0,
                                "AuthorityClass":"Mortal"
                            }
                        },
                        "XP": 1,
                        "Level": 1,
                        "Arcanium": 50
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

                    const RegisteredEmbed = new MessageEmbed()
                        .setTitle(`Welcome ${author.username} to the world of Arcanium!`)
                        .setColor("GREEN")
                        .setDescription("May the Gods and the Goddesses Shine upon you.\n\nCurrently in Alpha 2")
                        .setFooter(`Register v5 || Arcanium v0.0.3`)
                        .setThumbnail(author.avatarURL())
                    message.channel.send(RegisteredEmbed)

                } else {

                    const ErrorEmbed = new MessageEmbed()
                        .setTitle(`Sorry ${author.username}`)
                        .setColor("GREEN")
                        .setDescription("You Already have an account, therefor you cant create another!")
                        .setFooter(`Register v5 || Arcanium v0.0.3`)
                    message.channel.send(ErrorEmbed)
                    
                }
            })

            connection.release()

        })
    }
}