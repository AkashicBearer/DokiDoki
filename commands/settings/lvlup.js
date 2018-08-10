const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');


module.exports = class AssignCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'lvlup',
            aliases: [],
            group: 'xp',
            memberName: 'lvlup',
            description: 'Enable or disable lvlup notifications',
            examples: ['<lvlup on'],
            throttling: {
                usages: 1,
                duration: 30,
            },
            args: [
            {
                key: 'attribs',
                prompt: 'Which attribute would you like to assign?',
                type: 'string'
            }
            ]
        })    
    }

async run(msg, args){
  const attribs = ['xpboost','arcboost']
  const { Pool } = require ('pg');    
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, port: 5432, host: process.env.dbhost, database: process.env.db, user: process.env.user, password: process.env.password, ssl: true, });  
  pool.connect()

  const em = new RichEmbed() 

  pool.query(`SELECT * FROM xp WHERE userid = '${msg.author.id}'`,(err, result) => {
    
});
}
}