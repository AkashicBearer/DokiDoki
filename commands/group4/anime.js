const { Command } = require('discord.js-commando')
const { RichEmbed } = require('discord.js');
var mal = require('maljs');
const MALjs = require('MALjs');

module.exports = class animeCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'anime',
			aliases: [''],
			group: 'group4',
			memberName: 'anime',
			description: 'Shows an anime.',
			examples: ['anime Name'],

			args: [
				{
					key: 'name',
					label: 'user',
					prompt: 'Which anime would you like to see?',
					type: 'string'
				}
			]
		});
	}

	async run(msg, args) {
 
/*	var aniname = ''+args.name;
	mal.quickSearch(aniname).then(function(results) {
        results.anime[0].fetch().then(function(r) {
        	var nam = r.sn.replace('_',' ');
        	const embed = new RichEmbed()
        	embed.setAuthor(nam, r.cover)
        	embed.addField("Description", r.description)
        	embed.setThumbnail(r.cover)

        	msg.channel.send(embed)

   });
});*/


		const mal = new MALjs('DokiDokiBot', 'DokiDoki');

		const months = {
				"00": "",
	            "01": "January ",
	            "02": "February ",
	            "03": "March ",
	            "04": "April ",
	            "05": "May ",
	            "06": "June ",
	            "07": "July ",
	            "08": "August ",
	            "09": "September ",
	            "10": "October ",
	            "11": "November ",
	            "12": "December "
	        }
	     const days = {
	     		"00": "",
	            "01": "1st, ",
	            "02": "2nd, ",
	            "03": "3rd, ",
	            "04": "4th, ",
	            "05": "5th, ",
	            "06": "6th, ",
	            "07": "7th, ",
	            "08": "8th, ",
	            "09": "9th, ",
	            "10": "10th, ",
	            "11": "11th, ",
	            "12": "12th, ",
	            "13": "13th, ",
	            "14": "14th, ",
	            "15": "15th, ",
	            "16": "16th, ",
	            "17": "17th, ",
	            "18": "18th, ",
	            "19": "19th, ",
	            "20": "20th, ",
	            "21": "21st, ",
	            "22": "22nd, ",
	            "23": "23rd, ",
	            "24": "24th, ",
	            "25": "25th, ",
	            "26": "26th, ",
	            "27": "27th, ",
	            "28": "28th, ",
	            "29": "29th, ",
	            "30": "30th, ",
	            "32": "31st, "
	        }


	    var anm = args.name+'';
	    var embed = new RichEmbed()

	// search my animelist
		mal.anime.search(anm)
		  .then(result => {
		  	if(result.anime.length > 1){
		  		var titles = "";

		  		embed.setTitle("Multiple Anime found");
		  		for (var i = 0; i < result.anime.length; i++) {  			
		  			titles = titles + "**["+ (i+1) + "]** " + result.anime[i].title + "\n";
		  		}

		  		titles = titles+"\n**Please enter the number of the Anime you want to view** \n**Or type** `cancel` **to cancel the command**"
		  		embed.setDescription(titles)

				inputAn(result.anime)

		  	}else {
		  		var res = result.anime[0];
		  		embed.addField("Title", res.title,true)
			  	embed.addField("English Title", res.english, true)
			  	embed.addField("Description", res.synopsis.toString().replace(/<.*>/g,' ').replace(/&#039;/g,"'").replace(/\[.*\]/g,' '))

			  	embed.addField("Episodes", res.episodes, true)
			  	embed.addField("Status", res.status, true)
			  	embed.addField("Type", res.type, true)
			  	embed.addField("Score", res.score+"/10", true)
			  	embed.addField("Link", "https://myanimelist.net/anime/"+res.id, true)

			  	var fromspl = res.start_date.toString().split('-');
			  	var tospl = res.end_date.toString().split('-');

			  	if(fromspl[0] == "0000"){
			  		var from = "No releasedate yet";
			  		var to = "";
			  	}else{
			  		if(tospl[0] == "0000"){
			  			var to = "";
			  			var from = "Will start airing in " + months[fromspl[1]] + days[fromspl[2]] + fromspl[0];
			  		}else{
			  			var to = months[tospl[1]]  + days[tospl[2]] + tospl[0];
			  			var from = months[fromspl[1]] + days[fromspl[2]] + fromspl[0] + " to ";
			  		}
			  	}

			  	embed.setFooter(from + " to " + to)
			  	embed.setThumbnail(res.image.toString())
		  	}

		  	
		  	
		  	
		   	msg.channel.send(embed)   

		  }

		  ) // contains the json result on success
		  .catch(err => msg.channel.send("Something went wrong, please try again."));
	   
		  function inputAn(anarr){
		  	msg.channel.awaitMessages(m => m.author.id == msg.author.id, { max: 1, time: 30000, errors: ['time'] })
            .then(collected => {
            		console.log(collected.first().content)
            		if(collected.first().content == 'cancel'){
            			msg.channel.send('Command canceled.')
            		}else if(parseInt(collected.first().content,10)-1 == 'NaN' || parseInt(collected.first().content,10)-1 < 0){
            			msg.channel.send('This is not a valid number, please try again.')
            			inputAn(anarr)
            		}else{
            			var embed2 = new RichEmbed()
	                	var csn = anarr[parseInt(collected.first().content,10)-1]
	                	console.log(csn)
	                	embed2.addField("Title", csn.title,true)
	                	var syn = "";
	                	if(csn.synonyms.length > 0){
				            for(var i = 0; i < csn.synonyms.length; i++){
				                syn = syn+"`"+csn.synonyms[i]+"`";
				                if(i+1 < csn.synonyms.length){
				                    syn=syn+", ";
				                }
				            }
				        }

				        if(syn == '``'){
				        	syn = "None";
				        }

					  	embed2.addField("Synonyms", syn + " ")
					  	embed2.addField("Description", csn.synopsis.toString().replace(/<.*>/g,' ').replace(/&#039;/g,"'"))

					  	embed2.addField("Episodes", csn.episodes, true)
					  	embed2.addField("Status", csn.status, true)
					  	embed2.addField("Type", csn.type, true)
					  	embed2.addField("Score", csn.score+"/10", true)
					  	embed2.addField("Link", "https://myanimelist.net/anime/"+csn.id, true)

					  	var fromcspl = csn.start_date.toString().split('-');
					  	var tocspl = csn.end_date.toString().split('-');
					  	if(fromcspl[0] == "0000"){
					  		var fromc = "No releasedate yet";
					  		var toc = "";
					  	}else{
					  		if(tocspl[0] == "0000"){
					  			var toc = "";
					  			var fromc = "Will start airing in " + months[fromcspl[1]] + days[fromcspl[2]] + fromcspl[0];
					  		}else{
					  			var toc = months[tocspl[1]]  + days[tocspl[2]] + tocspl[0];
					  			var fromc = months[fromcspl[1]] + days[fromcspl[2]] + fromcspl[0] + " to ";
					  		}
					  	}

					  	

					  	embed2.setFooter(fromc + toc)
					  	embed2.setThumbnail(csn.image.toString())

					  	msg.channel.send(embed2)
            		}

            		
            })
            .catch(function(){
            	message.channel.send('The Time to reply ran out, please try again.');
          	})
		  }

	}

};
