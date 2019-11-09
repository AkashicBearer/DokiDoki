const { Command } = require('discord.js-commando');
const { RichEmbed } = require("discord.js")

module.exports = class AddRoleCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'addrole',
            group: 'admin',
            memberName: 'addrole',
            description: 'Add a role to a user.',
            clientPermissions: ["MANAGE_ROLES"],
			args: [
				{
					key: 'person',
					prompt: 'Who would you like to add a role too?',
					type: 'member',
				},
                {
                    key: 'roles',
                    prompt: 'Which role would you like to add to the user?',
                    type: 'role',
                }
			]
        });
    }

    async run(message, args, err){
            
        if(message.author.bot) return;
        if(err) throw err;

        if(message.member.hasPermission("MANAGE_ROLES")){

            let role = message.guild.roles.find("name", args.roles.name); if(err) throw err;

            if(!role){

                let role = message.guild.role.find("id", args.roles.id); if(err) throw err;

            }

            if(args.person.roles.has("name", role.name)){

                const hasRole = new RichEmbed()
                    .setDescription(`Sorry ${message.author.username}, but ${args.person.user.username} already has that role!`)
                    .setColor("RED")
                message.channel.send(hasRole)

            } else {

                if(!args.person){

                    const noUser = new RichEmbed()
                        .setDescription("Please mention a user you would like to add the role to!")
                        .setColor("RED")
                    message.channel.send(noUser);

                } else {

                    if(!args.roles){

                        const noRole = new RichEmbed()
                            .setDescription("Please tell me which role to add! ( Name or Ping ) \n **Case Sensitive**")
                            .setColor("RED")
                        message.channel.send(noRole);

                    } else {

                        const RoleEmbed = new RichEmbed()
                            .setTitle(`Added ${role.name} role to ${args.person.user.username}`)
                            .setDescription(`Role Info: \nRole ID: ${role.id}\nRole Name: ${role.name}\nColor: ${role.color}\nMentionable: ${role.mentionable}`)
                            .setColor(role.color)
                        message.channel.send(RoleEmbed)
                        
                        args.person.addRole(role)

                    }  
                }
            }
        } else {

            const NoPermEmbed = new RichEmbed()
                .setDescription(`Sorry ${message.author.username} but you dont have the permission to do this!`)
                .setColor("RED")
            message.channel.send(NoPermEmbed);
            
        }
    }
}
