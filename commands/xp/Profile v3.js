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

module.exports = class ProfileCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'profile',
            aliases: ['stats'],
            group: 'xp',
            memberName: 'profile/*',
            description: 'Check Someones Status in the RPG System',
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

        db.getConnection(function (err, connection) {

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


                if (!results[0]) {

                    const noUser = new RichEmbed()
                        .setTitle(`Sorry ${author.username} but you dont have a profile.`)
                        .setDescription(`Please create an account with [prefix]register`)
                        .setFooter(`Profile v3 || Arcanium v0.0.3`)
                        .setThumbnail(author.avatarURL())
                    message.channel.send(noUser)

                } else {

                    let UData = JSON.parse(results[0].Stats)

                    const applyText = (canvas, text, UData) => {

                        const ctx = canvas.getContext('2d');
                        let fontSize = 42;

                        do {
                            ctx.font = `${fontSize -= 10}px sans-serif`;    
                        } while (ctx.measureText(text).width > canvas.width - 30);

                        return ctx.font;

                    };

                    const applyText2 = (canvas, text, UData) => {

                        const ctx = canvas.getContext('2d');
                        let fontSize = 32;

                        do {
                            ctx.font = `${fontSize -= 10}px sans-serif`;
                        } while (ctx.measureText(text).width > canvas.width - 30);

                        return ctx.font;

                    };

                    const NormalText = (canvas, text, UData) => {

                        const ctx = canvas.getContext('2d');
                        let fontSize = 28;

                        do {
                            ctx.font = `${fontSize -= 10}px sans-serif`;
                        } while (ctx.measureText(text).width > canvas.width - 30);

                        return ctx.font;

                    };

                    const canvas = createCanvas(500, 180)
                    const ctx = canvas.getContext('2d')
                    //BG
                    const background = await loadImage('./commands/xp/wallpaper.jpg');
                    ctx.globalAlpha = 0.75;
                    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
                    ctx.globalAlpha = 1;

                    ctx.globalAlpha = 0.5;
                    ctx.fillRect(25, 15, canvas.width-30, canvas.height-32);
                    ctx.globalAlpha = 1.0;

                    //Avatar
                    const avatar = await loadImage(Nyan().displayAvatarURL({format: 'png'}));
                    ctx.drawImage(avatar, 35, 28, 125, 125);

                    // UserName
                    ctx.fillStyle = `#${await UData.Name.NameColor}`;
                    ctx.font = applyText(canvas, UData.Name.Username);
                    ctx.fillText(UData.Name.Username, 185, 55);

                    //Title
                    ctx.fillStyle = `#${await UData.Title.TitleColor}`;
                    ctx.font = applyText2(canvas, UData.Title.Name);
                    ctx.fillText(UData.Title.Name, 200, 80);

                    //Level
                    let clvl = Math.round(((Math.floor(6.66) * (Math.sqrt(6) * UData.Level * (UData.Level+1)) ) / 3.05 ) * 4.45)
                    let olvl = Math.round(((Math.floor(6.66) * (Math.sqrt(6) * (UData.Level-1) * UData.Level) ) / 3.05 ) * 4.45)
                    let nlvl = clvl - olvl
                    let cxp = UData.XP - olvl
                    let cxpp = Math.round(( cxp / nlvl ) * 100)

                    ctx.fillStyle = `#FFFFFF`
                    ctx.font = NormalText(canvas, `Level ${UData.Level} ( ${cxpp}% )`)
                    ctx.fillText(`Level ${UData.Level} ( ${cxpp}% )`, 220, 109);

                    //Stuff
                    ctx.fillStyle = `#FFFFFF`
                    ctx.font = '20px sans-serif';
                    ctx.fillText(`HP: ${UData.Character.Health.BattleHP} / ${UData.Character.Health.MaxHP}`, 185, 145);
                    ctx.fillText(`MP: ${UData.Character.Mana.BattleMana} / ${UData.Character.Mana.MaxMana}`, 315, 145);

                    const attachment = new MessageAttachment(canvas.toBuffer(), 'profile.png');

                    message.channel.send(attachment)

                }
            })

            connection.release()

        })
    }
}