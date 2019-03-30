let { Command } = require('discord.js-commando');
let { RichEmbed } = require('discord.js');

module.exports = class TestCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'register1',
			aliases: ['signup1'],
			group: 'xp',
			memberName: 'register1',
			description: 'Signup for the Game',
			examples: ['just do <register'],
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

 connection.getConnection()
 pool.query(`SELECT * FROM xp WHERE userid = '${message.author.id}'`,(err, result) => {
  if (!result[0]){
      connection.query(`INSERT INTO xp(userid, username, Nickname, XP, ulevel, Arcanium, points, damage, Hp, CurHP) VALUES(${message.author.id}','${message.author.username}','${message.author.username}', 0, ${level}, 50, 10, 10, 100, 100` ,function(err5, result)   {
          console.log(result)    
      const test = new RichEmbed()
                console.log(test.setDescription(`Name: ${result[0].username} \nNickname:${result[0].Nickname}\n ID: ${result[0].userid}\nXP: ${result[0].XP}\nLevel: ${result[0].ulevel}\n Arcanium: ${result[0].Arcanium}\nDamage: ${result[0].dmg}\nHP: ${result[0].hp}\n Points: ${result[0].points}`))
            msg.channel.send(test) 
        })
    
      connection.end(function(err) {
              if (err) {
          console.log("ERROR: " + err);
          throw err;
      }
      })
    } else {
      const resp = new RichEmbed()
        .setAuthor(this.client.user.username, this.client.user.avatarURL)
        .setDescription(`Sorry but you already have an account!`)
        .setColor(RED)
      msg.channel.send(resp);
    }
}
}
}
