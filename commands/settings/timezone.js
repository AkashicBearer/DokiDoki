const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');


module.exports = class TimezoneCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'timezone',
            aliases: ['setimezone', 'tz'],
            group: 'settings',
            memberName: 'timezone',
            description: 'Sets your timezoner',
            examples: ['<timezone GMT+2'],
            args: [
            {
                key: 'timezone',
                prompt: 'Which timezone to set?',
                type: 'string'
            },
            ]
        })    
    }

async run(msg, args){
  const validtz = [
    "hst","akst","pst","mst","cst","est","ust","gmt+0","gmt+1","gmt+2","gmt+3","gmt+4","gmt+5","gmt+6","gmt+7","gmt+8","gmt+9","gmt+10","gmt+11","gmt+12","gmt-0","gmt-1","gmt-2","gmt-3","gmt-4","gmt-5","gmt-6","gmt-7","gmt-8","gmt-9","gmt-10","gmt-11","gmt-12"
  ]
  const { Pool } = require ('pg');    
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, port: 5432, host: process.env.dbhost, database: process.env.db, user: process.env.user, password: process.env.password, ssl: true, });  
  pool.connect()

  const em = new RichEmbed()   
  pool.query(`SELECT timezone FROM xp WHERE userid = '${msg.author.id}'`,(err, result) => {
   for (var i = 0; i < validtz.length; i++){    
    if(args.timezone == validtz[i] || args.timezone == validtz[i].toUpperCase()) {
      pool.query(`UPDATE xp SET timezone = '${args.timezone}' WHERE userid ='${msg.author.id}'`)
      if (err) throw err;
      const embed = new RichEmbed();
        embed.setAuthor(this.client.user.username , this.client.user.avatarURL)
        embed.setTitle('New Timezone Set for ' + msg.author.username)
        embed.setDescription(`New timezone is ${args.timezone}`)
        embed.setColor('RANDOM'); 
        pool.end(err => {
          if(err) throw err; 
        })  
      return msg.channel.send(embed);
    } else {      
        em.setAuthor(this.client.user.username , this.client.user.avatarURL)
        em.setTitle('Please Specify a Valid Timezone!')
        em.setDescription('Example: gmt+0')
        em.setColor('RANDOM')
         
        };
      };
      pool.end(err => {
          if(err) throw err; 
        })  
      return msg.channel.send(em);   
    });
  };
};
