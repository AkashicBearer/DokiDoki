const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');
const neko = require("nekos.life");
const superagent = require("superagent");

module.exports = class PatCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'pat',
            aliases: [],
            group: 'group1',
            memberName: 'pat',
            description: 'Have a pat',
            args:[
                {
                    key: 'member',
                    prompt: 'Which user do you want to pat?',
                    type: 'string',
                }
            ]
        });
    }
	async run(msg, args, neko) { 
        var imgselfpat = {
            "1": "https://pa1.narvii.com/6401/655b40f33530a90101682ee74c5fa12a673df749_hq.gif",
            "2": "https://i.redd.it/2ohfjanym13z.gif",
            "3": "https://i.imgur.com/65yP14R.gif",
            "4": "https://pa1.narvii.com/5790/0556780a813c3f6d93b0b178187bca7cec5b68dd_hq.gif",
            "5": "http://i.imgur.com/uacfoA9.gif"
        };
    const {body} = await superagent 
        .get('https://nekos.life/api/v2/img/pat')
    const embed = new RichEmbed()
    if(msg.author.id == args.member.id){
       embed.setDescription(msg.author + ' pats.. their own head.. everyone needs a little bit of love sometimes ')
       const randm = Math.random();
       embed.setImage(imgselfpat[Math.floor(randm * Object.keys(imgselfpat).length).toString()])
    }else{
        embed.setDescription(msg.author + ' is Patting ' + args.member)
        embed.setImage(body.url)
        }
       embed.setColor("RANDOM")
   return msg.channel.send(embed);
}
};
