const { Command } = require('discord.js-commando');

module.exports = class BanCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'bug',
            aliases: ['burgeport', 'br'],
            group: 'group5',
            memberName: 'bug',
            description: 'Report a Bug',
            examples: ['{Prefix}bug This Image Link is not working: <link>', '{Prefix}bug This command does not reply'],            
            throttling: {
                usages: 2,
                duration: 10
            },
            args: [
                {
                 key: "text",
                 prompt: "What is the bug?",
                 type: "string"
                 }
                  ]
});
}

    
async run(msg, args, ){
     const embed = new RichEmbed()
                embed.setAuthor(msg.author.username, msg.author.avatarURL)
                embed.setDescription(msg.author + ' is waving!')
                embed.setColor(0x23ff12)
    client.guilds.find("name", "Doki Doki Server").channels.find('name','bug-reports').sendMessage(embed);
};
