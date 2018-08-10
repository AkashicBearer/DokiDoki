const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class HealCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'heal',
            aliases: [],
            group: 'xp',
            memberName: 'heal',
            description: 'Heal yourself',
            examples: ['<heal'],
            throttling: {
                usages: 1,
                duration: 15,
            }
        })   
}

async run(msg,){
  if (msg.author.bot) return;

  const { Pool } = require ('pg');    
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, port: 5432, host: process.env.dbhost, database: process.env.db, user: process.env.user, password: process.env.password, ssl: true, });  
  pool.connect()
 
  pool.query(`Select * FROM xp WHERE userid ='${msg.author.id}'`,(err, result) => {    
    let level = result.rows[0].level
    let maxhp = result.rows[0].advhp
    let hp = result.rows[0].hp
    let arc = result.rows[0].arcanium
    var curhp = result.rows[0].hp - result.rows[0].advhp;
    var price = 250
    var lvlreq = 2

    if(result.rows[0].arcanium >= 250 && level >= lvlreq){
    	pool.query(`UPDATE xp SET arcanium = '${arc - price}', advhp = '${result.rows[0].hp}' WHERE userid = '${msg.author.id}'`)
    	const heal = new RichEmbed()
    		heal.setAuthor(this.client.user.username, this.client.user.avatarURL)
            heal.setThumbnail(msg.author.avatarURL)
    		heal.setTitle(`${msg.author.username}'s Healing Report!`)
    		heal.setDescription(`You spent ${price} to heal yourself. \nYour Health is now ${result.rows[0].advhp}`)
            heal.setColor(`GREEN`)
        msg.channel.send(heal);
    } else {
        if(result.rows[0].arcanium < 250){
        const heal = new RichEmbed()
            heal.setAuthor(this.client.user.username , this.client.user.avatarURL)
            heal.setDescription(`${msg.author.username} You need atleast 250 Arcaniumm in order to heal`)
            heal.setColor(`RED`)
        msg.channel.send(heal);
        } else {
        const heal = new RichEmbed()
            heal.setAuthor(this.client.user.username , this.client.user.avatarURL)
            heal.setDescription(`${msg.author.username} You need to be level ${lvlreq} inorder to use this command`)
            heal.setColor(`RED`)
        msg.channel.send(heal);   
        }    
  }
  pool.end();
  })
 }
}
