const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

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

        const author = message.author
        const PUser = args.member.user
        const AvatarEmbed = new MessageEmbed()

        if(!args.member || args.member.id == message.author.id) {

            AvatarEmbed.setTitle(`${author.username} Avatar!`)
            AvatarEmbed.setImage(author.avatarURL())

        } else {

            AvatarEmbed.setTitle(`${PUser.username} Avatar!`)
            AvatarEmbed.setImage(PUser.avatarURL())

        }
            AvatarEmbed.setColor("RANDOM")
        message.channel.send(AvatarEmbed)
    };
}
