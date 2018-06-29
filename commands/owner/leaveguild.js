const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class GuildLeaveCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'leaveguild',
            aliases: ['lg'],
            group: 'owner',
            memberName: 'leaveguild',
            description: 'Make the bot leave a guild',
            examples: ['guildleave ...'],
            args: [
                { 
                 key: 'guildl',
                 prompt: 'Who to add a role to?',
                 type: 'string'
                }
                  ]
});
}
    hasPermission(msg) {
        return this.client.isOwner(msg.author);
    }

async run(msg, args, message){
  if(!args.guildl){
  const embed = new RichEmbed()
      embed.setAuthor(this.client.user.username, this.client.user.avatarURL)  
      embed.setDescription(`Please Specify a guild to leave!`)
      embed.setColor('RANDOM')
  return msg.channel.send(embed);
  };

  const guildf = this.client.guilds.find("name", `${args.guildl}`)
  console.log(guildf.leave());

  const embed1 = new RichEmbed()
      embed1.setAuthor(this.client.user.username, this.client.user.avatarURL)  
      embed1.setDescription('Left the guild: ' + args.guildl)
      embed1.setColor('RANDOM')
  return msg.channel.send(embed1);
  }
};
