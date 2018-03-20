const { CommandoClient, SQLiteProvider } = require('discord.js-commando');
const config = require("./config.json");
const mentionHook = new Discord.WebhookClient('425628880188211212', 'SChYDBOMB3rYt2b1_UP_j-KaRQlEkXc6NGti6oBNPlkC4CvWsle8CuS5FKoeTBTuVqTR');
const oneLine = require('common-tags').oneLine;
const sqlite = require('sqlite');
const path = require('path');
const client = new CommandoClient({
    commandPrefix: '<',
    unknownCommandResponse: false,
    owner: ['193021560792154112', '111469545637605376'],
    disableEveryone: true
});

sqlite.open(path.join(__dirname, "settings.sqlite3")).then((db) => {
    client.setProvider(new SQLiteProvider(db));
});

// Command Groups

client.registry
    .registerDefaultTypes()
    .registerGroups([
        ['group1', 'Emotion Commands'],
        ['group2', 'Random Commands'],
        ['group3', 'Bullshit Commands'],
	['group4', 'User Commands'],
	['group5', 'Administration Commands'],
])	
// Console.Log and other stuff -.-
    .registerDefaultGroups()
    .registerDefaultCommands({
	help: true,
	ping: true,
	prefix: true,
	eval: true
})
    .registerCommandsIn(path.join(__dirname, 'commands'));
  client	 
	  .on('error', console.error)
	.on('warn', console.warn)
	.on('debug', console.log)
	.on('ready', () => {
		console.log(`Client ready; logged in as ${client.user.username}#${client.user.discriminator} (${client.user.id})`);
	})
	.on('disconnect', () => { console.warn('Disconnected!'); })
	.on('reconnecting', () => { console.warn('Reconnecting...'); })
	.on('commandError', (cmd, err) => {
		if(err instanceof commando.FriendlyError) return;
		console.error(`Error in command ${cmd.groupID}:${cmd.memberName}`, err);
	})
	.on('commandBlocked', (msg, reason) => {
		console.log(oneLine`
			Command ${msg.command ? `${msg.command.groupID}:${msg.command.memberName}` : ''}
			blocked; ${reason}
		`);
	})
	.on('commandPrefixChange', (guild, prefix) => {
		console.log(oneLine`
			Prefix ${prefix === '' ? 'removed' : `changed to ${prefix || 'the default'}`}
			${guild ? `in guild ${guild.name} (${guild.id})` : 'globally'}.
		`);
	})
	.on('commandStatusChange', (guild, command, enabled) => {
		console.log(oneLine`
			Command ${command.groupID}:${command.memberName}
			${enabled ? 'enabled' : 'disabled'}
			${guild ? `in guild ${guild.name} (${guild.id})` : 'globally'}.
		`);
	})
	.on('groupStatusChange', (guild, group, enabled) => {
		console.log(oneLine`
			Group ${group.id}
			${enabled ? 'enabled' : 'disabled'}
			${guild ? `in guild ${guild.name} (${guild.id})` : 'globally'}.
		`);
	});
// Random Shits

client.on("message", (message) => {
  if (message.author.id === client.user.id || message.author.bot) return;
  if (message.isMentioned("193021560792154112") || message.mentions.everyone || (message.guild && message.mentions.roles.filter(r => message.guild.member("193021560792154112").roles.has(r.id)).size > 0)) {
      if (message.author.id === "193021560792154112") return;
      // Additional Code
      mentionHook.send("You Were Disturbed");
  }
  let args = message.content.split(" ").slice(1);
  if (message.content.startsWith(message.content)) {
    message.channel.send("Im Sorry But Master is Busy!");
  }
});

client.login(process.env.token);
