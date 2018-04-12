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
            "01": "January",
            "02": "February",
            "03": "March",
            "04": "April",
            "05": "May",
            "06": "June",
            "07": "July",
            "08": "August",
            "09": "September",
            "10": "October",
            "11": "November",
            "12": "December"
        }
    var anm = args.name+'';

  	var embed = new RichEmbed()
// search my animelist
mal.anime.search(anm)
  .then(result => {
  	var res = result.anime[0];
  	var embed = new RichEmbed()
  	embed.addField("Title", res.title,true)
  	embed.addField("English Title", res.english, true)
  	embed.addField("Description", res.synopsis.toString().replace(/<.*>/g,' ').replace(/&#039;/g,"'"))

  	embed.addField("Episodes", res.type, true)
  	embed.addField("Status", res.status, true)
  	embed.addField("Type", res.english, true)
  	embed.addField("Score", res.score+"/10", true)
  	//embed.addField("Link", res.english, true)

  	var fromspl = res.start_date.toString().split('-');
  	var from = months[fromspl[2]] + " " + fromspl[1] + " " + fromspl[0];
  	var tospl = res.end_date.toString().split('-');
  	var to = months[tospl[2]] + " " + tospl[1] + " " + tospl[0];

  	embed.setFooter(from + " to " + to)
  	embed.setThumbnail(res.image.toString())
   	msg.channel.send(embed)   
  }

  ) // contains the json result on success
  .catch(err => console.log(err));
   
}
};
