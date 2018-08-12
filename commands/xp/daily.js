const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');
const dotenv = require('dotenv');
dotenv.config();

module.exports = class DailyCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'daily',
            aliases: ['claim','login'],
            group: 'xp',
            memberName: 'daily',
            description: 'Claim your daily',
            examples: ['<daily'],
            throttling: {
                usages: 1,
                duration: 86400,
            }
        })    
    }


async run(msg, args){
  const usersOnCooldown = new Set();

  if (!usersOnCooldown.has(msg.author.id)){
  const { Pool } = require ('pg');    
  const pool = new Pool({ connectionString: process.env.HEROKU_POSTGRESQL_GREEN_URL, port: 5432, host: process.env.dbhost, database: process.env.db, user: process.env.user, password: process.env.password, ssl: true, });  
  pool.connect()

  let arcanium;
    pool.query(`Select arcanium FROM xp WHERE userid ='${msg.author.id}'`,(err, result) => {
    let daily = Math.floor(Math.random() *100) 
      if(!daily <= 50){
      let daily = Math.floor(Math.random() *150) 
      }
    let arcanium = result.rows[0].arcanium
      pool.query(`UPDATE xp SET arcanium = ${arcanium + daily} WHERE userid ='${msg.author.id}'`)
      if (err) throw err;
    const embed = new RichEmbed();
        embed.setAuthor(msg.author.username , msg.author.avatarURL)
        embed.setTitle(`Daily Claimed!`)
        embed.addField('Ammount: ', `${daily} Arcanium!`)
        embed.addField('Your Balance Now is:', `${arcanium+daily}`, true)
        embed.setColor('RANDOM'); 
    return msg.channel.send(embed);
   pool.end(err => {
  if(err) throw err; 
  })
  });
    usersOnCooldown.add(msg.author.id);
  setTimeout(() => {
     usersOnCooldown.delete(msg.author.id);
  }, 8.64e+7);
    }
  }
}
