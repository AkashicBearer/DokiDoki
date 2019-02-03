const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');
const neko = require("nekos.life");
const superagent = require("superagent");
const send = require("quick.hook");

module.exports = class PatCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'pat',
            aliases: [],
            group: 'emo',
            memberName: 'pat',
            description: 'Pat a user!',
            args: [
                {
                    key: 'member',
                    prompt: 'Who to pat?',
                    type: 'member',
                },
                {
                    key: 'stuff',
                    prompt: 'What would u like to say?',
                    type: 'string',
                    default: '',
                    validate: stuff => {
                        if (stuff.length < 201) return true;
                        return 'Message Content is above 200 characters';
                    }
                }
            ]
        });
    }
async run(msg, args, neko) {
    if(msg.author.id == args.member.id){
        var imgselfpat = {
            "0": "https://pa1.narvii.com/6401/655b40f33530a90101682ee74c5fa12a673df749_hq.gif",
            "1": "https://i.redd.it/2ohfjanym13z.gif",
            "2": "https://i.imgur.com/65yP14R.gif",
            "3": "https://pa1.narvii.com/5790/0556780a813c3f6d93b0b178187bca7cec5b68dd_hq.gif",
            "4": "http://i.imgur.com/uacfoA9.gif"
         };
         const randm = Math.random();
         const pat1 = new RichEmbed()
            pat1.setAuthor(`${msg.author.username} is Patting themselves.`)
            pat1.setImage(imgselfpat[Math.floor(randm * Object.keys(imgselfpat).length).toString()])
            pat1.setColor(0x23ff12)
            pat1.setFooter(`Powered by Nekos.Life`)
        msg.channel.send(pat1)
    } else { 
        superagent.get('https://nekos.life/api/v2/img/pat')
        .then(body => {
            body = body.body
        const pat = new RichEmbed()
            pat.setAuthor(`${msg.author.username} is giving a pat to ${args.member.user.username}!`)
            pat.setImage(body.url)                    
            pat.setDescription(args.stuff)
            pat.setColor(0x23ff12)
            pat.setFooter(`Powered by Nekos.Life`)
        msg.channel.send(pat)
        })
        .catch(err => {
            msg.channel.send("The gif-API is currently down, plese try again later \n")
        })
    }
    }   
};
