const { Command } = require('discord.js-commando');
const { createCanvas, loadImage, Canvas } = require('canvas');
const { MessageEmbed, Discord, MessageAttachment } = require('discord.js');
const MySQL = require("mysql2");

const db = MySQL.createPool({
    connectionLimit: 100,
    host: process.env.host,
    port: "3306",
    user: process.env.user,
    password: process.env.password,
    database: process.env.database,
});

module.exports = class BalanceCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'balance',
            aliases: ['bal'],
            group: 'xp',
            memberName: 'balance',
            description: 'Checck your balance',
            args: [
                {
                    key: 'person',
                    prompt: 'Who would you like to check',
                    type: 'member',
                    default: ``
                }
            ],
            throttling: {
                usages: 1,
                duration: 15,
            }
        })    
	}
	
	async run(message, args) {
        let author = message.author
        let PUser = args.person
        
        db.getConnection(function(err, connection) {

            if (err) {

                console.error('error connecting: ' + err.stack);
                return;

            }

			var Nyan = function ProfileOfUser(a) {

                if(!PUser || PUser.user.id == author.id) {

                    return a = author

                } else {
                    
                    return a = PUser.user

                }

            }

            connection.query(`SELECT * FROM Users WHERE UserID="${Nyan().id}"`, async (err, results) => {

                if (err) throw err;

                if(!results[0]){
	
                    const noUser = new MessageEmbed()
                        .setTitle(`Sorry ${author.username} but you dont have a profile.`)
                        .setDescription(`Please create an account with [prefix]register`)
                        .setThumbnail(author.avatarURL())
                        .setFooter(`Balance v2 || Arcanium v0.0.3`)
                        .setColor("RED")
                    message.channel.send(noUser)

                } else {
            
                    const  UData = JSON.parse(results[0].Stats)

                    const applyText = (canvas, text, UData) => {

                        const ctx = canvas.getContext('2d');
                        let fontSize = 28;

                        do {
                            ctx.font = `${fontSize -= 10}px sans-serif`;    
                        } while (ctx.measureText(text).width > canvas.width - 15);

                        return ctx.font;

                    };

                    const applyText2 = (canvas, text, UData) => {

                        const ctx = canvas.getContext('2d');
                        let fontSize = 24;

                        do {
                            ctx.font = `${fontSize -= 10}px sans-serif`;    
                        } while (ctx.measureText(text).width > canvas.width - 15);

                        return ctx.font;

                    };

                    function NumberCommas(x) {
                        return x.toString().replace(/B(?=(d{3})+(?!d))/g, ",");
                    }

                    const canvas = createCanvas(180, 90)
                    const ctx = canvas.getContext('2d')

                    //Background + Box
                    const background = await loadImage('./commands/xp/wallpaper.jpg');
                    ctx.globalAlpha = 0.75;
                    ctx.drawImage(background, 0, 0, canvas.width, canvas.height)
                    ctx.globalAlpha = 1;

                    ctx.globalAlpha = 0.5;
                    ctx.fillRect(7.5, 7.5, canvas.width-10, canvas.height-10);
                    ctx.globalAlpha = 1.0;

                    const arcoin = await loadImage("https://cdn.discordapp.com/emojis/478210317071941642.png?v=1");
                    ctx.drawImage(arcoin, 15, 25, 50, 50 );

                    ctx.fillStyle = "#ffffff"
                    ctx.font = applyText2(canvas, `${Nyan().username}:`)
                    ctx.fillText(`${Nyan().username}:`, 70, 30)

                    ctx.fillStyle ="#C773EE"
                    ctx.font = applyText(canvas, `${UData.Arcanium}`)
                    ctx.fillText(`${NumberCommas(UData.Arcanium)}` , 80 , 55  )
                    
                    const attachment = new MessageAttachment(canvas.toBuffer(), 'profile.png');
                    message.channel.send(attachment)

                }

            })
        connection.release()
        })
    }
}
