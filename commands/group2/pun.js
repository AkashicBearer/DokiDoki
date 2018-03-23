const { Command } = require('discord.js-commando')
const { RichEmbed } = require('discord.js')

module.exports = class PunCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'pun',
            aliases: ['joke'],
            group: 'group2',
            memberName: 'pun',
            description: 'Sends a pun'
        });
    }
    
async run(msg, args) {
        var puns = {
            "0": "Yesterday I accidentally swallowed some food coloring. The doctor says I'm OK, but I feel like I've dyed a little inside.",
            "1": "Did you hear about the guy whose whole left side was cut off? He's all right now.",
            "2": "I wasn't originally going to get a brain transplant, but then I changed my mind.",
            "3": "I wondered why the baseball was getting bigger. Then it hit me.",
            "4": "Why don't some couples go to the gym? Because some relationships don't work out.",
            "5": "A friend of mine tried to annoy me with bird puns, but I soon realized that toucan play at that game.",
            "6": "I'd tell you a chemistry joke but I know I wouldn't get a reaction.",
            "7": "Have you ever tried to eat a clock? It's very time consuming.",
            "8": "I lift weights only on Saturday and Sunday because Monday to Friday are weak days.",
            "9": "Did you hear about the guy who got hit in the head with a can of soda? He was lucky it was a soft drink.",
            "10": "I once got into so much debt that I couldn't even afford my electricity bills, they were the darkest times of my life.",
            "11": "A man just assaulted me with milk, cream and butter. How dairy.",
            "12": "The experienced carpenter really nailed it, but the new guy screwed everything up.",
            "13": "I used to be a banker but I lost interest",
            "14": "If there was someone selling drugs in this place, weed know.",
            "15": "I relish the fact that you've mustard the strength to ketchup to me.",
            "16": "He drove his expensive car into a tree and found out how the Mercedes bends.",
            "17": "I'm reading a book about anti-gravity. It's impossible to put down.",
            "18": "A prisoner's favorite punctuation mark is the period. It marks the end of his sentence.",
            "19": "Show me a piano falling down a mineshaft and I'll show you A-flat minor.",
            "20": "I like European food so I decided to Russia over there because I was Hungary. After Czech'ing the menu I ordered Turkey. When I was Finnished I told the waiter 'Spain good but there is Norway I could eat another bite'.",
            "21": "I don't trust these stairs because they're always up to something.",
            "22": "Claustrophobic people are more productive thinking outside the box.",
            "23": "When William joined the army he disliked the phrase 'fire at will'.",
            "24": "Why don't programmers like nature? It has too many bugs.",
            "25": "Something about subtraction just doesn't add up.",
            "26": "So what if I don't know what apocalypse means!? It's not the end of the world!",
            "27": "It's a lengthy article on Japanese Sword Fighters but I can Samurais it for you.",
            "28": "Atheists don't solve exponential equations because they don't believe in higher powers.",
            "29": "It's not that the man did not know how to juggle, he just didn't have the balls to do it.",
            "30": "I couldn't quite remember how to throw a boomerang, but eventually it came back to me.",
            "31": "My job at the concrete plant seems to get harder and harder.",
            "32": "Police were called to a daycare where a three-year-old was resisting a rest.",
            "33": "The shoemaker did not deny his apprentice anything he needed. He gave his awl.",
            "34": "The other day I held the door open for a clown. I thought it was a nice jester.",
            "35": "The one who invented the door knocker got a No-bell prize.",
            "36": "What did the grape say when it got stepped on? Nothing - but it let out a little whine.",
            "37": "I'm glad I know sign language, it's pretty handy.",
            "38": "Never discuss infinity with a mathematician, they can go on about it forever.",
            "39": "Smaller babies may be delivered by stork but the heavier ones need a crane.",
            "40": "Is old rope good enough for a hanging? Frayed knot. That stuff is bad noose.",
            "41": "A small boy swallowed some coins and was taken to a hospital. When his grandmother telephoned to ask how he was a nurse said 'No change yet'.",
            "42": "What is the difference between a nicely dressed man on a tricycle and a poorly dressed man on a bicycle? A tire.",
            "43": "The roundest knight at king Arthur's round table was Sir Cumference.",
            "44": "The first time I used an elevator it was really uplifting, then it let me down.",
            "45": "The store keeps calling me to come back and buy more bedroom furniture, but all I really wanted was one night stand.",
            "46": "A friend said she did not understand cloning. I told her that makes two of us.",
            "47": "The man who survived mustard gas and pepper spray is now a seasoned veteran.",
            "48": "A bicycle can't stand on its own because it is two-tired.",
            "49": "My friend's bakery burned down last night. Now his business is toast.",
            "50": "I used to have a fear of hurdles, but I got over it.",
            "51": "Need an ark to save two of every animal? I noah guy.",
            "52": "I knew a woman who owned a taser, man was she stunning!",
            "53": "What do dogs do after they finish obedience school? They get their masters.",
            "54": "When Peter Pan punches, they Neverland.",
            "55": "I don't know if I just got hit by freezing rain, but it hurt like hail.",
            "56": "Weight loss mantra? Fat chants!",
            "57": "It was an emotional wedding. Even the cake was in tiers."
        };

        const embed = new RichEmbed()
            embed.setDescription(puns[Math.floor(Math.random() * Object.keys(puns).length).toString()]])
            embed.setColor(0x23ff12)
        return msg.embed(embed);
    }
};