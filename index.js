const { CommandoClient, SQLiteProvider } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');
const oneLine = require('common-tags').oneLine;
const sqlite = require('sqlite');
const path = require('path');
//const dotenv = require('dotenv');
//dotenv.config();
const client = new CommandoClient({
    commandPrefix: '<',
    unknownCommandResponse: false,
    owner: ['193021560792154112', '111469545637605376']
,    disableEveryone: true,      
});
const usersOnCooldown = new Set();
sqlite.open(path.join(__dirname, "settings.sqlite3")).then((db) => {
    client.setProvider(new SQLiteProvider(db));
});
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
        ['settings', 'Settings'],
	      ['games', 'Games'],
])	
     .registerDefaultGroups()
     .registerDefaultCommands({help: false, ping: false, prefix: true, eval: true})
     .registerCommandsIn(path.join(__dirname, 'commands'));
	   client.on('error', console.error)
	   client.on('warn', console.warn)
	   client.on('debug', console.log)
	   client.on('ready', () => {
		    console.log(`Client ready; logged in as ${client.user.username}#${client.user.discriminator} (${client.user.id})`);
	  	client.user.setActivity(`with ${client.guilds.size} Servers`);
	})
// Guild Join / Leave 
  client.on("guildCreate", (guildCreate) => { 
      client.user.setPresence({ game: { name: `With ${client.guilds.size} Servers!` }, status: 'online' })

      const channel1 = client.guilds.find("name", "DokiDoki Support").channels.find('name','server-join-leave');
      const joinembed = new RichEmbed()
            joinembed.setAuthor(client.user.username + ' Joined the Guild')
            joinembed.setDescription(`${guildCreate.name}`)
            joinembed.addField(`Guild ID` , `${guildCreate.id}`)
            joinembed.addField('Member Count', `${guildCreate.memberCount}`, true)
            joinembed.addField('Channel Count ' , ` ${guildCreate.channels.array().length}`, true)
            var jownerTag = guildCreate.members.get(guildCreate.ownerID).user.username+"#"+guildCreate.members.get(guildCreate.ownerID).user.discriminator+" ("+guildCreate.ownerID+")"
           joinembed.addField('Server Owner ', jownerTag)
            joinembed.setThumbnail(guildCreate.iconURL)
            joinembed.setColor(`#00FF00`)
            joinembed.setFooter(client.user.username + ' \(' + client.user.id + '\)')
       channel1.send(joinembed)
  });
  client.on("guildDelete", (guildDelete) => {
      client.user.setPresence({ game: { name: `With ${client.guilds.size} Servers!` }, status: 'online' })

      const channel1 = client.guilds.find("name", "DokiDoki Support").channels.find('name','server-join-leave');
        const leaveembed = new RichEmbed()
            leaveembed.setAuthor(client.user.username + ' Left the Guild')
            leaveembed.setDescription(`${guildDelete.name}`)
            leaveembed.addField(`Guild ID` , `${guildDelete.id}`)
            var lownerTag = guildDelete.members.get(guildDelete.ownerID).user.username+"#"+guildDelete.members.get(guildDelete.ownerID).user.discriminator+" ("+guildDelete.ownerID+")"      
            leaveembed.addField('Server Owner: ', lownerTag)
            leaveembed.setThumbnail(guildDelete.iconURL)
            leaveembed.setColor(`#FF0000`)
            leaveembed.setFooter(client.user.username + ' \(' + client.user.id + '\)')
       channel1.send(leaveembed)
  });

// Table Unflip 
// Code Based on Hitori bot unflip table event,
// Credits to @Kami#5253 for inspiration :3

 // temprarily commented out until we can enable and disable this depending on server 
