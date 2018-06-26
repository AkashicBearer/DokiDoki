const { CommandoClient, SQLiteProvider } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');
const oneLine = require('common-tags').oneLine;
const sqlite = require('sqlite');
const path = require('path');
const client = new CommandoClient({
    commandPrefix: '<',
    unknownCommandResponse: false,
    owner: ['193021560792154112', '111469545637605376'],
    disableEveryone: true,      
});
sqlite.open(path.join(__dirname, "settings.sqlite3")).then((db) => {
    client.setProvider(new SQLiteProvider(db));
});
client.registry
    .registerDefaultTypes()
    .registerGroups([
        ['group1', 'Emotions'],
        ['group2', 'Fun'],
        ['group3', 'Random'],
	['group4', 'Util'],
        ['group5', 'Administration'],
	['group6', 'NSFW'],
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

//Login 
client.login(process.env.token);
