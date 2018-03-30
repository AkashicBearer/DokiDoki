const { Command } = require('discord.js-commando')
const { RichEmbed } = require('discord.js');
const { time } = require('time');

module.exports = class timeRollCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'time',
            aliases: [],
            group: 'group4',
            memberName: 'time',
            description: 'Shows the Time',
            examples: ['<time'],
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
        var now = new time.Date();

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

        const embed = new RichEmbed()
            embed.setAuthor(msg.author.username, msg.author.avatarURL)
            embed.setTitle("Showing the Time for the Timezone " + now.getTimezone())
            embed.addField("Date", weekday + ", " + month + " " + splDate[2] + " " + splDate[3])
            embed.setThumbnail("https://78.media.tumblr.com/3c7adfb94ec6e8d01cb01c4390143122/tumblr_n3jf0cKF5q1sxexz4o1_1280.png")
            embed.setColor(0x212121)
        return msg.embed(embed);
    } 
};