/*let { Command } = require('discord.js-commando');
let { RichEmbed } = require('discord.js');

module.exports = class TestCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'test',
			aliases: ['test'],
			group: 'xp',
			memberName: 'test',
			description: 'db test',
			examples: ['<adv'],
			throttling: {
				usages: 1,
				duration: 15,
			},

		})    
	}


async run(msg, args, message) {
if (message.channel.type === "dm") return;
if (msg.author.bot) return;

var mysql = require('mysql');
const connection  = mysql.createPool({
      host: "www.dokidoki.xyz",
      user: "root",
      port: 3306,
      password: "",
      database: "dokidoki", 
}) 	
  connection.getConnection(function(err, connection) { 
    if (err) {
        console.log("ERROR: " + err);
        throw err;
    }

    connection.query(`SELECT * FROM xp WHERE userid = '${msg.author.id}'`,function(err5, result)   {
        console.log(result)    
    const test = new RichEmbed()
              console.log(test.setDescription(`Name: ${result[0].username}\n ID: ${result[0].userid}\nXP: ${result[0].xp}\nLevel: ${result[0].level}\n Arcanium: ${result[0].arcanium}\nTimezone: ${result[0].timezone}\nXPboost: ${result[0].xpboost}\n ArcBoost: ${result[0].arcboost}\n Damage: ${result[0].dmg}\nHP: ${result[0].hp}\n AdvHP ${result[0].advhp}\n Points: ${result[0].points}`))
          msg.channel.send(test) 
      })
  
    connection.end(function(err) {
            if (err) {
        console.log("ERROR: " + err);
        throw err;
    }
    })

})
}
}
*/
