const { Command } = require('discord.js-commando')
const { RichEmbed } = require('discord.js');

module.exports = class KanpaiCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'kanpai',
            aliases: ['cheers'],
            group: 'emo',
            memberName: 'kanpai',
            description: 'Cheers!',
          
            args: [
                {
                key: 'member',
                label: 'user',
                prompt: 'Cheers! With whom?',
                type: 'member',
                default: ''
                }
            ]
        });
    }

	async run(msg, args) {
        var imgkan = {
            "0": "https://pa1.narvii.com/6572/20a9e6b82ab47fbbbc8e333e817ac0825dab1093_hq.gif",
            "1": "https://78.media.tumblr.com/e8b732fec83bd01226b4addddcfdefe5/tumblr_oibgl96VSW1uxvvvzo1_500.gif",
            "2": "https://78.media.tumblr.com/206b51a9ec4b0810323c66921e14ba18/tumblr_p1t2echdsG1wexa8uo1_500.gif",
            "3": "https://78.media.tumblr.com/tumblr_m7hmkqoHCy1ry14qgo1_500.gif",
            "4": "http://img1.ak.crunchyroll.com/i/spire2/639f5893aa316e499065f1bea57a74a91495763762_full.gif",
            "5": "https://78.media.tumblr.com/74a0051402b6b846ae8dbb894248ebc0/tumblr_nythukCECr1uxvvvzo1_500.gif",
            "6": "https://4.bp.blogspot.com/-TFqGw1z21_E/WI2YQW11uwI/AAAAAAAAuQM/kdksUGEQ4rokxiegQb2fGaKW63nIyF5FQCPcB/s1600/Omake%2BGif%2BAnime%2B-%2BMinami%2BKamakura%2BKoukou%2BJoshi%2BJitensha-bu%2B-%2BEpisode%2B4%2B-%2BGirls%2BBicycle%2BClub%2BKanpai.gif",
            "7": "https://78.media.tumblr.com/b2b864c04204e1ed9fd2823b484a2e3e/tumblr_ontkywr2HD1vhw4rho1_400.gif",
            "8": "https://78.media.tumblr.com/565dd5ce1118e6a54929b3f1488dff97/tumblr_olcn6j8mRN1tdnbbbo1_500.gif",
            "9": "https://78.media.tumblr.com/fe086768441c42641a95b594f098e47e/tumblr_p228qsBNF91qzdpr4o1_500.gif",
            "10": "https://78.media.tumblr.com/472a8c31c5865fc956533d9c2573decb/tumblr_npsrliK43D1u978rro1_500.gif",
            "11": "https://78.media.tumblr.com/668261910abe3d7d6e93c18fcc06e286/tumblr_nxl58t71H81uxvvvzo1_500.gif",
            "12": "https://media.giphy.com/media/77ZhcbrGHqQSY/giphy.gif",
            "13": "https://i.pinimg.com/originals/d2/24/65/d224652a747303dfa53b9114e50ad547.gif",
            "14": "https://media.giphy.com/media/BJLCcNzwaZ344/giphy.gif",
            "15": "https://honeysanime.com/wp-content/uploads/2015/08/madara-natsume-yuujinchou-capture.gif",
            "16": "http://media.giphy.com/media/NCfjzYB9GtwM8/giphy.gif",
            "17": "https://nerdramblesblog.files.wordpress.com/2017/01/tumblr_inline_nrul77ouju1szu3bc_500.gif",
            "18": "https://78.media.tumblr.com/551df0ed4097c7cfc61af2b5dd6045f7/tumblr_o0aaxsWmra1uxvvvzo1_500.gif",
            "19": "https://78.media.tumblr.com/64ee0c000358bf5712083d09c1b0eabd/tumblr_n95fek6y1k1t4tumzo1_500.gif",
            "20": "https://i.pinimg.com/originals/89/ba/bd/89babdf25e2b06b247e186ecb0343cca.gif"
        };

        const embed = new RichEmbed()
            if(msg.author.id == args.member.id || !args.member){
            embed.setDescription('Kanpai, minna-san!')
            }else{
            embed.setDescription('Kanpai, ' + args.member.user+'!')
            }
            const randm = Math.random();

                embed.setImage(imgkan[Math.floor(randm * Object.keys(imgkan).length).toString()])

            embed.setColor(0x23ff12)
        return msg.embed(embed);
    }

};
