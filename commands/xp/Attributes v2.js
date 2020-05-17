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

module.exports = class AttributesCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'attributes',
            aliases: ['attri', 'atrb'],
            group: 'xp',
            memberName: 'attributes',
			description: 'Checck your Attributes',
            throttling: {
                usages: 1,
                duration: 15,
            }
        })    
	}
	
	async run(message) {
        let author = message.author
        
        db.getConnection(function(err, connection) {

            if (err) {

                console.error('error connecting: ' + err.stack);
                return;

            }

			connection.query(`SELECT * FROM Users WHERE UserID="${author.id}"`,async (err, results) => {

                if (err) throw err;

                if(!results[0]){
	
                    const noUser = new RichEmbed()
                        .setTitle(`Sorry ${author.username} but you dont have a profile.`)
                        .setDescription(`Please create an account with [prefix]register`)
                        .setThumbnail(author.avatarURL)
                        .setFooter(`Attribute System v2 || Arcanium v0.0.3`)
                        .setColor("RED")
                    message.channel.send(noUser)

                } else {
            
                    function NumberCommas(x) {
                        return x.toString().replace(/B(?=(d{3})+(?!d))/g, ",");
                    }
                    const  UData = JSON.parse(results[0].Stats)
                    const Att = UData.Character.Attributes
                    const applyText = (canvas, text, UData) => {

                        const ctx = canvas.getContext('2d');
                        let fontSize = 36;

                        do {
                            ctx.font = `${fontSize -= 10}px sans-serif`;    
                        } while (ctx.measureText(text).width > canvas.width - 30);

                        return ctx.font;

                    };

                    const canvas = createCanvas(720, 260)
                    const ctx = canvas.getContext('2d')

                    //Background + Box
                    const background = await loadImage('./commands/xp/wallpaper.jpg');
                    ctx.globalAlpha = 0.75;
                    ctx.drawImage(background, 0, 0, canvas.width, canvas.height)
                    ctx.globalAlpha = 1;

                    ctx.globalAlpha = 0.5;
                    ctx.fillRect(25, 15, canvas.width-30, canvas.height-30);
                    ctx.globalAlpha = 1.0;

                    //Normal Attribs
                    ctx.fillStyle = `#ffffff`
                    ctx.font = "34px sans-serif bolder"
                    ctx.fillText(`Basic Attributes`, 50 , 50)

                    ctx.fillStyle = `#b50707`
                    ctx.font = applyText(canvas, `StrengthL ${NumberCommas(Att.Str)}`);
                    ctx.fillText(`Strength: ${NumberCommas(Att.Str)}`, 70 , 80)

                    ctx.fillStyle = `#059600`
                    ctx.font = applyText(canvas, `Vitality: ${NumberCommas(Att.Vit)}`);
                    ctx.fillText(`Vitality: ${NumberCommas(Att.Vit)}`, 70 , 110)

                    ctx.fillStyle = `#686fbd`
                    ctx.font = applyText(canvas, `Intelligence: ${NumberCommas(Att.Int)}`);
                    ctx.fillText(`Intelligence: ${NumberCommas(Att.Int)}`, 70 , 140)

                    ctx.fillStyle = `#bd8204`
                    ctx.font = applyText(canvas, `Resistance: ${NumberCommas(Att.Res)}`);
                    ctx.fillText(`Resistance: ${NumberCommas(Att.Res)}`, 70 , 170)

                    ctx.fillStyle = `#1caafc`
                    ctx.font = applyText(canvas, `Mana: ${NumberCommas(Att.Mana)}`);
                    ctx.fillText(`Mana: ${NumberCommas(Att.Mana)}`, 70 , 200)
                    
                    // Bonus Attribs

                    ctx.fillStyle = `#ffffff`
                    ctx.font = "34px sans-serif bolder"
                    ctx.fillText(`Bonus Attributes`, 360 , 50)

                    ctx.fillStyle = `#ECECEC`
                    ctx.font = applyText(canvas, `XP Boost: ${NumberCommas(Att.XPB)}`);
                    ctx.fillText(`XP Boost: ${NumberCommas(Att.XPB)}`, 380 , 80)

                    ctx.fillStyle = `#C773EE`
                    ctx.font = applyText(canvas, `Arcanium Boost: ${NumberCommas(Att.ArcmB)}`);
                    ctx.fillText(`Arcanium Boost: ${NumberCommas(Att.ArcmB)}`, 380 , 110)

                    ctx.fillStyle = `#B3F552`
                    ctx.font = applyText(canvas, `Accuracy: ${NumberCommas(Att.Acc)}`);
                    ctx.fillText(`Accuracy: ${NumberCommas(Att.Acc)}`, 380 , 140)

                    // Wep/Arm Attribs

                    //Send Img

                    const attachment = new MessageAttachment(canvas.toBuffer(), 'profile.png');
                    message.channel.send(attachment)

                }
            })

            connection.release()

        })
    }
}