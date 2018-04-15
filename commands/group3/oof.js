const { Command } = require('discord.js-commando')

module.exports = class OofCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'oof',
            group: 'group3',
            memberName: 'oof',
            description: 'sends a oof'
        });
    }
    async run(msg) {
    const oof = {
    "0": "https://media.tenor.com/images/a68a753de308519c52c540d270ec266d/tenor.gif",
    "2": "https://i.imgur.com/BzVV69m.gif",
    "3": "https://pa1.narvii.com/6600/9badf8a0d237a74488e5db4c6488844c80fe8735_hq.gif",
    "4": "https://thumbs.gfycat.com/MessyBlaringEarwig-max-1mb.gif",
    "5": "http://www.hxchector.com/wp-content/uploads/2013/07/self_loathing.gif",
    "6": "https://media.giphy.com/media/aASROgaJiiIg0/giphy.gif",
    "7": "https://i.imgur.com/hgQM6FW.gif",
    "8": "https://thumbs.gfycat.com/IdioticEasyInvisiblerail-max-1mb.gif",
    "9": "https://pa1.narvii.com/6209/5ebdaf4c05225af76761caeece8f6edc18ab8c0f_hq.gif",
    "10": "https://data.whicdn.com/images/238358125/original.gif",
    "11: "https://i.pinimg.com/originals/13/ce/32/13ce32253c5aaa28fd66105ac436ac7f.gif",
    "12": "https://media.giphy.com/media/hiFDKrrP0PaeI/giphy.gif",
    "13": "https://78.media.tumblr.com/3e30fea7762b30c2346a7b51f6b369e3/tumblr_nja620hlMn1qhfir7o1_500.gif",
    "14": "http://i.imgur.com/rctz13o.gif",
    "15": "https://thumbs.gfycat.com/WhimsicalGratefulImago-max-1mb.gif",
    "16": "https://static.fjcdn.com/gifs/Feel+his+pain+ive+never+understood+why+people+hide+it_c57f84_4702212.gif",
    "17": "https://i.pinimg.com/originals/9e/9b/77/9e9b77e4fd8e11d389e50256442202a8.gif",
    "18": "https://media1.tenor.com/images/d5668af606ca4d0332a6507418cabbce/tenor.gif?itemid=4952249",
    "19": "https://media.giphy.com/media/FB5EOw0CaaQM0/giphy.gif",
    "20": "https://i.pinimg.com/originals/fc/d5/46/fcd54616febce4dd570dbab8c893af3e.gif",
    "21": "https://media3.giphy.com/media/zHGXhFJCVCbD2/giphy-downsized.gif"
    }
       this.client.on('message', msg => {
          if (msg.content === 'oof') {
          const randm = Math.random();
          const embed = new RichEmbed();
          embed.setDescription('Oof')        
          embed.setImage(oof[Math.floor(randm * Object.keys(oof).length).toString()])
          embed.setColor(0x23ff12)
       return msg.embed(embed);
          }
}
);
