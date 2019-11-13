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
});

module.exports = class AddArcCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'addarc',
            aliases: ['arc'],
            group: 'ownerxp',
            memberName: 'addarc',
            description: 'Add Arcanium to a user.',
            args: [
                {
                    key: 'person',
                    prompt: 'Who would you like to adddarc to?',
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

        db.getConnection(function (err, connection) {

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

                if (!results[0]) {

                    const noUser = new RichEmbed()
                        .setTitle(`Sorry ${author.username} but you dont have a profile.`)
                        .setDescription(`Please create an account with [prefix]register`)
                        .setFooter(`AddArc v1 & Arcanium v0.0.1`)
                        .setThumbnail(author.avatarURL)
                    message.channel.send(noUser)

                } else {
                    
                    const UData = JSON.parse(results[0].Stats)
                    const narc = UData.Arcanium + 1000

                    UData.Arcanium=narc

                    console.log(UData.Arcanium)

                    const jsonData = JSON.stringify(UData)

                    connection.query(`UPDATE Users SET Stats='${jsonData}' WHERE UserID ='${Nyan().id}'`)
                
                    const AddXPEmbed = new RichEmbed()
                        .setTitle("Arcanium Added")
                        .setDescription(`New Arc: ${UData.Arcanium}`)
                        .setThumbnail(Nyan().avatarURL)
                        .setColor("GREEN")
                    message.channel.send(AddXPEmbed)
                }
            
            })

            connection.release()

        })
    }
}