const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');
const dotenv = require('dotenv');
dotenv.config();

module.exports = class StatsCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'profile',
            aliases: ['xp'],
            group: 'xp',
            memberName: 'profile',
            description: 'Shows a users Profile!',
            examples: ['<profile \n<profile @user'],
            args: [
            {
                 key: 'user',
                prompt: 'Which user would you like to check?',
                type: 'member',
                default: ''
            }
            ]
        })    
    }


async run(msg , args){
  if(msg.author.bot) return;
  const { Pool } = require ('pg');    
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, port: 5432, host: process.env.dbhost, database: process.env.db, user: process.env.user, password: process.env.password, ssl: true, });  
  pool.connect()
  let xp, level;
      if(msg.author.id == args.user.id || !args.user){
        pool.query(`SELECT xp, level, arcanium, hp, advhp, timezone FROM xp WHERE userid ='${msg.author.id}'`,(err, result) => {
          if (!result.rows[0]){
            const em = new RichEmbed()
              .setDescription(`This user hasnt started yet!`)
              .setColor(`RED`)
            msg.channel.send(em);
          } else {
              let arcanium = result.rows[0].arcanium;
              let hp = result.rows[0].hp;
              let curhp = result.rows[0].advhp;
              let level = result.rows[0].level;
              let timezone = result.rows[0].timezone


              const embed = new RichEmbed();
                embed.setAuthor(this.client.user.username , this.client.user.avatarURL)
                embed.setTitle(msg.author.username + '\'s Profile:')
                embed.setThumbnail(msg.author.avatarURL)
                embed.addField('Current HP', `${curhp}/${hp}`)
                embed.addField('Level: ', result.rows[0].level, true)
                embed.addField('Current XP: ', result.rows[0].xp, true)
                embed.addField('Balance: ', `${result.rows[0].arcanium} Arcanium!`)
                if(!timezone){
                  embed.addField('Timezone','No Timezone set')
                }else{
                embed.addField('Timezone:', timezone.toUpperCase(), true)
                }
                embed.setColor('RANDOM'); 
              return msg.channel.send(embed);
              pool.end(err => {
                if(err) throw err; 
              });
              }
            })
          } else {
            pool.query(`SELECT xp, level, arcanium, hp, advhp, timezone FROM xp WHERE userid ='${args.user.id}'`,(err, result) => {
              if (!result.rows[0]){
                const em = new RichEmbed()
                  .setDescription(`This user hasnt started yet!`)
                  .setColor(`RED`)
                msg.channel.send(em);
              } else {
                let arcanium = result.rows[0].arcanium;
                let hp = result.rows[0].hp;
                let curhp = result.rows[0].advhp;
                let level = result.rows[0].level;
                let timezone = result.rows[0].timezone

                const embed = new RichEmbed();
                  embed.setAuthor(this.client.user.username , this.client.user.avatarURL)
                  embed.setTitle(args.user.user.username + '\'s Profile:')
                  embed.setThumbnail(args.user.user.avatarURL)
                  embed.addField('Current HP', `${curhp}/${hp}`)
                  embed.addField('Level: ', result.rows[0].level, true)
                  embed.addField('Current XP: ', result.rows[0].xp, true)
                  embed.addField('Balance: ', `${result.rows[0].arcanium} Arcanium!`)
                  if(!timezone){
                    embed.addField('Timezone','No Timezone set')
                  }else{
                  embed.addField('Timezone:', timezone.toUpperCase(), true)
                  }
                  embed.setColor('RANDOM'); 
                return msg.channel.send(embed);
             pool.end(err => {
            if(err) throw err; 
            });
          }
        });
      }
  }
}
