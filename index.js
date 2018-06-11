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

  client.on("guildCreate", guildCreate => {
    const channel1 = client.guilds.find("name", "DokiDoki Support").channels.find('name','server-join-leave');
      const joinembed = new RichEmbed()
            joinembed.setDescription(`Ive Joined the guild ${guildCreate.name} \n Guild ID: ${guildCreate.id}`)
            joinembed.addField('Information', `The Guild has ${guildCreate.memberCount} Members and ${guildCreate.channels.array().length} Channels\~!`)
            joinembed.setThumbnail(guildCreate.iconURL)
      return channel1.sendMessage(joinembed)
    client.user.setActivity(`With ${client.guilds.size} Servers\~`)
  });

  client.on("guildDelete", guildDelete => {
      const channel1 = client.guilds.find("name", "DokiDoki Support").channels.find('name','server-join-leave');
        const leaveembed = new RichEmbed()
            leaveembed.setDescription(`Ive Left the guild ${guildDelete.name}\n Guild ID: ${guildDelete.id}`)
            leaveembed.setThumbnail(guildDelete.iconURL)
      return channel1.sendMessage(leaveembed)
    client.user.setActivity(`With ${client.guilds.size} Servers\~`)
  });
client.login("NDM1OTAxMzA1MDMwOTY3MzA2.DbfuvQ.3JzYScaasu1l8vc9Ijk3lmDD_Vk");
