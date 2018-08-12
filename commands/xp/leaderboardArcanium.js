const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');
const dotenv = require('dotenv');
dotenv.config();

module.exports = class StatsCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'leaderboardarcanium',
            aliases: ['lba','lbarc'],
            group: 'xp',
            memberName: 'leaderboardarcanium',
            description: 'Shows top 10 user with Arcanium ',
            examples: ['<lba']
        })    
    }

  async run(msg, args){
  const { Pool } = require ('pg');    
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, port: 5432, host: process.env.dbhost, database: process.env.db, user: process.env.user, password: process.env.password, ssl: true, });  
  pool.connect()

   pool.query(`SELECT userid, username, arcanium FROM xp ORDER BY arcanium DESC LIMIT 10`, (err, result) => {
     let lb = "";
     let rank = 1;
       for (let i = 0; i < result.rows.length; i++){
         let username = result.rows[i].username;
         lb += `*${rank ++}*.  ${username} - **Arcanium: ${result.rows[i].arcanium}** \n`;
       }

      const lbembed = new RichEmbed()
        lbembed.setAuthor(this.client.user.username, this.client.user.avatarURL)
        lbembed.setDescription('Current Top 10 Players!') 
        lbembed.addField('Top 10 People with Arcanium: ', lb)
        lbembed.setColor('RANDOM')
      msg.channel.send(lbembed);
   pool.end(err => {
  if(err) throw err; 
  })
 })
}
}
