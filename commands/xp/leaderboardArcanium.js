/*const { Command } = require('discord.js-commando');
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
    let { Pool } = require ('pg');    
    let pool = new Pool({ 
      connectionString: process.env.DATABASE_URL, 
      ssl: require, 
    });  
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
*/
