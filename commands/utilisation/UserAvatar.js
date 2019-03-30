const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class UserAvatarCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'avatar',
            aliases: [],
            group: 'utilisation',
            memberName: 'avatar',
            description: 'Check your or someones avatar',
            examples: ['<avatar \n <avatar @user'],
            args: [
                {
					key: 'member',
					prompt: 'Whose avatar to check?',
                    type: 'member',     
                    default: ``           
                }
            ]
        });
    }
    async run(message, args) {
        if (message.author.bot) return;
        const AvatarEmbed = new RichEmbed()
        if(!args.member || args.member.id == message.author.id) {
            AvatarEmbed.setTitle(`${message.author.username} Avatar!`)
            AvatarEmbed.setImage(message.author.avatarURL)
        } else {
            AvatarEmbed.setTitle(`${args.member.user.username} Avatar!`)
            AvatarEmbed.setImage(args.member.user.avatarURL)
        }
            AvatarEmbed.setColor("RANDOM")
        message.channel.send(AvatarEmbed)
    };
}
