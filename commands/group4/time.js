const { Command } = require('discord.js-commando')
const { RichEmbed } = require('discord.js');

module.exports = class timeRollCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'time',
            aliases: [],
            group: 'group4',
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
            "hst": "-10",
            "akst": "-9",
            "pst": "-8",
            "mst": "-7",
            "cst": "-6",
            "est": "-5"
        }

        const zonesDLT= {
            "hst": "-10",
            "akst": "-9",
            "pst": "-8",
            "mst": "-7",
            "cst": "-6",
            "est": "-5"
        }

        if(args.zone){
            var str = args.zone.toLowerCase().replace(/ /g,'');
            var TZ = str;
            if(str.length==3 && str!="gmt" && str!="utc"){
                if(DLT){
                    str = "gmt"+zones[str]; 
                }else{
                    str = "gmt"+zonesDLT[str]; 
                } 
            }else{
              str = "gmt"+str.substring(str.length-2,str.length);  
              if(str.length==3){
                str = str+"+0";
              }
            }

            
            
                if(str.includes("-")){
                    str = str.split('-')[0]+"+"+str.split('-')[1];
                }else if(str.includes("+")){
                    str = str.split('+')[0]+"-"+str.split('+')[1];
                }
                now.setTimezone(str);
        }

        

        var splDate = now.toString().split(' ');
        // 0        1       2   3       4           5               6   
        //Weekday   Month   Day Year    Time        TimezoneGMT    TimezoneShort
        //Fri       Mar     30  2018    00:34:11    GMT+0000       (UTC)

        const months = {
            "Jan": "January",
            "Feb": "Feruary",
            "Mar": "March",
            "Apr": "April",
            "May": "May",
            "Jun": "June",
            "Jul": "July",
            "Aug": "August",
            "Sep": "September",
            "Oct": "October",
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
                    embed.addField("Timezone", TZ.toUpperCase(), true)
                }else{
                    embed.addField("Timezone", "UTC/GMT", true)
                }
                embed.addField("Date", weekday + ", " + month + " " + splDate[2] + ", " + splDate[3])
                
            embed.setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Crystal_Clear_app_clock.svg/1024px-Crystal_Clear_app_clock.svg.png")
            embed.setColor(0x212121)
        return msg.embed(embed);
    } 
};