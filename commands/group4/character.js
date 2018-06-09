const { Command } = require('discord.js-commando')
const { RichEmbed } = require('discord.js');
var kitsu = require('node-kitsu')

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
	    var embed2 = new RichEmbed()


	    kitsu.findCharacter(anm, 0)
		  .then(result => {
		  	console.log(result[0])
		   		var titles = "";
		   		var titles2 = "";
		   		embed.setTitle("Multiple Characters found");
		   			for (var i = 0; i < result.length; i++) {  			
			   			titles = titles + "**["+ (i+1) + "]** " + result[i].attributes.name + "\n";
			   		}

			   		titles = titles+"\n**Please enter the number of the Character you want to view** \n**Or type** `cancel` **to cancel the command**"
			   		embed.setDescription(titles)

			   		msg.channel.send(embed)
		  		
				inputAn(result)
		   }

		   ) // contains the json result on success
		   .catch(err => {
		   	msg.channel.send("Something went wrong, please try again.")
		   	console.log(err);
		   });




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
	                 	var ani = anarr[parseInt(collected.first().content,10)-1]
	                 		var atts = ani.attributes
	                 		embed2.setTitle(atts.name)
	                 		if(atts.description){
	                 			var des = atts.description.replace(/\<br\/\>/g, "\n").replace(/\<span\sclass\=\"spoiler\"\>(.|[\n\r])*\<\/span\>/g, "")
	                 			if(des.length > 2048){
	                 				des = des.substring(0,2048).substring(0,des.lastIndexOf(".")+1)
	                 			}
	                 			embed2.setDescription(des)	
	                 		}
		                 	embed2.setThumbnail(atts.image.original)
		                 	embed2.setImage(atts.image.original)

		                 	if(atts.names.en){
		 						embed2.addField("English Name", atts.names.en, true)
		                 	}
		                 	if(atts.names.ja_jp){
								embed2.addField("Japanese Name", atts.names.ja_jp, true)
							}
		 					msg.channel.send(embed2)
	                 }
 
		   })
           .catch(err => {

           	msg.channel.send("Something went wrong, please try again. \nIf it still doesn't work, please send a bug report with the `bug` command, include the command you used and the Character you searched for.")
           	console.log(err)
          })
		 }
	}

}