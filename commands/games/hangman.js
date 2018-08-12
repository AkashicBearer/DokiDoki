const { Command } = require('discord.js-commando')
const { RichEmbed } = require('discord.js');

module.exports = class hangmanCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'hangman',
            aliases: [],
            group: 'games',
            memberName: 'hangman',
            description: 'Starts a round of Hangman',
            examples: ['<hangman']
        });
    }

    async run(msg, args){
        var info =""
        var guessed = ""
        var wronguess = 0

        const images = [
            'https://i.imgur.com/a1qsjMX.png',
            'https://i.imgur.com/lYgS0bW.png',
            'https://i.imgur.com/q7XJ1Er.png',
            'https://i.imgur.com/e7Wa90s.png',
            'https://i.imgur.com/qIgAuZj.png',
            'https://i.imgur.com/IBkzGSB.png',
            'https://i.imgur.com/F8ZnuoZ.png'
        ]

        const randomWords = require('random-words');
        const word = randomWords({exactly:1, minLength:5})
        var guessin = "`"
        for(var i = 0; i < word[0].length; i++){
            guessin = guessin + "_"
        }
        guessin = guessin + "`"


        var guesses = guessin
        var wowi = "`"+word+"`"
        const embed = new RichEmbed()
        embed.setAuthor(msg.author.username, msg.author.avatarURL)
        embed.setTitle("Hangman")
        embed.setDescription(guessin)
        embed.setThumbnail(images[0])
        embed.setFooter("Type a letter to guess, or type **cancel** to cancel")

        msg.channel.send(embed)
        guess(word[0])

        function guess(word){
            
            msg.channel.awaitMessages(m => m.author.id == msg.author.id, { max: 1, time: 30000, errors: ['time'] })
             .then(collected => {
                var mes = collected.first()
                if(mes.content == "cancel"){
                    return msg.channel.send("Command cancelled.")
                }
                if(mes.content.toLowerCase() == word){
                    win()
                }else if(word.includes(mes.content.toLowerCase())){
                    guessin = ""
                   for(var i = 0; i<wowi.length; i++){
                        if(wowi.charAt(i) == mes.content){
                            guessin = guessin + mes.content.toUpperCase()
                        }else{
                            guessin = guessin + guesses[i]
                        }
                    } 
                    
                    guesses = guessin
                    guessed = guessed + mes.content.toUpperCase() + " "
                    if(guesses.substring(1,guesses.length-1) == word.toUpperCase()){
                        
                        win()

                    }else{
                        embed.setColor('#00FF00')
                        embed.setDescription(guessin +"\n\nAlready guessed: "+guessed+"\nWrong guesses: " + wronguess + info)
                        msg.channel.send(embed)
                        guess(word)
                    }
                    
                    
                }else{
                    if(mes.content.length == 1){
                        if(wronguess == 6){
                            embed.setColor('#FF0000')
                            info = "\n\n**GAME OVER** \nThe word was: " + word.toUpperCase()
                            embed.setDescription(guessin +"\n\nAlready guessed: "+guessed+"\nWrong guesses: " + wronguess + info)
                            embed.setThumbnail(images[wronguess])
                            
                            msg.channel.send(embed)
                        }else{
                            guessed = guessed + mes.content.toUpperCase() + " "
                            embed.setDescription(guessin +"\n\nAlready guessed: "+guessed+"\nWrong guesses: " + wronguess + info)
                            embed.setThumbnail(images[wronguess])
                            embed.setColor('#FF0000')
                            msg.channel.send(embed)
                            wronguess = wronguess +1;
                            guess(word)
                        }
                    }else{
                        msg.channel.send("Please only guess one letter at a time, type `cancel` to cancel.")
                        guess(word)
                    }
                     
                }
            })
             .catch(err => {
                msg.channel.send("Time ran out!")
                console.log(err)
             })
        }

        function win(){
            var money = Math.round((Math.random()+1)*10)
                        info = "\n\n**CONGRATULATIONS, YOU WON** \nYou won "+ money + " Arcanium"
                        embed.setColor('#00FF00')
                        guessin = wowi.toUpperCase()
                        embed.setDescription(guessin +"\n\nAlready guessed: "+guessed+"\nWrong guesses: " + wronguess + info)
                        msg.channel.send(embed)

                        const { Pool } = require ('pg');    
                        const pool = new Pool({ connectionString: process.env.DATABASE_URL, 
                             port: 5432, 
                             host: process.env.dbhost, 
                             database: process.env.db, 
                             user: process.env.user, 
                             password: process.env.password, 
                             ssl: true, 
                        }); 

                        pool.query(`SELECT arcanium FROM xp WHERE userid = '${msg.author.id}'`,(err, result) => {
                            let arcanium = result.rows[0].arcanium
                            pool.query(`UPDATE xp SET arcanium = ${arcanium + money} WHERE userid='${msg.author.id}'`)
                             pool.end(err => {
                              if(err) throw err; 
                             })
                        })
        }
    
    }

};