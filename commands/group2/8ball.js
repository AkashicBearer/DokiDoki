const { Command } = require('discord.js-commando')
const { RichEmbed } = require('discord.js');

module.exports = class EightBalllCommand extends Command {
    constructor(client) {
        super(client, {
            name: '8ball',
            aliases: ['eightball', '8b'],
            group: 'group2',
            memberName: '8ball',
            description: 'Ask the magical and wise 8Ball a Question ',
            throttling: {
                usages: 2,
                duration: 1
            },
            args: [
                {
                key: 'text',
                label: 'question',
                prompt: 'What do you want to ask?',
                type: 'string'
                }
            ]
        });
    }
    async run(msg, args) {
    var answer = {
                "0": "It is certain",
                "1": "It is decidedly so",
                "2": " Without a doubt",
                "3": "Yes definitely",
                "4": "You may rely on it",
                "5": "As I see it, yes",
                "6": "Most likely",   
                "7": "Outlook good",
                "8": "Yes",
                "9": "Signs point to yes",
                "10": "Reply hazy try again",
                "11": "Ask again later",
                "12": "Better not tell you now",
                "13": "Cannot predict now",
                "14": "Concentrate and ask again",
                "15": "Don't count on it",
                "16": "My reply is no",
                "17": "My sources say no",
                "18": "Outlook not so good",
                "19": "Very doubtful"
    }
        const embed = new RichEmbed()
            .setAuthor(msg.author.username, msg.author.avatarURL)
            .setTitle(args.text)
            .setDescription("The magical 8Ball Says: \n" + answer[Math.floor(Math.random() * Object.keys(answer).length).toString()])
            .setThumbnail("http://icons.iconarchive.com/icons/barkerbaggies/pool-ball/256/Ball-8-icon.png")
            .setColor(0x212121)
        return msg.embed(embed);
    } 
};
