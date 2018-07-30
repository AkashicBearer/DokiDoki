const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');


module.exports = class prefixCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'prefix',
            aliases: [],
            group: 'settings',
            memberName: 'prefix',
            description: 'Sets the prefix for the Server (Admin command)',
            examples: ['<prefix +'],
            UserPermissions: ['ADMINISTRATOR'],
            args: [
            {
                key: 'pref',
                prompt: 'Which user would you like to check?',
                type: 'string'
            }
            ]
        })    
    }

    async run(msg, args){
          const { Pool } = require ('pg');    
          const pool = new Pool({ connectionString: process.env.DATABASE_URL, 
               port: 5432, 
               host: process.env.dbhost, 
               database: process.env.db, 
               user: process.env.user, 
               password: process.env.password, 
               ssl: true, 
              });  
          pool.connect()
          .then(client => {
            return client.query('SELECT * FROM settings')
              .then(res => {
                client.release()
              })
              .catch(err => {
                client.release()
                console.log(err.stack)
              })
          })

          pool.query(`SELECT guildid, prefix FROM settings WHERE guildid = '${msg.guild.id}'`,(err, result) => {
          if (!result.rows[0]){
            pool.query(`INSERT INTO settings(guildid, prefix, guildname) VALUES('${msg.guild.id}', '${args.pref}', '${msg.guild.name}')`)
          }else{
            pool.query(`UPDATE settings SET prefix = '${args.pref}' WHERE guildid='${msg.guild.id}'`)
          }

          
          pool.end(err => {
            if(err) throw err; 
          })

          })
          var embed = new RichEmbed()
          embed.setTitle("Prefix set!")
          embed.setDescription("My prefix was set to " + args.pref)
          embed.setFooter("Make sure to join my Support server if you ever forget the new prefix")
          embed.setColor('RANDOM')
          embed.setThumbnail(msg.guild.iconURL)
          msg.channel.send(embed)

        
    }
}