const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class PingCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'ping',
			group: 'group4',
			memberName: 'ping',
			description: 'Checks the bot\'s ping to the Discord server.',
			guildOnly: false,
			throttling: {
				usages: 5,
				duration: 10
			}
		});
	}

	async run(msg) {
  function test(){
        const embed = new RichEmbed()
            embed.setAuthor(msg.author.username)
      embed.setDescription('The heartbeat ping is '+Math.round(client.ping)+'ms.')
        return msg.embed(embed)
}
test();
};  
