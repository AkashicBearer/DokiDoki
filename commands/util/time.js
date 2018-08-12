const { Command } = require('discord.js-commando')
const { RichEmbed } = require('discord.js');

module.exports = class timeRollCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'time',
            aliases: [],
            group: 'util',
            memberName: 'time',
            description: 'Shows the Time for the given Timezone \n Currently only UTC and GMT are supprted',
            examples: ['<time', '<time gmt+2', '<time UTC-2'],
            args: [
                {
                    key: 'zone',
                    label: 'Timezone',
                    prompt: 'What Timezone do you want the time for?',
                    type: 'string',
                    default: ''
                }
            ]
        });
    }
    async run(msg, args) {

        const embed = new RichEmbed()
        var time = require('time');
        var now = new time.Date();
        var DLT = true;

        const zones= {
            "hst": "gmt-10",
            "akst": "gmt-9",
            "pst": "gmt-8",
            "mst": "gmt-7",
            "cst": "gmt-6",
            "est": "gmt-5",
            "ust": "gmt+0",
            "utc": "gmt+0"
        }

        const validtz = [
            "hst","akst","pst","mst","cst","est","ust","utc","gmt","gmt+0","gmt+1","gmt+2","gmt+3","gmt+4","gmt+5","gmt+6","gmt+7","gmt+8","gmt+9","gmt+10","gmt+11","gmt+12","gmt-0","gmt-1","gmt-2","gmt-3","gmt-4","gmt-5","gmt-6","gmt-7","gmt-8","gmt-9","gmt-10","gmt-11","gmt-12"
        ]

        if(args.zone){
            var str = args.zone.toLowerCase().replace(/ /g,'');
            var TZ = str;

             for (var i = 0; i < validtz.length; i++){
                if(TZ == validtz[i]){
                    if(zones[validtz[i]]){
                        TZ = zones[validtz[i]]
                    }else{
                        TZ = validtz[i]
                    }
                    break;
                }else{

                }
            }

            if(TZ.includes("gmt") && !TZ.includes("-") && !TZ.includes("+")){
                TZ = "GMT"
                now.setTimezone(TZ);
            }else{
                if(TZ.includes("-")){
                    TZ = TZ.split('-')[0]+"+"+TZ.split('-')[1];
                }else if(TZ.includes("+")){
                    TZ = TZ.split('+')[0]+"-"+TZ.split('+')[1];
                }
                now.setTimezone(TZ);
            }
            sendEmbed(str, now)
        }else{
            const { Pool } = require ('pg');    
              const pool = new Pool({ connectionString: process.env.HEROKU_POSTGRESQL_GREEN_URL, port: 5432, host: process.env.dbhost, database: process.env.db, user: process.env.user, password: process.env.password, ssl: true, });  
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
               pool.query(`SELECT xp, level, arcanium, timezone FROM xp WHERE userid ='${msg.author.id}'`,(err, result) => {
                    let timezone = result.rows[0].timezone
                    if(!timezone){
                        TZ = "GMT"
                        str = "UTC / GMT"
                        now.setTimezone(TZ)
                        sendEmbed(str,now)    
                    }else{
                      var TZ = result.rows[0].timezone;
                      var str = result.rows[0].timezone;
                      console.log(TZ)

                      if(TZ.includes("gmt") && !TZ.includes("-") && !TZ.includes("+")){
                        TZ = "GMT"
                        now.setTimezone(TZ);
                      }else{
                        if(TZ.includes("-")){
                            TZ = TZ.split('-')[0]+"+"+TZ.split('-')[1];
                        }else if(TZ.includes("+")){
                            TZ = TZ.split('+')[0]+"-"+TZ.split('+')[1];
                        }
                        now.setTimezone(TZ);
                    }

                      sendEmbed(str,now)
                    }
               })
               
        }

           

        function sendEmbed(str, now){

            console.log(TZ + " / " + now.toString())
            var splDate = now.toString().split(' ');
            // 0        1       2   3       4           5               6   
            //Weekday   Month   Day Year    Time        TimezoneGMT    TimezoneShort
            //Fri       Mar     30  2018    00:34:11    GMT+0000       (UTC)

            const months = {
                "Jan": "January",
                "Feb": "February",
                "Mar": "March",
                "Apr": "April",
                "May": "May",
                "Jun": "June",
                "Jul": "July",
                "Aug": "August",
                "Sep": "September",
                "Oct": "October",
                "Nov": "November",
                "Dec": "December"
            }

            const weekdays = {
                "Mon": "Monday",
                "Tue": "Tuesday",
                "Wed": "Wednesday",
                "Thu": "Thursday",
                "Fri": "Friday",
                "Sat": "Saturday",
                "Sun": "Sunday"
            }

            const month = months[splDate[1]];
            const weekday = weekdays[splDate[0]];

            embed.setAuthor(msg.author.username, msg.author.avatarURL)
            embed.addField("Time", splDate[4], true)
             if(args.zone){
                embed.addField("Timezone", str.toUpperCase(), true)
            }else{
                embed.addField("Timezone", str.toUpperCase(), true)
            }
            embed.addField("Date", weekday + ", " + month + " " + splDate[2] + ", " + splDate[3])
                
            embed.setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Crystal_Clear_app_clock.svg/1024px-Crystal_Clear_app_clock.svg.png")
            embed.setColor(0x212121)

            return msg.embed(embed);
        }
    }

};

