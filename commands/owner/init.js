/* 
const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');
const dotenv = require('dotenv');
dotenv.config();

module.exports = class ResetUserCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'resetuser',
            aliases: ['init'],
            group: 'owner',
            memberName: 'resetuser',
            description: 'Reset a User to default values',
            examples: ['<init @user'],
            args: [
            {
                key: 'user',
                prompt: 'Which user would you like to reset?',
                type: 'member'
            }
            ]
        })    
    }
  hasPermission(msg) {
        return this.client.isOwner(msg.author);
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
  pool.query(`SELECT xp, level, arcanium FROM xp WHERE userid = '${args.user.id}'`,(err, result) => {
      pool.query(`UPDATE xp SET xp = 0, level = 1, arcanium = 50 WHERE userid ='${args.user.id}'`)
      if (err) throw err;
    const embed = new RichEmbed();
        embed.setAuthor(this.client.user.username , this.client.user.avatarURL)
        embed.setTitle(`User Resetted: ${args.user.user.username}`)
        embed.addField('New Values:', 'Level: 1\nXP: 0\nArcanium: 50')
        embed.setColor('RANDOM'); 
    return msg.channel.send(embed);
   pool.end(err => {
  if(err) throw err; 
  });
  });
 };
};
*/