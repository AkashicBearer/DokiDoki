const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class PrefixCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'prefix2',
            aliases: [],
            group: 'settings',
            memberName: 'prefix2',
            description: 'Get Guild Prefix',
        });
    }
	async run(message) { 
        const mysql = require("mysql")
        const connection = mysql.createConnection({
            host: process.env.host,
            port: "3306",
            user: process.env.user,
            password: process.env.password, 
            database: process.env.database,
        })
        connection.connect(function(err) {
            if (err) {
                console.error('error connecting: ' + err.stack);
                return;
            }
        })

        connection.query(`SELECT * FROM settings WHERE guild = "${message.guild.id}"`, function(err, results, fields){
            let getprefix = JSON.parse(results[0].settings)
            let prefix = getprefix.prefix

            //console.log(results[0])
            //console.log(fields)            
            //console.log(getprefix)
            //console.log(prefix)

            const CurrentPrefixEmbed = new RichEmbed()
                .setTitle(`Current Prefix`)
                .setDescription(`The Prefix for this guild is: ${prefix}`)
                .setColor("GREEN")
                .setThumbnail(message.guild.iconURL)
            message.channel.send(CurrentPrefixEmbed)

            connection.end()
        })
    }
}