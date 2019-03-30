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

module.exports = class dlceventCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'dlcevent',
            aliases: ['dlce'],
            group: 'owner',
            memberName: 'dlcevent',
            description: 'Turn on or Off the dlc event log.',
            examples: ['{prefix}dlcevent off'],
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
        db.query(`SELECT ServerLeaveEvent FROM ClientSettings WHERE ClientID = ${this.client.user.id}`, function(err, results, fields){
            if(err) throw err;
            for (var i = 0; i < response.length; i++){
                if(err) throw err;
                if(args.status == response[i] || args.status == response[i].toUpperCase()){
                    db.query(`UPDATE ClientSettings SET ServerLeaveEvent = "${args.status}"`)
                    const StatusEmbed = new RichEmbed()
                        .setTitle(`Status of DLC Event has been Changed!`)
                        .setDescription(`The DLC Event status has been changed from ${results[0].ServerLeaveEvent} to ${args.status}`)
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