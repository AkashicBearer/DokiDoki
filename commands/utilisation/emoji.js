const { Command } = require('discord.js-commando')
const { RichEmbed } = require('discord.js');

module.exports = class emojiCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'emoji',
			aliases: ['moji', 'emote'],
			group: 'utilisation',
			memberName: 'emoji',
			description: 'Shows a Users emoji.',
			examples: ['emoji @...'],

			args: [
				{
					key: 'moji',
					label: 'emoji',
					prompt: 'What emoji would you like to see?',
					type: 'string'
				}
			]
		});
	}

	async run(message, args) {
		const EmoteEmbed = new RichEmbed()
			var mes = args.moji;
			if(/\<a?\:.+\:[0-9]+\>/.test(mes)){
				var mojiName = mes.substring(mes.indexOf(":")+1, mes.lastIndexOf(":"))
				var mojiID = mes.substring(1,mes.length-1).substring(mes.lastIndexOf(":"),mes.length)
	            //console.log(mes)
	            //console.log(mojiName)
	            //console.log(mes.charAt(1))

	            if(mes.charAt(1) == 'a'){
	            	var link = "https://cdn.discordapp.com/emojis/"+mojiID+".gif"
	            }else{
	            	var link = "https://cdn.discordapp.com/emojis/"+mojiID+".png"
	            }
	            EmoteEmbed.setTitle(mojiName)
	            EmoteEmbed.setImage(link)
	            EmoteEmbed.setFooter("ID: " + mojiID)
	            message.channel.send(EmoteEmbed)
			}else{
				const moo = require('twemoji')

				moo.parse(
				  args.moji,
				  function(icon, options, variant) {
				    var moj = options.base +  options.size + "/" + icon + options.ext;
				    EmoteEmbed.setImage(moj)
				  }
				)
				message.channel.send(EmoteEmbed)
			}  
    }
};
