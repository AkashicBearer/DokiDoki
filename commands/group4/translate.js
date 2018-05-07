const { Command } = require('discord.js-commando')
const { RichEmbed } = require('discord.js');

module.exports = class translateCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'translate',
            aliases: ['t', 'tl'],
            group: 'group4',
            memberName: 'translate',
            description: 'Translate a Text, or detect the Language',
            examples: ['translate Hello World +de', 'tl Hallo Welt -de +en', 't Hallo Welt -de'],
            guildOnly: true,
            args: [
                {
                    key: 'text',
                    prompt: 'what to translateulate',
                    type: 'string',
                    default: ''
                }
            ]
        });
    }
async run(msg, args){
        const translate = require('google-translate-api');
        
            

        var inp = args.text;
        var txt = inp;
        if(inp.search(/\+[a-zA-Z]/) > 0 || inp.search(/\-[a-zA-Z]/) > 0){
            
            //to language specified
            if(inp.search(/\+[a-zA-Z]/) > 0){
                var to = inp.substring(inp.search(/\+[a-zA-Z]/)+1, inp.search(/\+[a-zA-Z]/)+3);
                txt = txt.substring(0, inp.search(/\+[a-zA-Z]/))
            }else{
                var to = "en";
            }

            //from language specified
            if(inp.search(/\-[a-zA-Z]/) > 0){
                if(txt.search(/\-[a-zA-Z]/) > 0){
                    txt = txt.substring(0, inp.search(/\-[a-zA-Z]/))
                }
                var from = inp.substring(inp.search(/\-[a-zA-Z]/)+1, inp.search(/\-[a-zA-Z]/)+3);

                translate(`${txt}`, {from: `${from}`, to: `${to}`}).then(res => {
                    const embed = new RichEmbed()
                    embed.setColor('RANDOM');
                    console.log(res);
                    embed.setTitle("Translating from: " + res.from.language.iso)
                    embed.addField('Input', "```" + txt + "```")
                    embed.addField('Output', "```" + res.text + "```");
                    msg.channel.send(embed);
                }).catch(err => {
                    const embed = new RichEmbed()
                    embed.setTitle("Something went wrong!")
                    embed.setDescription("Did you choose the right language code?\nCheck [here](https://cloud.google.com/translate/docs/languages)")
                    msg.channel.send(embed);
                    console.log(err);
                })   

            }else{
                translate(`${txt}`, {to: 'en'}).then(res => {
                    const embed = new RichEmbed()
                    embed.setColor('RANDOM');
                    console.log(res);
                    embed.setTitle("Translating from: " + res.from.language.iso)
                    embed.addField('Input', "```" + txt + "```")
                    embed.addField('Output', "```" + res.text + "```");
                    msg.channel.send(embed);
                }).catch(err => {
                    const embed = new RichEmbed()
                    embed.setTitle("Something went wrong!")
                    embed.setDescription("Did you choose the right language code?\nCheck [here](https://cloud.google.com/translate/docs/languages)")
                    msg.channel.send(embed);
                    console.log(err);
                })   
            }

        }else{
            translate(`${txt}`, {to: 'en'}).then(res => {
                const embed = new RichEmbed()
                embed.setColor('RANDOM');
                console.log(res);
                embed.setTitle("Translating from: " + res.from.language.iso)
                embed.addField('Input', "```" + txt + "```")
                embed.addField('Output', "```" + res.text + "```");
                msg.channel.send(embed);
               }).catch(err => {
                const embed = new RichEmbed()
                    embed.setTitle("Something went wrong!")
                    msg.channel.send(embed);
                    console.log(err);
               })   
        }

        
        
        
        

    }
};