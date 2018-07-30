/*const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class RankCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'rank',
            aliases: ['position','ranking'],
            group: 'xp',
            memberName: 'rank',
            description: 'Check Ranking',
            examples: ['<rank'],
            throttling: {
                usages: 1,
                duration: 15,
            }
        })    
    }


async run(msg, args){
  if (msg.author.bot) return;
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

    pool.query(`SELECT level,xp,userid FROM xp ORDER BY level DESC, xp DESC'`,(err, result) => {       
        let rank;
        for (let i = 0; i < result.rows.length; i++){
            if (result.rows[i].userid == msg.author.id){
                rank = i + 1; 
                break;
            }
        }
    const embed = new RichEmbed();
        embed.setThumbnail(args.user.author.avatarURL)
        embed.setAuthor(msg.author.username , msg.author.avatarURL)
        embed.setTitle(msg.authorusername ` Ranking!`)
        embed.addField('Rank: ', rank, true)
        embed.setColor('RANDOM'); 
    return msg.channel.send(embed);

   pool.end(err => {
  if(err) throw err;
  });
 })
}
} 
*/
