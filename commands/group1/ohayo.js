const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class ohayoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'ohayo',
            group: 'group1',
            memberName: 'ohayo',
            description: 'Ohayo Gozaimasu'
        
            args: [
                {
                    key: 'member',
                    label: 'user',
                    prompt: 'Who do you want to say ohayo to?',
                    type: 'member'
                }
            ]
        });
    }

	async run(msg, args) {
        const member = args.member;
        const user = member.user;
        var imgoha = {
            "0":"https://data.whicdn.com/images/49009068/large.png",
            "1":"https://pa1.narvii.com/5905/319c5ddf3a7e04303b642ac9ffc9765669ec8480_hq.gif",
            "2":"http://i.imgur.com/vkBXzXK.gif"
        };
        const embed = new RichEmbed()
            .setDescription('Ohayo, ' + args.member.user + '!')
            .setImage(imgoha[Math.floor(Math.random() * Object.keys(imgoha).length).toString()])
            .setColor(0x23ff12)
        return msg.embed(embed);
    }
};