/*
client.on("message", (message) => {
  if(message.author.bot) return;
  var phrases = [
    '>,< ', '💢 Baka! Stop Flipping the tables!', 'Here we go again~', 'Dont Flip the tables, they are expensive!', 'Owww~!', 'Baka!! Baka!!',
    'Didnt I Tell you to stop flipping the tables?', '💢', 'Please Stop flipping the poor tables...', 'Why are you flipping the table?',
    'Calm down Baka!', '💢 Stop! >,<', 'Im Getting tired of this...', 'Ultimate Unflipping Table Technique!', '**sigh**', ' ', '(╯°□°）╯︵ ┻━┻',
    '💢💢💢', '💢BAKA!💢', 'I quit...', 'Roses are red,violets are blue and if you don\'t stop I will flip you', 'Error: 404 Table not Found',
    'Monika should open Doki Doki Flipping Club for people like you...', ''
    ];
  var tf = [
    '(╯°□°）╯︵ ┻━┻', '(╯‵□′)╯︵┻━┻', '◡ ヽ(`Д´)ﾉ ┻━┻', '(╯°Д°）╯︵ /(.□ . )', '┻━┻︵╰(‵□′)╯︵┻━┻', 'ミ(ノ￣^￣)ノ≡≡≡≡≡━┳━☆()￣□￣)/', '(ﾉ≧∇≦)ﾉ ﾐ ┸┸)`νﾟ)･;’.',
    '⌒┫ ┻ ┣ ⌒┻☆)ﾟ⊿ﾟ)ﾉWTF!', '(ノ｀m´)ノ ~┻━┻ (/o＼)', '(ﾉ｀A”)ﾉ ⌒┫ ┻ ┣ ┳☆(x x)', '.::･┻┻☆()ﾟOﾟ)', 'ﾐ┻┻(ﾉ>｡<)ﾉ', '(ﾉ≧∇≦)ﾉ ﾐ ┸━┸', '(╯ರ ~ ರ）╯︵ ┻━┻',
    '(ﾉ´･ω･)ﾉ ﾐ ┸━┸', '(ノಥ,_｣ಥ)ノ彡┻━┻', '┻━┻ ︵ ¯\(ツ)/¯ ︵ ┻━┻', ''
  ];
  var tableunflip = [
    '┣ﾍ(≧∇≦ﾍ)… (≧∇≦)/┳━┳', 'ヘ(´° □°)ヘ┳━┳', '(ヘ･_･)ヘ┳━┳', '┬──┬ ¯\_(ツ)','┬──┬ ノ( ゜-゜ノ)','┣ﾍ(^▽^ﾍ)Ξ(ﾟ▽ﾟ*)ﾉ┳━┳'
  ];
  var random = Math.floor(Math.random() * phrases.length);
  var unflip = Math.floor(Math.random() * tableunflip.length);
  
  for (var i = 0; i < tf.length; i++) {
  if (message.content.includes(tf[i])) {
     message.channel.send(tableunflip[unflip] + ' ' + phrases[random]);
  break;
  }
  break;
  }
});
*/

/*
client.on("message", (message) => {
if (!usersOnCooldown.has(message.author.id)){
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;
    let { Pool } = require ('pg');    
    let pool = new Pool({ 
      connectionString: process.env.DATABASE_URL, 
      ssl: require, 
    });  
      pool.connect()
        .then(client => {
    return client.query('SELECT * FROM xp')
      .then(res => {
        client.release()
      })
      .catch(err => {
        client.release()
        console.log(err.stack)
      })
  })

  let xpgen, level;
  pool.query(`SELECT * FROM xp WHERE userid = '${message.author.id}'`,(err, result) => {
  if (!result.rows[0]){
    level = 1;
    pool.query(`INSERT INTO xp(userid, username, xp, level, arcanium, points, xpboost, arcboost, hp, advhp, dmg) VALUES('${message.author.id}','${message.author.username}', 0, ${level}, 50, 10, 0, 0, 100, 100, 10)`)

  }else{
    let level = result.rows[0].level
    let arcanium = result.rows[0].arcanium
    let points = result.rows[0].points
    let hp = result.rows[0].hp
    let curhp = result.rows[0].advhp
    let dmg = result.rows[0].dmg
    if (result.rows[0].xp >= process.env["Level_" + (level + 1) + "_xp_cap"]){
  pool.query(`UPDATE xp SET level = ${level + 1}, arcanium = ${arcanium + 50}, points = '${points + 10}', hp = '${hp + 100}', advhp = '${curhp + 100}', dmg = ${dmg + 10} WHERE userid='${message.author.id}'`)
      const embed3 = new RichEmbed()
        embed3.setAuthor(client.user.username, client.user.avatarURL)
        embed3.setTitle(message.author.username + ' has leveled Up!')
        embed3.setThumbnail(message.author.avatarURL)
        let addhp = 100;
        let arcrew = 50;
        let addpoint = 10;
        embed3.setDescription(`Congratulations! You Have Leveled up to level ${result.rows[0].level+1}!\n Reward: ${addhp} HP, ${addpoint} points and ${arcrew} Arcanium`)
    embed3.setColor('RANDOM')
      message.channel.send(embed3);
    }
    const xpgen = 2
     let xp = result.rows[0].xp;
    pool.query(`UPDATE xp SET xp = ${xp + xpgen} WHERE userid = '${message.author.id}'`)
  }
  pool.end(err => {
  if(err) throw err; 
  })
});

usersOnCooldown.add(message.author.id);
  setTimeout(() => {
     usersOnCooldown.delete(message.author.id);
  }, 60000);
}
});
*/
//Login 
client.login(process.env.token);
