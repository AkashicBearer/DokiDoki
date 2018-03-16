const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class ohayoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'ohayo',
            group: 'group1',
            memberName: 'ohayo',
            description: 'Ohayo Gozaimasu',
        
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
            "2":"http://i.imgur.com/vkBXzXK.gif",
            "3":"https://media.giphy.com/media/LgHAAbUQc0WGI/giphy.gif",
            "4":"https://media1.tenor.com/images/1354aaf201cb439b8ea0073e2a7f4c5a/tenor.gif?itemid=6090876",
            "5":"http://gifimage.net/wp-content/uploads/2017/09/anime-good-morning-gif.gif",
            "6":"https://media1.tenor.com/images/c1b6932d700d593f5b90fc64794f3b43/tenor.gif?itemid=5969490",
            "7":"https://media1.tenor.com/images/74c2f4ca5567526ec24ae931cbf3f27d/tenor.gif?itemid=6116673",
            "8":"http://gifimage.net/wp-content/uploads/2017/09/anime-good-morning-gif-4.gif",
            "9":"https://78.media.tumblr.com/279e8d5d4d94231b52f2cefccd368bbd/tumblr_inline_nzbbviJ2uU1s2e78p_540.gif",
            "10":"https://lh3.googleusercontent.com/-8EhR7UVA8uY/VSujgXIX1MI/AAAAAAABqF8/wu4RUyudRec/w500-h281/15%2B-%2B1",
            "11":"https://media.giphy.com/media/l4Ep7vrgvcjmEXvEI/giphy.gif",
            "12":"https://im-01.gifer.com/C6pS.gif",
            "13":"http://gifimage.net/wp-content/uploads/2017/09/anime-good-morning-gif-7.gif",
            "14":"https://m.popkey.co/49879e/1V3z8.gif",
            "15":"https://media1.tenor.com/images/d58387362b6cea96c4399130b61684f0/tenor.gif?itemid=8388336"
        };
        const embed = new RichEmbed()
            if(message.author == args.member.user){
                .setDescription(message.author + 'just woke up: "Ohayo, minna-san!"')
            }else{
                .setDescription('Ohayo, ' + args.member.user + '!')
            }
            .setImage(imgoha[Math.floor(Math.random() * Object.keys(imgoha).length).toString()])
            .setColor(0x23ff12)
        return msg.embed(embed);
    }
};