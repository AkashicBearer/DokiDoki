const { Command } = require('discord.js-commando')
const { RichEmbed } = require('discord.js');

module.exports = class TimerCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'timer',
			aliases: ['remind'],
			group: 'util',
			memberName: 'timer',
			description: 'Sets a Timer',
			examples: ['timer 100'],
			args: [
				{
					key: 'time',
					prompt: 'Which anime would you like to see?',
					type: 'string',
				}
			]
		});
	}

async run(msg, args, level, err) {
	const ms = require("ms");
	let Timer = args.time;
if(!args.time){
 return  msg.channel.send("Please enter a period of time, with either `s,m or h` at the end!");
}

if(args.time <= 0){
  return msg.channel.send("Please enter a period of time, with either `s,m or h` at the end!");
}

const embed = new RichEmbed()
	embed.setAuthor(this.client.user.username, this.client.user.avatarURL)
	embed.setTitle('Timer Set!')
	embed.setDescription(":white_check_mark: Timer has been set for: " + `${ms(ms(Timer), {long: true})}`)
	embed.setColor('RANDOM')
msg.channel.send(embed)

setTimeout(function(){
  msg.channel.send(`Timer has ended, it lasted: ${ms(ms(Timer), {long: true})}` + msg.author.toString())

}, ms(Timer));
}
}