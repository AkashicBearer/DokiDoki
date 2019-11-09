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


module.exports = class PrefixCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'prefix2',
            aliases: [`setprefix`],
            group: 'settings',
            memberName: 'prefix2',
            description: 'Get Guild Prefix or change it',
            args: [
                {
                    key: 'pref',
                    prompt: 'What prefix would you like to set?',
                    type: 'string',
					max: 15,
					default: ''
                }
            ],
            throttling: {
                usages: 1,
                duration: 15,
            }
        });
    }
	async run(message, args) { 

        let pref = args.pref
        
        db.getConnection(function (err, connection) {

            if (err) {
               console.error('error connecting: ' + err.stack);
               return;
           }   

            connection.query(`SELECT * FROM settings WHERE guild = "${message.guild.id}"`, async (err, results) => {

                if(err) throw err;
                
                let GetPrefix = JSON.parse(results[0].settings)

                if(!results[0]){

                    let prefset = {"prefix":"<"}

                    connection.query(`INSERT INTO settings(guild, settings) VALUES(${message.guild.id},${JSON.stringify(prefset)})`)

                    const NewDataEmbed = new RichEmbed()
                        .setTitle(`Data Updated`)
                        .setDescription(`Guild has been added to database, please use command again to set prefix`)
                        .setColor("GREEN")
                        .setThumbnail(message.guild.iconURL)
                    message.channel.send(NewDataEmbed)

                } else {

                    let Prefix = GetPrefix.prefix

                    if (!pref) {

                        const CurrentPrefixEmbed = new RichEmbed()
                            .setTitle(`Current Prefix`)
                            .setDescription(`The Prefix for this guild is ${Prefix}`)
                            .setColor("GREEN")
                            .setThumbnail(message.guild.iconURL)
                        message.channel.send(CurrentPrefixEmbed)


                    } else {

                        Prefix=pref

                        let nPrefix = GetPrefix.prefix

                        const CurrentPrefixEmbed = new RichEmbed()
                            .setTitle(`New Prefix`)
                            .setDescription(`The Prefix for this guild is now ${nPrefix}`)
                            .setColor("RANDOM")
                            .setThumbnail(message.guild.iconURL)
                        message.channel.send(CurrentPrefixEmbed)

                    }

                    connection.query(`UPDATE settings SET settings='${JSON.stringify(GetPrefix)}' WHERE guild ='${message.guild.id}'`)

                }
            })

            connection.release()

        })
    }
}