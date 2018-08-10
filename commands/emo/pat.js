const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');
const neko = require("nekos.life");
const superagent = require("superagent");

module.exports = class PatCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'pat',
            aliases: [],
            group: 'emo',
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
            "0": "https://pa1.narvii.com/6401/655b40f33530a90101682ee74c5fa12a673df749_hq.gif",
            "1": "https://i.redd.it/2ohfjanym13z.gif",
            "2": "https://i.imgur.com/65yP14R.gif",
            "3": "https://pa1.narvii.com/5790/0556780a813c3f6d93b0b178187bca7cec5b68dd_hq.gif",
            "4": "http://i.imgur.com/uacfoA9.gif"
        };

        superagent.get('https://nekos.life/api/v2/img/pat')
        .then(body => {
            body = body.body
            const embed = new RichEmbed()
           if(msg.author == args.member){
               embed.setDescription(msg.author + ' pats.. their own head.. everyone needs a little bit of love sometimes ')
               const randm = Math.random();
               embed.setImage(imgselfpat[Math.floor(randm * Object.keys(imgselfpat).length).toString()])
            }else{
                embed.setDescription(msg.author + ' is Patting ' + args.member)
                embed.setImage(body.url)
                }
               embed.setColor("RANDOM")
           return msg.channel.send(embed);
        })
        .catch(err => {
            msg.channel.send("The gif-API is currently down, plese try again later \nOr try to help us get to 200 Servers so we can upgrade our API!")
        })
    
}
};
