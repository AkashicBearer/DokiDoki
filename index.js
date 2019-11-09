const { CommandoClient } = require("discord.js-commando");
const { RichEmbed } = require('discord.js');
const path = require('path');
const dotenv = require('dotenv');
const mysql = require("mysql");
const MySQL = require('mysql2/promise');
const MySQLProvider = require('discord.js-commando-mysqlprovider');
dotenv.config();

const client = new CommandoClient({
    commandPrefix: '/>',
    unknownCommandResponse: false,
    owner: ['193021560792154112'],
    disableEveryone: true, 
});

MySQL.createConnection({
    host: process.env.host,
    port: "3306",
    user: process.env.user,
    password: process.env.password, 
    database: process.env.database,
}).then((db) => {
    client.setProvider(new MySQLProvider(db));
});

const db = mysql.createPool({
    connectionLimit: 100,
    host: process.env.host,
    port: "3306",
    user: process.env.user,
    password: process.env.password, 
    database: process.env.database,
})

client.registry
    .registerDefaultTypes()
    .registerGroups([
        ['emo', 'Emotions'],
        ['fun', 'Fun'],
        ['random', 'Random'],
	    ['utilisation', 'Util'],
        ['admin', 'Administration'],
	    ['nsfw', 'NSFW'],
      	['owner', 'Owner Commands'],
        ['xp', 'XP Commands '],
        [`ownerxp`, 'Owner XP Commands'],
        ['settings', 'Settings'],
	    ['games', 'Games'],
    ])	
     .registerDefaultGroups()
     .registerDefaultCommands({help: false, ping: false, prefix: true, eval: true})
     .registerCommandsIn(path.join(__dirname, 'commands'));

client.on('error', console.error)

client.on('ready', async () => {

    var nyan2 = function CID(a) {
        return a = client.user.id
    }

    var status = [`with ${client.guilds.size} guilds`, `v0.0.5b`, `do you want some coffee?`, `with ${client.users.size} users!`, `Next Update when?`, "<help for help",`sharing the love`]

    setInterval(function() {

        let randstat = status[Math.floor(Math.random()*status.length)]

        client.user.setPresence({game: { name: randstat }, status: "online"})

    }, 10000)

    db.getConnection(function(err, connection) {

        if (err) {
            console.error('error connecting: ' + err.stack);
            return;
        }

        connection.query(`SELECT * FROM ClientSettings WHERE ClientID = "${nyan2()}"`, function(err, results){

            if(!results[0]){

                if(err) throw err;
                connection.query(`INSERT INTO ClientSettings(ClientID, ReadyEvent, ServerLeaveEvent, ServerJoinEvent) VALUES("385115460397694977","on","on","on") `)

            } else {

                if(results[0].ReadyEvent == "on" || results[0].ReadyEvent == "on".toUpperCase()){

                    console.log(`\n${client.user.username}#${client.user.discriminator} (${nyan2()})) is at your command!\nWith ${client.guilds.size} Guilds & ${client.users.size} Users!`);
                                    
                    const logOn = client.guilds.find(guild => guild.id === '389111570162122752').channels.find(chann => chann.id === "549223834977566721")
                    
                    const logOnEmbed = new RichEmbed()
                        .setTitle(`${client.user.username} is Online!`)
                        .setColor("GREEN")
                        .setThumbnail(client.user.avatarURL)
                        .addField("Guilds", client.guilds.size, true)
                        .addField("Users", client.users.size, true)
                    logOn.send(logOnEmbed)

                } else {

                    console.log(`\n${client.user.username}#${client.user.discriminator} (${nyan2()}) is at your command!\nWith ${client.guilds.size} Guilds & ${client.users.size} Users!`);
               
                }
            } 
        })
        connection.release();
    })
});

db.getConnection(function(err, connection) {

    connection.query(`SELECT * FROM ClientSettings WHERE ClientID = "385115460397694977"`, function(err, results, fields){

        if(!results[0]){

            if(err) throw err;
            
            connection.query(`INSERT INTO ClientSettings(ClientID, ReadyEvent, ServerLeaveEvent, ServerJoinEvent) VALUES("385115460397694977","on","on","on") `)

        } else {

            if(results[0].ServerJoinEvent == "on" || results[0].ServerJoinEvent == "On"){

                client.on('guildCreate', (guildCreate) => {

                    if(results[0].ServerJoinEvent == "on" ||results[0].ServerJoinEvent == "on".toUpperCase()){

                        const JLC = client.guilds.find(guild => guild.id === '389111570162122752').channels.find(chann => chann.id === "549223834977566721")
                        const JCOwner = guildCreate.members.get(guildCreate.ownerID).user.username+"#"+guildCreate.members.get(guildCreate.ownerID).user.discriminator+" ("+guildCreate.ownerID+")"
                        
                        const JCEmbed = new RichEmbed()
                            .setAuthor(client.user.username, client.user.avatarURL)
                            .setTitle(`DokiDoki has joined the guild ${guildCreate.name} (${guildCreate.id})`)
                            .setDescription(`With: ${guildCreate.members.size} members & ${guildCreate.channels.array().length} channels!`)
                            .addField(`Basic Information`, `Guild Onwer: ${JCOwner} (${guildCreate.ownerID})`)
                            .setThumbnail(guildCreate.iconURL)
                            .setColor(`#00FF00`)
                        JLC.send(JCEmbed);

                    }
                })
            }

            if(results[0].ServerLeaveEvent == "on" || results[0].ServerLeaveEvent == "On"){

                client.on(`guildDelete`, (guildDelete) => {

                    if(results[0].ServerLeaveEvent == "on" ||results[0].ServerLeaveEvent == "on".toUpperCase()){

                        const DLC = client.guilds.find(guild => guild.id === '389111570162122752').channels.find(chann => chann.id === "549223834977566721")
                        const DLOwner = guildCreate.members.get(guildCreate.ownerID).user.username+"#"+guildCreate.members.get(guildCreate.ownerID).user.discriminator+" ("+guildCreate.ownerID+")"
                       
                        const DLEmbed = new RichEmbed()
                            .setAuthor(client.user.username, client.user.avatarURL)
                            .setTitle(`DokiDoki has left the guild ${guildCreate.name} (${guildCreate.id})`)
                            .setDescription(`Basic Information: \nGuild Onwer: ${DLOwner} (${guildDelete.ownerID})\n Guild Size: ${guildDelete.members.size} Members & ${guildDelete.channels.array().length} Channels.`)
                            .setColor(RED)
                        message.DLC.send(DLEmbed);

                    }
                })
            }
        }
        connection.release()
    })
})

client.on('message', (message) => {

    if (message.author.bot) return;
    
    // maybe will put some xp code here if I really feel like..
    // although new xp system will be based on Adventures & other things.

    // Bring back Table flip event?

})

client.login(process.env.token);