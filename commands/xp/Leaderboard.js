const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');
const mysql = require("mysql2");
const db = mysql.createPool({
    connectionLimit: 100,
    host: process.env.host,
    port: "3306",
    user: process.env.user,
    password: process.env.password,
    database: process.env.database,
});

module.exports = class LeaderboardCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'leaderboard',
            aliases: ['lb', 'lead', 'top'],
            group: 'xp',
            memberName: 'leaderboard',
            description: 'Train to gain random attributes',
            args: [
                {
                    key: 'lbtype',
                    prompt: 'Whoch leader board would u like to check? ( XP, Arc )',
                    type: 'string',
                    default: `xp`
                }
            ],
            throttling: {
                usages: 1,
                duration: 15,
            }
        })
    }

    async run(message, args) {

        const that = this.client;
        let lbtype = args.lbtype

        db.getConnection(function (err, connection) {

            if (err) {

                console.error('error connecting: ' + err.stack);
                return;

            }

            let LbType = function NewLbType(query) {

                if(lbtype == "xp" || lbtype == "xp".toUpperCase()) {

                    return query = `SELECT UserID, JSON_EXTRACT(Stats, '$.XP') AS LBXP, JSON_EXTRACT(Stats, '$.Level') AS LBLV, JSON_EXTRACT(Stats, '$.Name') AS NAME FROM Users ORDER BY LBXP DESC LIMIT 10`
                
                } else if (lbtype == "arc" || lbtype == "arc".toUpperCase()) {

                    return query = `SELECT UserID, JSON_EXTRACT(Stats, '$.Arcanium') AS Arc, JSON_EXTRACT(Stats, '$.Name') AS NAME FROM Users ORDER BY Arc DESC LIMIT 10`

                } else {

                    return query = `SELECT UserID, JSON_EXTRACT(Stats, '$.XP') AS LBXP, JSON_EXTRACT(Stats, '$.Level') AS LBLV, JSON_EXTRACT(Stats, '$.Name') AS NAME FROM Users ORDER BY LBXP DESC LIMIT 10`

                }
            }

           /* if(lbtype != "xp" || lbtype != "xp".toUpperCase() || lbtype != "arc" || lbtype != "arc".toUpperCase()){

                const ErrEmbed = new RichEmbed()
                    .setTitle(`Please Select a Valid Leaderboard type`)
                    .setDescription(`Valid Lb types: \`xp\` & \`arc\``)
                    .setColor("RED")
                message.channel.send(ErrEmbed)

            } else {*/

                connection.query(`${LbType()}` , async (err, results) => {

                    if (err) throw err;

                    let lb = "";
                    let rank = 1;

                    if(lbtype == "xp" || lbtype == "xp".toUpperCase() || !lbtype) {

                        console.log(results)

                        for (let i = 0; i < results.length; i++){

                            //const user = await that.fetchUser(results[i].UserID);

                            lb += `*${rank ++}*. ${results[i].NAME.Name /*user.tag*/} - **Lv.${results[i].LBLV}** \n`;

                        }

                    } else {

                        for (let i = 0; i < results.length; i++){

                            //const user = await that.fetchUser(results[i].UserID);

                            lb += `*${rank ++}*.  ${results[i].NAME.Name/*user.tag*/} - **${results[i].Arc} Arcanium** \n`;

                        }

                    }

                    const lbembed = new RichEmbed()
                        lbembed.addField('Current Top 10: ', lb)
                        lbembed.setFooter(`Lb v1 Arcanium v1`)
                        lbembed.setColor('RANDOM')
                    message.channel.send(lbembed);
                })

            //}

            connection.release()

        })
    }
}