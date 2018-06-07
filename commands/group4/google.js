const { Command } = require('discord.js-commando')
const { RichEmbed } = require('discord.js');
var GoogleSearch = require('google-search');


module.exports = class googleCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'google',
			aliases: ['search'],
			group: 'group4',
			memberName: 'google',
			description: 'Shows the first 5 results on Google',
			examples: ['google Anime'],

			args: [
				{
					key: 'query',
					label: 'query',
					prompt: 'What would you like to search?',
					type: 'string'
				}
			]
		});
	}

	async run(msg, args) {

		var google = require('google')
		 
		google.resultsPerPage = 6
		var nextCounter = 0
		var quer = args.query

		var embed = new RichEmbed()
		 
		google(quer, function (err, res){
		  if (err) console.error(err)

		  embed.setTitle("Google Search for " + quer)
		  embed.setThumbnail("https://cognitiveseo.com/blog/wp-content/uploads/2017/10/1000px-Google_-G-_Logo.svg_.png")
		 
		  for (var i = 0; i < res.links.length; ++i) {
		    var link = res.links[i];
		    if(link.title && link.href && link.description){
		    	embed.addField(link.title, link.description+"\n"+"[More]("+link.href+")\n")
		    }
		  }

		msg.channel.send(embed)
		})


	}
}