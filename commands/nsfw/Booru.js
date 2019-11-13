const { Command } = require('discord.js-commando');
const { RichEmbed} = require('discord.js');
const Booru = require('booru')
const {BooruError, sites} = require('booru')


module.exports = class DanbooruCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'booru',
            aliases: [],
            group: 'nsfw',
            memberName: 'booru',
            description: `Search some of our Lewd API\'s!\nSyntax: <booru [tag] [rating] [site]\n By Default all is safe and no item.`,
            examples: ['<booru neko s safe', '<booru neko s dan', '<booru neko s konac'],
            args: [
                {
                    key: 'item',
                    prompt: 'Which to search for?',
                    type: 'string',
                    default: ""
                },
                {
                    key: 'rating',
                    prompt: 'Which tag to use?',
                    type: 'string',
                    default: "s"
                },
                {
                    key: 'site',
                    prompt: 'Which site to use?',
                    type: 'string',
                    default: "safe"
                }
            ],
            throttling: {
                usages: 1,
                duration: 15
            },
        });
    }


    async run(message, args) {

        if (!message.channel.nsfw) return message.reply("You can only use this comand in a NSFW Channel");

        if(args.item === "loli" || args.item === "loli".toUpperCase()) {

            message.channel.send(`Please dont search Loli's as theyre against discord TOS`)

        } else {

            const valids = ['safebooru', 'danbooru', 'konachan', 'safe', 'konac', 'dan', 'sb', 'db', 'kc']

            for (var i = 0; i < valids.length; i++) { 
                
                if(args.site == valids[i] || args.site == valids[i].toUpperCase()) {

                    const rating = function Rating(r) {
                        if(!args.site){

                            return r = "safebooru"

                        } else if(args.site == "safe" || args.site == "safe".toUpperCase()) {

                            return r = "safebooru"

                        } else if(args.site == "dan" && valids[i] || args.site == "dan".toUpperCase() && valids[i].toUpperCase()) {

                            return r = 'danbooru.donmai.us'

                        } else if(args.site == "konac" && valids[i] || args.site == "konac".toUpperCase() && valids[i].toUpperCase()) {

                            return r = 'konachan.com'

                        }
                    }

                    Booru.search(`${rating()}`, [`${args.item}`], {limit: 1, random: true , rating: args.rating})

                        .then(posts => {

                            for (let post of posts) {

                                console.log(post)

                                const booruEmbed = new RichEmbed()

                                    if(rating() == 'safebooru' || rating() == 'safebooru'.toUpperCase()) {
                            
                                        booruEmbed.setTitle(`Result for Image Search on SafeBooru`)

                                    } else if(rating() == 'danbooru.donmai.us' || rating() == 'danbooru.donmai.us'.toUpperCase()) {
                                        
                                        booruEmbed.setTitle(`Result for Image Search on DanBooru`)

                                    } else if(rating() == 'konachan.com' || rating() == 'konachan.com'.toUpperCase()) {

                                        booruEmbed.setTitle(`Result for Image Search on Konachan`)

                                    }

                                    if(rating() == 'safebooru' || rating() == 'safebooru'.toUpperCase()) {
                            
                                        booruEmbed.addField(`Score`, post.score, true)
                                        booruEmbed.addField("Rating", post.rating, true)
                                        //booruEmbed.addField(`Tags`, post.tags, true)

                                    } else if(rating() == 'danbooru.donmai.us' || rating() == 'danbooru.donmai.us'.toUpperCase()) {

                                        booruEmbed.addField(`Dimensions`, `${post.data.image_width}x${post.data.image_height}`, true )
                                        booruEmbed.addField(`Review`, `👍${post.data.up_score} 👎${post.data.down_score}`, true)
                                        booruEmbed.addField(`Uploader`, post.data.uploader_name, true)
                                        booruEmbed.addField("Author", post.data.tag_string_artist, true)

                                    } else if(rating() == 'konachan.com' || rating() == 'konachan.com'.toUpperCase()) {

                                        booruEmbed.addField(`Dimensions`, `${post.data.sample_width}x${post.data.sample_height}`, true)
                                        booruEmbed.addField(`Author`, post.data.author, true)

                                    }

                                    booruEmbed.setFooter(`Powered by Booru API`)
                                    booruEmbed.setColor("RANDOM")
                                    booruEmbed.setImage(post.fileUrl)

                                message.channel.send(booruEmbed)

                            }
                        })
                        .catch(err => {

                            if (err instanceof BooruError) {

                                console.error(err.message)

                            } else {

                                console.error(err)     

                            }
                        })
                    }
            }
        }
    }
}