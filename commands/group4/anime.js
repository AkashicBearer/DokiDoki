const { Command } = require('discord.js-commando')
const { RichEmbed } = require('discord.js');
var mal = require('maljs');

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
					type: 'string',
					default: ''
				}
			]
		});
	}

	async run(msg, args) {
 
// do a quick search 
	mal.quickSearch('naruto').then(function(results) {
        results.anime[0].fetch().then(function(r) {

        	const embed = new RichEmbed()
        	embed.setTitle(r.sn)
        	embed.addField("Description", r.description)
        	embed.setThumbnail(r.cover)

        	msg.channel.send(embed)

   });
});
       
}
};
