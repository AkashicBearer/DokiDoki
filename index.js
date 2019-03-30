const { CommandoClient } = require("discord.js-commando");
const { RichEmbed } = require('discord.js');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();
const mysql = require("mysql");
const MySQL = require('mysql2/promise');
const MySQLProvider = require('discord.js-commando-mysqlprovider');

const doki = new CommandoClient({ // as of 23/02/19 client will be known as doki
    // only works in this file?
    commandPrefix: '/>', //prefix
    unknownCommandResponse: false,
    owner: ['193021560792154112', '111469545637605376'],
    disableEveryone: true, 
});
MySQL.createConnection({
    host: process.env.host,
    port: "3306",
    user: process.env.user,
    password: process.env.password, 
    database: process.env.database,
}).then((db) => {
    doki.setProvider(new MySQLProvider(db));
});

const connection = mysql.createConnection({
    host: process.env.host,
    port: "3306",
    user: process.env.user,
    password: process.env.password, 
    database: process.env.database,
})


doki.registry
    .registerDefaultTypes()
    .registerGroups([
        ['emo', 'Emotions'],
        ['fun', 'Fun'],
        ['random', 'Random'],
	    ['utilisation', 'Util'],
        ['admin', 'Administration'],
	    ['nsfw', 'NSFW'],
      	['owner', 'Owner Commands'],
      	//['xp', 'XP Commands '],
        ['settings', 'Settings'],
	    ['games', 'Games'],
    ])	
     .registerDefaultGroups()
     .registerDefaultCommands({help: false, ping: false, prefix: true, eval: true})
     .registerCommandsIn(path.join(__dirname, 'commands'));

doki.on('error', console.error)

doki.on('ready', () => {
    connection.connect(function(err) {
        if (err) {
            console.error('error connecting: ' + err.stack);
            return;
        }
    })
    connection.query(`SELECT * FROM ClientSettings WHERE ClientID = "${doki.user.id}"`, function(err, results, fields){
        if(!results[0]){
            if(err) throw err;
            connection.query(`INSERT INTO ClientSettings(ClientID, ReadyEvent, ServerLeaveEvent, ServerJoinEvent) VALUES("${doki.user.id}","on","on","on") `)
            console.log("Settings Created")
        } else {
            if(results[0].ReadyEvent == "on" || results[0].ReadyEvent == "on".toUpperCase()){
                console.log(`${doki.user.username}#${doki.user.discriminator} (${doki.user.id}) is at your command!\nWith ${doki.guilds.size} Guilds & ${doki.users.size} Users!`);
                doki.user.setActivity(`with ${doki.users.size} users on ${doki.guilds.size} guilds!`).then(function(){
                const logOn = doki.guilds.find(guild => guild.id === '389111570162122752').channels.find(chann => chann.id === "549223834977566721")
                const logOnEmbed = new RichEmbed()
                    .setTitle(`${doki.user.username} is Online!`)
                    .setColor("GREEN")
                    .setThumbnail(doki.user.avatarURL)
                    .addField("Guilds", doki.guilds.size, true)
                    .addField("Users", doki.users.size, true)
                logOn.send(logOnEmbed)
                })
            } else {
                console.log(`${doki.user.username}#${doki.user.discriminator} (${doki.user.id}) is at your command!\nWith ${doki.guilds.size} Guilds & ${doki.users.size} Users!`);
            }
        } 
    connection.end()
    });
});

doki.on('guildCreate', (guildCreate) => {
    connection.connect(function(err) {
        if (err) {
            console.error('error connecting: ' + err.stack);
            return;
        }
    })
    connection.query(`SELECT * FROM ClientSettings WHERE ClientID = "${doki.user.id}"`, function(err, results, fields){
        if(!results[0]){
            if(err) throw err;
            connection.query(`INSERT INTO ClientSettings(ClientID, ReadyEvent, ServerLeaveEvent, ServerJoinEvent) VALUES("${doki.user.id}","on","on","on") `)
            console.log("Settings Created")
        } else {
            if(results[0].ServerJoinEvent == "on" ||results[0].ServerJoinEvent == "on".toUpperCase()){
                const JLC = doki.guilds.find(guild => guild.id === '389111570162122752').channels.find(chann => chann.id === "549223834977566721")
                const JCOwner = guildCreate.members.get(guildCreate.ownerID).user.username+"#"+guildCreate.members.get(guildCreate.ownerID).user.discriminator+" ("+guildCreate.ownerID+")"
                const JCEmbed = new RichEmbed()
                    .setAuthor(doki.user.username, doki.user.avatarURL)
                    .setTitle(`Doki Doki has joined the guild ${guildCreate.name} (${guildCreate.id})`)
                    .setDescription(`With: ${guildCreate.members.size} members & ${guildCreate.channels.array().length} channels!`)
                    .addField(`Basic Information`, `Guild Onwer: ${JCOwner} (${guildCreate.ownerID})`)
                    .setThumbnail(guildCreate.iconURL)
                    .setColor(`#00FF00`)
                JLC.send(JCEmbed);
            } else {
                console.log(`${doki.user.username}#${doki.user.discriminator} (${doki.user.id}) has Joined a new Guild!`);
            }
        }
    connection.end()
    })
});

doki.on(`guildDelete`, (guildDelete) => {
    connection.connect(function(err) {
        if (err) {
            console.error('error connecting: ' + err.stack);
            return;
        }
    })
    connection.query(`SELECT * FROM ClientSettings WHERE ClientID = "${doki.user.id}"`, function(err, results, fields){
        if(!results[0]){
            if(err) throw err;
            connection.query(`INSERT INTO ClientSettings(ClientID, ReadyEvent, ServerLeaveEvent, ServerJoinEvent) VALUES("${doki.user.id}","on","on","on") `)
            console.log("Settings Created")
        } else {
            if(results[0].ServerLeaveEvent == "on" ||results[0].ServerLeaveEvent == "on".toUpperCase()){
                const DLC = doki.guilds.find(guild => guild.id === '389111570162122752').channels.find(chann => chann.id === "549223834977566721")
                const DLOwner = guildCreate.members.get(guildCreate.ownerID).user.username+"#"+guildCreate.members.get(guildCreate.ownerID).user.discriminator+" ("+guildCreate.ownerID+")"
                const DLEmbed = new RichEmbed()
                    .setAuthor(doki.user.username, doki.user.avatarURL)
                    .setTitle(`Doki Doki has left the guild ${guildCreate.name} (${guildCreate.id})`)
                    .setDescription(`Basic Information: \nGuild Onwer: ${DLOwner} (${guildDelete.ownerID})\n Guild Size: ${guildDelete.members.size} Members & ${guildDelete.channels.array().length} Channels.`)
                    .setColor(RED)
                message.DLC.send(DLEmbed);
            } else {
                console.log(`${doki.user.username}#${doki.user.discriminator} (${doki.user.id}) has Joined a new Guild!`);
            }
        }
    connection.end()
    })
});

doki.on('message', (message) => {
    if (message.author.bot) return;
    // maybe will put some xp code here if I really feel like..
    // although new xp system will be based on Adventures & other things.

    // Bring back Table flip event?
})

doki.login(process.env.token);