const { Command } = require('discord.js-commando');
const { createCanvas, loadImage, Canvas } = require('canvas');
const { RichEmbed, Discord, Attachment } = require('discord.js');
const mysql = require("mysql");
const db = mysql.createPool({
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

                let UData = JSON.parse(results[0].Stats)

                if (!results[0]) {

                    const noUser = new RichEmbed()
                        .setTitle(`Sorry ${author.username} but you dont have a profile.`)
                        .setDescription(`Please create an account with [prefix]register`)
                        .setFooter(`Profile v2 & Arcanium v0.0.1`)
                        .setThumbnail(author.avatarURL)
                    message.channel.send(noUser)

                } else {

                    const applyText = (canvas, text, UData) => {

                        const ctx = canvas.getContext('2d');
                        let fontSize = 70;

                        do {
                            ctx.font = `${fontSize -= 10}px sans-serif`;    
                        } while (ctx.measureText(text).width > canvas.width - 300);

                        return ctx.font;

                    };

                    const applyText2 = (canvas, text, UData) => {

                        const ctx = canvas.getContext('2d');
                        let fontSize = 56;

                        do {
                            ctx.font = `${fontSize -= 10}px sans-serif`;
                        } while (ctx.measureText(text).width > canvas.width - 400);

                        return ctx.font;

                    };

                    const applyText3 = (canvas, text, UData) => {

                        const ctx = canvas.getContext('2d');
                        let fontSize = 38;

                        do {
                            ctx.font = `${fontSize -= 1}px sans-serif`;
                        } while (ctx.measureText(text).width > canvas.width - 940);

                        return ctx.font;

                    };

                    const applyText4 = (canvas, text, UData) => {

                        const ctx = canvas.getContext('2d');
                        let fontSize = 38;

                        do {
                            ctx.font = `${fontSize -= 1}px sans-serif`;
                        } while (ctx.measureText(text).width > canvas.width - 840);

                        return ctx.font;

                    };

                    const TC = UData.Title.Color
                    const NC = UData.Name.Color
                    const canvas = createCanvas(1080, 720)
                    const ctx = canvas.getContext('2d')

                    const background = await loadImage('./commands/xp/wallpaper.jpg');
                    ctx.globalAlpha = 0.75;
                    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
                    ctx.globalAlpha = 1;

                    const avatar = await loadImage(Nyan().displayAvatarURL);
                    ctx.fillStyle = '#ffffff';

                    ctx.drawImage(avatar, 0, 0, 280, 280);
                    //Add Name color based on UData.Stats [!]
                    ctx.font = applyText(canvas, UData.Name.Name);
                    ctx.fillText(UData.Name.Name, 300, 80);
                    //Let title take on color of Udata.Title.Color ???[!]
                    ctx.font = applyText2(canvas, UData.Title.Name);
                    ctx.fillText(UData.Title.Name, 330, 130);

                    let clvl = Math.round(((Math.floor(6.66) * (Math.sqrt(6) * UData.Level * (UData.Level+1)) ) / 3.05 ) * 4.25)
                    let olvl = Math.round(((Math.floor(6.66) * (Math.sqrt(6) * (UData.Level-1) * UData.Level) ) / 3.05 ) * 4.25)
                    let nlvl = clvl - olvl
                    let cxp = UData.XP - olvl
                    let cxpp = Math.round(( cxp / nlvl ) * 100)


                    ctx.font = applyText4(canvas, `Level ${UData.Level}: ${cxpp}%`);
                    ctx.fillText(`Level ${UData.Level} ${cxpp}%`, 25, 325);

                    //let HP = ((UData.Attributes.Vit + UData.Title.Bonus.Vit + UData.Weapon.WeaponBonus.Vit + UData.Job.Bonus.Vit) / 10) + UData.HP.HP ;

                    ctx.fillText(`HP ${UData.HP.CHP} / ${UData.HP.HP}`, 300, 275);
                    ctx.fillText(`MP ${UData.Mana.CMana} / ${UData.Mana.MMana}`, 550, 275);

                    const arcoin = await loadImage("https://cdn.discordapp.com/emojis/478210317071941642.png?v=1");
                    ctx.drawImage(arcoin, 30, 345, 50, 50);
                    ctx.font = applyText4(canvas, UData.Arcanium);
                    ctx.fillText(`${UData.Arcanium}`, 90, 385);

                    ctx.font = applyText3(canvas, UData.Weapon.WeaponName);
                    ctx.fillText(`Weapon: ${UData.Weapon.WeaponName}`, 25, 445);

                    ctx.font = applyText3(canvas, UData.Weapon.WeaponDmg);
                    ctx.fillText(`Damage: ${UData.Weapon.WeaponDmg}`, 25, 490);

                    ctx.font = '38px sans-serif';
                    ctx.fillText(`Rank: ${UData.CharRating}`, 25, 540);
                    ctx.fillText(`Class: ${UData.Class}`, 25, 590);

                    ctx.font = applyText3(canvas, UData.Race);
                    ctx.fillText(`Race: ${UData.Race}`, 25, 640);

                    ctx.font = applyText4(canvas, UData.Job.Name);
                    ctx.fillText(`Job: ${UData.Job.Name}`, 25, 690);

                    const attachment = new Attachment(canvas.toBuffer(), 'profile.png');

                    message.channel.send(attachment)

                }

            })

        connection.release()

        })
    }
}