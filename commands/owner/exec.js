const { Command } = require('discord.js-commando');
const util = require('util');
const { RichEmbed, discord }= require('discord.js');
const tags = require('common-tags');
const escapeRegex = require('escape-string-regexp');
const exec = require('child_process').exec;
const nl = '!!NL!!';
const nlPattern = new RegExp(nl, 'g');

module.exports = class ExecCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'exec',
			group: 'owner',
			memberName: 'exec',
			description: 'Executes JavaScript code.',
			details: 'Only the bot owner(s) may use this command.',
			ownerOnly: true,

			args: [
				{
					key: 'code',
					prompt: 'What code would you like to evaluate?',
					type: 'string'
				}
			]
		});
		this.lastResult = null;
	}
	hasPermission(msg) {
        return this.client.isOwner(msg.author);
    }
	async run(msg, args) {
		function clean(text) {
  			if (typeof(text) === "string")
   				 return text.replace(/`/g,  '`' + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  				else return text;
  			}
  		try {
  		const code = args.code;
     	 let evaled = eval(code);

      	if (typeof evaled !== "string")
        	evaled = require("util").inspect(evaled);
				const embed1 = new RichEmbed()
					embed1.setAuthor(this.client.user.username , this.client.user.avatarURL)
					embed1.setTitle('Executing Code requested by: ' + msg.author.username)
					embed1.setDescription(`Code: \`\`\`js\n${args.code}\`\`\``)
					embed1.addField(`Result:`, `\`\`\`js\n${clean(evaled)}\`\`\``)
					.setColor('RANDOM')
				msg.channel.send(embed1);

		} catch (err) {
			const embed2 = new RichEmbed()
				embed2.setAuthor(this.client.user.username , this.client.user.avatarURL)
				embed2.setDescription(`Error while evaluating: \`${err}\``)
				.setColor('RANDOM')
			msg.channel.send(embed2);
		}
}
}