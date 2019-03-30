const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');
const mysql = require(`mysql`)
const db = mysql.createConnection({
    host: process.env.host,
    port: "3306",
    user: process.env.user,
    password: process.env.password, 
    database: process.env.database,
})

module.exports = class ReadyEventCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'readyevent',
            aliases: ['rev'],
            group: 'owner',
            memberName: 'readyevent',
            description: 'Turn on or Off the ready event log.',
            examples: ['{prefix}readyevent off'],
            args: [
                {
                    key:'status',
                    type:'string',
                    prompt: 'Do you want to turn on or off the event?',
                }
            ]
        })    
    }
   	hasPermission(message) {
        return this.client.isOwner(message.author);
    }

    async run(message, args){
        let response = ["on", "off", "Off", "On"]
        const ErrorEmbed = new RichEmbed()
        db.query(`SELECT ReadyEvent FROM ClientSettings WHERE ClientID = ${this.client.user.id}`, function(err, results, fields){
            if(err) throw err;
            for (var i = 0; i < response.length; i++){
                if(err) throw err;
                if(args.status == response[i] || args.status == response[i].toUpperCase()){
                    db.query(`UPDATE ClientSettings SET ReadyEvent = "${args.status}"`)
                    const StatusEmbed = new RichEmbed()
                        .setTitle(`Status of Ready Event has been Changed!`)
                        .setDescription(`The Ready Event status has been changed from ${results[0].ReadyEvent} to ${args.status}`)
                        .setColor("GREEN")
                    return message.channel.send(StatusEmbed);
                } else {
                    ErrorEmbed.setColor("RED")
                    ErrorEmbed.setDescription(`Please Put a valid Status ( on or off )`)
                }
            }
        db.end()
        return message.channel.send(ErrorEmbed)
        })
	};
};