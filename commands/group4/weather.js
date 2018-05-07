const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');
const weather = require('weather-js');

module.exports = class WeatherCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'weather',
            aliases: ['temp'],
            group: 'group4',
            memberName: 'weather',
            description: 'Search the Weather for your location',
            examples: ['{prifix}weather [location]'],
            guildOnly: true,
            args:[
                {
                    key: 'location',
                    prompt: 'what location to check for',
                    type: 'string',
                    default: ''
                }
            ]
        });
    }
    async run(message, args){
        weather.find({search: args.location, degreeType: 'C'}, function(err, result) {
            if (err) message.channel.send(err);
            if (result === undefined || result.length === 0) {
                message.channel.send('**Please enter a location!**')
                return;
            }
            var current = result[0].current;
            var location = result[0].location;
            const embed = new RichEmbed()
                .setDescription(`**${current.skytext}**`)
                .setAuthor(`Weather for ${current.observationpoint}`)
                .setThumbnail(current.imageUrl)
                .setColor('RANDOM')
                .addField('Timezone',`UTC${location.timezone}`, true)
                .addField('Temperature',`${current.temperature}°C`, true)
                .addField('Feels Like', `${current.feelslike}°C`, true)
                .addField('Winds',current.winddisplay, true)
                .addField('Humidity', `${current.humidity}%`, true)
            return message.channel.send(embed);
        })
      }
};