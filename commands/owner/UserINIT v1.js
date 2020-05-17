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

module.exports = class BalanceCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'init',
            group: 'owner',
            memberName: 'init',
            description: 'Reset all (mentioned or authors) progress in the DokiRPG',
            args: [
                {
                    key: 'person',
                    prompt: 'Who would you like to init',
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

            if (err) {

                console.error('error connecting: ' + err.stack);
                return;

            }

			var Nyan = function ProfileOfUser(a) {

                if(!PUser || PUser.user.id == author.id) {

                    return a = author

                } else {
                    
                    return a = PUser.user

                }

            }

            connection.query(`SELECT * FROM Users WHERE UserID="${Nyan().id}"`, async (err, results) => {

                if (err) throw err;

                if(!results[0]){
	
                    const noUser = new MessageEmbed()
                        .setTitle(`Sorry ${Nyan().username} but you dont have a profile.`)
                        .setDescription(`Please create an account with [prefix]register`)
                        .setThumbnail(Nyan().avatarURL())
                        .setFooter(`INIT v1 || Arcanium v0.0.3`)
                        .setColor("RED")
                    message.channel.send(noUser)

                } else {
            
                    const UserData = {
                        "Name": {
                            "Username": Nyan().username,
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
                            "Race": `Human`,
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

                    connection.query(`INSERT INTO Users(UserID, Stats, Rewards, Inventory, Battle) VALUES('${Nyan().id}','${jsonData}','${JSON.stringify(Rewards)}','','0')`)

                    const InitedEmbed = new MessageEmbed()
                        .setTitle(`${Nyan().username} has been reset`)
                        .setColor("GREEN")
                        .setFooter(`INIT v1 || Arcanium v0.0.3`)
                        .setThumbnail(author.avatarURL())
                    message.channel.send(InitedEmbed)
                }
            })

        connection.release()

        })
    }
}