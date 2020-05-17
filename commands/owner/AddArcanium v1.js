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
            name: 'addarc',
            group: 'owner',
            memberName: 'addarc',
            description: 'Add Arcanium to a user',
            args: [
                {
                    key: 'person',
                    prompt: 'Who would you like to init',
                    type: 'member',
                    default: ``
                },
                {
                    key: 'amm',
                    prompt: "How much do you want to add?",
                    type: `member`,
                    default: "50"
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
        let amm = args.amm
        
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
                        .setFooter(`AddArc v1 || Arcanium v0.0.3`)
                        .setColor("RED")
                    message.channel.send(noUser)

                } else {

                    const  UData = JSON.parse(results[0].Stats)

                    let bal = UData.Arcanium + amm

                    UData.Arcanium=bal

                    const AddedArc = new MessageEmbed()
                        .setTitle(`Arcanium Added`)
                        .setDescription(`Arcanium has been added to ${Nyan().username}\n\nAmmount added: ${amm}\nNew Balance: ${bal}`)
                        .setThumbnail(Nyan().avatarURL())
                        .setFooter(`AddArc v1 || Arcanium v0.0.3`)
                        .setColor("RED")
                    message.channel.send(AddedArc)

                    connection.query(`UPDATE Users SET Stats='${JSON.stringify(UData)}' WHERE UserID ='${author.id}'`)
                }
            })

        connection.release()

        })
    }
}