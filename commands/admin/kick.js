const { Command } = require('discord.js-commando');
const { RichEmbed } = require("discord.js")

module.exports = class KickCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'kick',
            group: 'admin',
            memberName: 'kick',
            description: 'Kick the user who is breaking your rules.',
            clientPermissions: ["KICK_MEMBERS"],
			args: [
				{
					key: 'member',
					prompt: 'Who would you like to kick',
					type: 'member',
				},
                {
                    key: 'reason',
                    prompt: 'Why Was He/She kicked?',
                    type: 'string',
                    default: '',
                    validate: reason => {
                        if (reason.length < 201) return true;
                        return 'Message Content is above 200 characters';
                    }
                }
			]
        });
    }
    
async run(message, args, msg){
if (message.author.bot) return;
if(message.member.hasPermission(`KICK_MEMBERS`)){
    if(!args.member){
        const BEmbed = new RichEmbed()
            .setDescription(`Please Mention a user! You cant kick the air... (Or can you?)`)
            .setColor("RED")
        message.channel.send(BEmbed)
    } else {
        const BEmbed1 = new RichEmbed()
            BEmbed1.setTitle(`${message.author.username} is about to kick ${args.member.user.username}!`)
            if(!args.reason){
                BEmbed1.setDescription(`${message.author.username} is about to kick ${args.member.user.username} because they did something bad.\nPlease Confirm wether you would like to kick the user by reacting to with :thumbsup: or :thumbsdown:`)
            } else {
                BEmbed1.setDescription(`${message.author.username} is about to kick ${args.member.user.username} because they did something bad.\nReason: ${args.reason}\nPlease Confirm wether you would like to kick the user by reacting to with :thumbsup: or :thumbsdown:`)
            }
            BEmbed1.setThumbnail(args.member.user.avatarURL)
            BEmbed1.setColor("RED")
        message.channel.send({embed: BEmbed1}).then(embedMessage => {
            embedMessage.react('👍').then(() => embedMessage.react('👎'))

        const filter = (reaction, user) => {
            return ['👍', '👎'].includes(reaction.emoji.name) && user.id === message.author.id;
        };  
        embedMessage.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
            .then(collected => {
                const reaction = collected.first();
                if (reaction.emoji.name === '👍') {
                    if(!args.reason){
                        const kicked = new RichEmbed()
                            .setDescription(`The User has been kicked succesfully!`)
                            .setColor("GREEN")
                        message.channel.send(kicked)
                    } else {
                        const kicked1 = new RichEmbed()
                            .setDescription(`User was Succefully kicked from the server!\nReason: ${args.reason}`)
                            .setColor("GREEN")
                        message.channel.send(kicked1)
                    }
                    args.member.kick(args.reason)
                } else {
                    const nokick = new RichEmbed()
                        .setDescription(`You were so bored that you decided to troll people by making them thing youll kick them...`)
                        .setColor("BLACK")
                    message.channel.send(nokick)
                }
            })
        })
        .catch(collected => {
            const timeoutEmbed = new RichEmbed()
            .setDescription(`You couldnt decide wether to kick the user or not, so the command was cancelled~`)
            .setColor(`BLACK`)
        message.channel.send(timeoutEmbed)
        });
    } 
    } else {
        const BEmbed2 = new RichEmbed()
            .setDescription(`Sorry but you dont the permission to kick users from the server!`)
            .setColor("RED")
        message.channel.send(BEmbed2)
    }
}
};