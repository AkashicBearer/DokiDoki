const { CommandoClient } = require("discord.js-commando");
const { RichEmbed } = require('discord.js');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();

const MySQLProvider = require('./mysql.provider');
const MySQLi = require("mysql2")
const MySQL = require('mysql2/promise');

const client = new CommandoClient({
    commandPrefix: '<',
    owner: ['193021560792154112'],
    invite: "https://discord.gg/gjv2SZU",
    unknownCommandResponse: false,
    disableEveryone: true
});


MySQL.createConnection({
    host: process.env.host,
    port: "3306",
    user: process.env.user,
    password: process.env.password,
    database: process.env.database,
}).then((db) => { 
    client.setProvider(new MySQLProvider(db))
}).catch((err) => { 
    console.log(err)
})

const db = MySQLi.createPool({
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
        ['emo', 'Emotions'], ['fun', 'Fun'],
        ['utilisation', 'Util'],
        ['admin', 'Administration'], ['nsfw', 'NSFW'],
      	['owner', 'Owner Commands'], ['xp', 'XP Commands '],
    ])	
     .registerDefaultGroups()
          .registerDefaultCommands({help: false, ping: false, prefix: true, eval: true, unknownCommand: false})
     .registerCommandsIn(path.join(__dirname, 'commands'))
     .registerDefaultCommands({unknownCommand: false});

client.once('ready', () => {

    console.log(`\nLogged in as ${client.user.tag} (${client.user.id})\nMay we all climb the tower!`);
    
    var status = ["v0.1.0a", "<help for commands", "Under Recode to DJSv12"]

    setInterval(function() {

        let randstat = status[Math.floor(Math.random()*status.length)]

        client.user.setPresence({activity: { name: `${randstat}` }, status: "online"})

    }, 20000);
    
 });
     
client.on('error', console.error);

client.on(`message`, (message) =>{

    if (message.author.bot) return;

})

client.login(process.env.token);
