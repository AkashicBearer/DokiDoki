/*const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class AttributeCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'attributes',
            aliases: ['attri',],
            group: 'xp',
            memberName: 'attributes',
            description: 'Check your Atrributes!',
            examples: ['<attributes'],
            throttling: {
                usages: 1,
                duration: 30,
            }
        })    
    }


async run(msg, args) {
if (msg.author.bot) return;
  const { Pool } = require ('pg');    
    let pool = new Pool({ 
      connectionString: process.env.DATABASE_URL, 
      ssl: require, 
    });  
  pool.query(`Select xpboost, arcboost, points, username FROM xp WHERE userid ='${msg.author.id}'`,(err, result) => {
    let points = result.rows[0].points
    let arcboost = result.rows[0].arcboost / 100
    let xpboost = result.rows[0].xpboost / 100
    let username = result.rows[0].username;

     const embed = new RichEmbed()
        .setAuthor(this.client.user.username, this.client.user.avatarURL)
        .setTitle(username + '\` Attributes!')
        .addField('Xp Boost', `${xpboost}% `, true)
        .addField('Arcanium Boost', `${arcboost}%`, true)
        .setColor('GREEN')
        .setThumbnail(msg.author.avatarURL)
    msg.channel.send(embed);
    pool.end(err => {
    if(err) throw err; 
     });
    });
   }
  }
*/
