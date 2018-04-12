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
	mal.quickSearch('lelouch').then(function(results) {
    	// access and fetch the first character 
    	results.character[0].fetch().then(function(r) {
        	// access and fetch the first anime 
        	r.animeography[0].fetch().then(function(r) {
            console.log(r);
        })
    });
});
       
}
};
