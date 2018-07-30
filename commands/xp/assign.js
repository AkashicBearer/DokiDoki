// Make it read the array
/*
const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class AssignCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'assign',
            aliases: [],
            group: 'xp',
            memberName: 'assign',
            description: 'Assign Attributes',
            examples: ['<assign xpboost 10'],
            throttling: {
                usages: 1,
                duration: 30,
            },
            args:[
                {
                key: 'point',
                prompt: 'How many points to assin',
                type: 'float',
                default: '0'
                }
            ]
        })    
    }


async run(msg, args) {
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

  pool.query(`Select * FROM xp WHERE userid ='${msg.author.id}'`,(err, result) => {
    var point = parseInt(args.point)
    let attribs = ['xpboost', 'arcboost'];
    let lvl = result.rows[0].level
    let points = result.rows[0].points

    if(lvl >= 25 && points >= 1){
        if(attribs == xpboost){
            if(point > points){
                const assign = new RichEmbed()
                    assing.setDescription(`${msg.author.username} Please enter a Valid number of Points to assign.`)
                    assign.setColor(`RED`)
                msg.channel.send(assign);
            }else{
            pool.query(`UPDATE xp SET xpboost = '${result.rows[0].xpboost + point} WHERE userid = '${msg.author.id}'`)
                const assign = new RichEmbed()
                    assign.setAuthor(this.client.user.username, this.client.user.avatarURL)
                    assing.setDescription(`You have Assigned ${point}\`s to XPBoost`)
                    assign.setColor(`GREEN`)
                msg.channel.send(assign);            
            }
        }
        else if(attribs = arcboost){
            if(attribs == arcboost){
                if(point > points){
                    const assign = new RichEmbed()
                        assing.setDescription(`${msg.author.username} Please enter a Valid number of Points to assign.`)
                        assign.setColor(`RED`)
                    msg.channel.send(assign);
                }else{
                pool.query(`UPDATE xp SET arcboost = '${result.rows[0].arcboost + point} WHERE userid = '${msg.author.id}'`)
                    const assign = new RichEmbed()
                        assign.setAuthor(this.client.user.username, this.client.user.avatarURL)
                        assing.setDescription(`You have Assigned ${point}\`s to ArcBoost`)
                        assign.setColor(`GREEN`)
                    msg.channel.send(assign);            
                }
            } 
        } else {
        const assign = new RichEmbed()
            assing.setDescription(`Please Reach Level 25 First!`)
            assign.setColor(`RED`)
        msg.channel.send(assign);
        }
    pool.end(err => {
    if(err) throw err; 
     });    
    }
    })
    }
}
*/
