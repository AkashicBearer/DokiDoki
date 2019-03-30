const { Command } = require('discord.js-commando');
const { RichEmbed } = require("discord.js")

module.exports = class BanCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'ban',
            group: 'admin',
            memberName: 'ban',
            description: 'Ban a user who is breaking the rules.',
            clientPermissions: ["BAN_MEMBERS"],
			args: [
				{
					key: 'member',
					prompt: 'Who would you like to ban',
					type: 'member',
				},
                {
                    key: 'reason',
                    prompt: 'Why Was He/She Banned?',
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
if(message.member.hasPermission(`BAN_MEMBERS`)){
    if(!args.member){
        const BEmbed = new RichEmbed()
            .setDescription(`Please Mention a user! You cant Ban the air >.<`)
            .setColor("RED")
        message.channel.send(BEmbed)
    } else {
        const BEmbed1 = new RichEmbed()
            BEmbed1.setTitle(`${message.author.username} is about to ban ${args.member.user.username}!`)
            if(!args.reason){
                BEmbed1.setDescription(`${message.author.username} is about to ban ${args.member.user.username} because they did something bad.\nPlease Confirm wether you would like to ban the user by reacting to with :thumbsup: or :thumbsdown:`)
            } else {
                BEmbed1.setDescription(`${message.author.username} is about to ban ${args.member.user.username} because they did something bad.\nReason: ${args.reason}\nPlease Confirm wether you would like to ban the user by reacting to with :thumbsup: or :thumbsdown:`)
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
                        const banned = new RichEmbed()
                            .setDescription(`The User has been banned succesfully!`)
                            .setColor("GREEN")
                        message.channel.send(banned)
                    } else {
                        const banned1 = new RichEmbed()
                            .setDescription(`User was Succefully Banned from the server!\nReason: ${args.reason}`)
                            .setColor("GREEN")
                        message.channel.send(banned1)
                    }
                    args.member.ban(args.reason)
                } else {
                    const noban = new RichEmbed()
                        .setDescription(`You were so bored that you decided to troll people by making them thing youll ban them...`)
                        .setColor("BLACK")
                    message.channel.send(noban)
                }
            })
        })
        .catch(collected => {
            const timeoutEmbed = new RichEmbed()
                .setDescription(`You couldnt decide wether to ban the user or not, so the command was cancelled~`)
                .setColor(`BLACK`)
            message.channel.send(timeoutEmbed)
        });
    } 
    } else {
        const BEmbed2 = new RichEmbed()
            .setDescription(`Sorry ${message.author.username} but you dont the permission to ban users from the server!`)
            .setColor("RED")
        message.channel.send(BEmbed2)
    }
};
};