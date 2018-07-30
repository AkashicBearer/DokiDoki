const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');
const dotenv = require('dotenv');
dotenv.config();

module.exports = class StatsCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'leaderboard',
            aliases: ['lb','rankings','lead','top','top10'],
            group: 'xp',
            memberName: 'leaderboard',
            description: 'Shows top 10 users',
            examples: ['<lb']
        })    
    }

 async run(msg, args){
   const { Pool } = require ('pg');    
   const pool = new Pool({ connectionString: process.env.DATABASE_URL, port: 5432, host: process.env.dbhost, database: process.env.db, user: process.env.user, password: process.env.password, ssl: true, });  
   pool.connect()
   .then(client => {
     return client.query('SELECT * FROM xp')
       .then(res => {
         client.release()
       })
       .catch(err => {
         client.release()
         console.log(err.stack)
       })
   })
   pool.query(`SELECT userid,level,xp,username FROM xp ORDER BY level DESC, xp DESC LIMIT 10`, (err, result) => {
     let lb = "";
     let rank = 1;
       for (let i = 0; i < result.rows.length; i++){
         let username = result.rows[i].username;
         lb += `*${rank ++}*.  ${username} - **Lv.${result.rows[i].level}** \n`;
       }
 
       const lbembed = new RichEmbed()
         lbembed.setAuthor(this.client.user.username, this.client.user.avatarURL)
         lbembed.setDescription('Current Top 10 Players!') 
         lbembed.addField('Top 10: ', lb)
         lbembed.setColor('RANDOM')
       msg.channel.send(lbembed);
    pool.end(err => {
   if(err) throw err; 
   })
     })
   }
 }
