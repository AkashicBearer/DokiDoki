const { Command } = require('discord.js-commando')
const { RichEmbed } = require('discord.js');
var mal = require('maljs');

module.exports = class characterCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'character',
			aliases: ['char'],
			group: 'group4',
			memberName: 'character',
			description: 'Shows a character.',
			examples: ['character Name'],

			args: [
				{
					key: 'name',
					label: 'user',
					prompt: 'Which character would you like to see?',
					type: 'string'
				}
			]
		});
	}

	async run(msg, args) {
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
	    var embedst2 = new RichEmbed()

	    mal.quickSearch(anm)
	    .then(result => {
	    	if(result.character.length > 1){
	    		var titles = "";
		  		var titles2 = "";
		  		embed.setTitle("Multiple Characters found");
		  		embedst2.setTitle("Multiple Characters found");
		  		if(result.character.length < 30){
		  			for (var i = 0; i < result.character.length; i++) {  			
			  			titles = titles + "**["+ (i+1) + "]** " + result.character[i].sn.replace(/\_/g," ") + "\n";
			  		}

			  		titles = titles+"\n**Please enter the number of the character you want to view** \n**Or type** `cancel` **to cancel the command**"
			  		embed.setDescription(titles)

			  		msg.channel.send(embed)
		  		}else{
		  			for (var i = 0; i < 30; i++) {  			
			  			titles = titles + "**["+ (i+1) + "]** " + result.character[i].sn.replace(/\_/g," ") + "\n";
			  		}

			  		titles = titles+"\n**Please enter the number of the character you want to view** \n**Or type** `cancel` **to cancel the command**"
			  		embed.setDescription(titles)

			  		msg.channel.send(embed)

			  		for (var i = 30; i < result.character.length; i++) {  			
			  			titles2 = titles2 + "**["+ (i+1) + "]** " + result.character[i].sn.replace(/\_/g," ") + "\n";
			  		}

			  		titles2 = titles2+"\n**Please enter the number of the character you want to view** \n**Or type** `cancel` **to cancel the command**"
			  		embedst2.setDescription(titles2)

			  		msg.channel.send(embedst2)
		  		}
		  		
				inputAn(result.character)

		  	}else {
		  		result.character[0].fetch().then(res => {
		  			console.log(res)
		  			embed.setTitle(res.sn.replace(/\_/g," "))

		  			//if(res.pictures[0]){
			  			//var thum = res.pictures[0];
			  			//thum = thum.substring(thum.indexOf("https",2),thum.length)
			  			embed.setThumbnail(res.cover)
		  			//}
		  			var desc = res.description.replace(/\&quot\;/g,'"').replace(/\&apos\;/g,"'");
		  			if(desc.length > 2048){
				        desc = desc.substring(0,2047).substring(0,desc.lastIndexOf('.'))
				    }
		  			embed.setDescription(desc)
		  			embed.addField("Link", "https://myanimelist.net/"+res.path)


		  			if(res.mangaography.length > 0){
		  				var mangas = "";
		  				for (var i = 0; i < res.mangaography.length; i++) {
		  					if(i+1 < res.mangaography.length){
		  						if(res.mangaography[i].sn != res.mangaography[i+1].sn){
			  						mangas = mangas + "`" + res.mangaography[i].sn.replace(/\_/g," ") + "`";
			  						mangas = mangas + ", ";
			  					}
		  					}else{
		  						mangas = mangas + "`" + res.mangaography[i].sn.replace(/\_/g," ") + "`";
		  					}
		  				}
		  				embed.addField("Manga", mangas)
		  			}


		  			if(res.animeography.length > 0){
		  				var animes = "";
		  				for (var i = 0; i < res.animeography.length; i++) {
		  					if(i+1 < res.animeography.length){
		  						if(res.animeography[i].sn != res.animeography[i+1].sn){
			  						animes = animes + "`" + res.animeography[i].sn.replace(/\_/g," ") + "`";
			  						animes = animes + ", ";
			  					}
		  					}else{
		  						animes = animes + "`" + res.animeography[i].sn.replace(/\_/g," ") + "`";
		  					}
		  				}

		  				embed.addField("Anime", animes)
		  			}

		  			msg.channel.send(embed)
		  		})
	    	}
	    })
	    .catch(err => {
	    	console.log(err)
	    	msg.channel.send("Something went wrong!")
	    })



	    function inputAn(anarr){
		  	msg.channel.awaitMessages(m => m.author.id == msg.author.id, { max: 1, time: 30000, errors: ['time'] })
            .then(collected => {
            	if(collected.first().content == 'cancel'){
        			msg.channel.send('Command canceled.')
        		}else if(parseInt(collected.first().content,10)-1 == 'NaN' || parseInt(collected.first().content,10)-1 < 0){
        			msg.channel.send('This is not a valid number, please try again.')
        			inputAn(anarr)
        		}else{
        			var embed2 = new RichEmbed()
                	anarr[parseInt(collected.first().content,10)-1].fetch().then(res => {
                		embed2.setTitle(res.sn.replace(/\_/g," "))

		  			//if(res.pictures[0]){
			  			//var thum = res.pictures[0];
			  			//thum = thum.substring(thum.indexOf("https",2),thum.length)
			  			embed2.setThumbnail(res.cover)
		  			//}

		  			var desc = res.description.replace(/\&quot\;/g,'"').replace(/\&apos\;/g,"'");
		  			if(desc.length > 2048){
				        desc = desc.substring(0,2047).substring(0,desc.lastIndexOf('.'))
				    }
		  			embed2.setDescription(desc)
		  			embed2.addField("Link", "https://myanimelist.net/"+res.path)


		  			if(res.mangaography.length > 0){
		  				var mangas = "";
		  				for (var i = 0; i < res.mangaography.length; i++) {
		  					if(i+1 < res.mangaography.length){
		  						if(res.mangaography[i].sn != res.mangaography[i+1].sn){
			  						mangas = mangas + "`" + res.mangaography[i].sn.replace(/\_/g," ") + "`";
			  						mangas = mangas + ", ";
			  					}
		  					}else{
		  						mangas = mangas + "`" + res.mangaography[i].sn.replace(/\_/g," ") + "`";
		  					}
		  				}
		  				embed2.addField("Manga", mangas)
		  			}


		  			if(res.animeography.length > 0){
		  				var animes = "";
		  				for (var i = 0; i < res.animeography.length; i++) {
		  					if(i+1 < res.animeography.length){
		  						if(res.animeography[i].sn != res.animeography[i+1].sn){
			  						animes = animes + "`" + res.animeography[i].sn.replace(/\_/g," ") + "`";
			  						animes = animes + ", ";
			  					}
		  					}else{
		  						animes = animes + "`" + res.animeography[i].sn.replace(/\_/g," ") + "`";
		  					}
		  				}

		  				embed2.addField("Anime", animes)
		  			}

		  			msg.channel.send(embed2)

	            })
                .catch()
                }
            })
            .catch(err => {
            	console.log(err)
            	msg.channel.send('The Time to reply ran out, please try again.');
            })
		}
	}
}