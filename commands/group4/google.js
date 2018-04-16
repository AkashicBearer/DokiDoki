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

		var sit = "";
		var que = args.query;

		var googleSearch = new GoogleSearch({
		  key: 'AIzaSyDbMFIXtCiEDoY26mUBVgN35FlLV9MckKg ',
		  cx: '016729059967415605183:avz5ft7tbxk'
		});
		 
		 
		googleSearch.build({
		  q: que,
		  num: 5, // Number of search results to return between 1 and 10, inclusive 
		  siteSearch: sit // Restricts results to URLs from a specified site 
		}, function(error, response) {
		  var embed = new RichEmbed()
		  embed.setTitle("Your search results")

		  

		  

		  for(var i = 0; i < response.items.length; i++){
		  	var title = response.items[i].title;

		    if(title.length > 30 && title.indexOf(' ',30) > 0){
		    	title = title.substring(0, title.indexOf(' ',30));
		    }

		  	embed.addField(title, "[Link]("+response.items[i].link+")", true)
		  }

		  embed.setThumbnail("https://cognitiveseo.com/blog/wp-content/uploads/2017/10/1000px-Google_-G-_Logo.svg_.png")

		  msg.channel.send(embed)

		});
	}
}