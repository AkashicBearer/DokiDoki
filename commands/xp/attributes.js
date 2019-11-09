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

module.exports = class AttributesCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'attributes',
            aliases: ['attri', 'atrb'],
            group: 'xp',
            memberName: 'attributes',
			description: 'Checck your Attributes',
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

			connection.query(`SELECT * FROM Users WHERE UserID="${author.id}"`, (err, results) => {

                if (err) throw err;

                if(!results[0]){
	
                    const noUser = new RichEmbed()
                        .setTitle(`Sorry ${author.username} but you dont have a profile.`)
                        .setDescription(`Please create an account with [prefix]register`)
                        .setThumbnail(author.avatarURL)
                        .setFooter(`Attribute System v1 & Arcanium v0.0.1`)
                        .setColor("RED")
                    message.channel.send(noUser)

                } else {

                    const UData = JSON.parse(results[0].Stats)

                    const attribs = UData.Attributes

                    const AttrEmbed = new RichEmbed()
                        .setTitle(`${author.username}'s Attributes`)
                        //.setDescription(`All your current Attributes, numbers in [] are the current effects`)
                        .addField(`Strength`, `${attribs.Str} [+${(attribs.Str / 100).toFixed(2)} DMG]`)
                        .addField(`Accuracy`, `${attribs.Acc} [+${(attribs.Acc / 150).toFixed(2)} ACC]`,true)
                        .addField(`Intelligence`, `${attribs.Int} [+${(attribs.Int / 100).toFixed(2)} M.DMG]`,true)
                        .addField(`Vitality`, `${attribs.Vit} [+${(attribs.Vit / 25).toFixed(2)} HP]`,true)
                        .addField(`Resistance`, `${attribs.Res} [+${(attribs.Res / 75).toFixed(2)} RES]`,true)
                        .addField(`XPBoost`, `${attribs.XPB} [+${attribs.XPB / 100}% XP]`,true)
                        .addField(`Arcanium Boost`, `${attribs.ArcmB} [${attribs.ArcmB / 100}% Arcanium]`,true)
                        .setThumbnail(author.avatarURL)
                        .setFooter(`Attribute System v1 & Arcanium v0.0.1`)
                        .setColor("RANDOM")
                    message.channel.send(AttrEmbed)

                }
            })

            connection.release()
            
        })
    }
}