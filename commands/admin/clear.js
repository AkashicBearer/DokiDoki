const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js')

module.exports = class ClearCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'clear',
            aliases: ['clean'],
            group: 'admin',
            memberName: 'clear',
            description: 'Deletes messages from a channel.',
            examples: ['{Prefix}purge <user> <number>'],
            clientPermissions: ['MANAGE_MESSAGES'],
            args: [
                {
                    key: "user",
                    prompt: "from who?",
                    type: "member",
                    default: ""
                },
                {
                key: "number",
                prompt: "How many messages to delete??",
                type: "float",
                default: '2'
                }
            ]
        });
    }

    async run(message, args) {

        let user = args.user

        if (message.author.bot) return;

        if (message.member.hasPermission("MANAGE_MESSAGES")) {

            if (!args.number) {

                const purging = new RichEmbed()
                    .setDescription(`You forgot to specify a number so I\'ll only purge 2 message.`)
                    .setColor("GREEN")
                message.channel.send(purging)

            } else {
                
                message.channel.fetchMessages({
                    limit: 100,
                }).then((messages) => {

                if (user) {

                    const filterBy = user ? user.id : Client.user.id;
                    messages = messages.filter(m => m.author.id === filterBy).array().slice(0, parseInt(args.number));

                    }

                    message.channel.bulkDelete(parseInt(args.number)).catch(error => console.log(error.stack));
                });
            }
        } else {

            const noperms = new RichEmbed()
                .setDescription(`Sorry but you dont have the permission to Manage Messages on this server!`)
                .setColor("RED")
            message.channel.send(noperms)

        }
    }
};
