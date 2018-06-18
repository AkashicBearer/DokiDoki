const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');
const oakdexPokedex = require('oakdex-pokedex');
const pok = require('pokemon-node');

module.exports = class pokemonCommand extends Command {
    constructor(client) {
      super(client, {
            name: 'pokemon',
            aliases: ['pokedex', 'pkmn', 'dex'],
            group: 'group4',
            memberName: 'pokemon',
            description: 'Gives you information about a Pokemon',
            args: [
                {
                    key: 'name',
                    prompt: 'Please name a Pokemon, or enter an ID',
                    type: 'string'
                }
            ]
        });
    }

    async run(msg, args) {
        const embed = new RichEmbed()
        var poke = args.name.charAt(0).toUpperCase() + args.name.slice(1);
        if(poke.indexOf(" ") > 0){
            var temp = poke.split(" ")
            poke = temp[0] + " " + temp[1].charAt(0).toUpperCase() + temp[1].slice(1)
        }

        oakdexPokedex.findPokemon(poke, function(p) {

          embed.setTitle('#'+p.national_id+ " "+p.names.en)

           
          var thum = "https://img.pokemondb.net/sprites"
          if(p.pokedex_entries.X){
            embed.setDescription(p.pokedex_entries.X.en + "\n\n" + p.pokedex_entries.Y.en)
            thum = thum + "/x-y/normal/"
          }else if(p.pokedex_entries.Sun){
            embed.setDescription(p.pokedex_entries.Sun.en + "\n\n" + p.pokedex_entries.Moon.en)
            thum = thum + "/sun-moon/dex/normal/"
          }else if(p.pokedex_entries.Black){
            embed.setDescription(p.pokedex_entries.Black.en + "\n\n" + p.pokedex_entries.White.en)
            thum = thum + "/black-white/normal/"
          }else if(p.pokedex_entries.Diamond){
            embed.setDescription(p.pokedex_entries.Diamond.en + "\n\n" + p.pokedex_entries.Pearl.en + "\n\n" + p.pokedex_entries.Platinum.en)
            thum = thum + "/diamond-pearl/normal/"
          }else if(p.pokedex_entries.Ruby){
            embed.setDescription(p.pokedex_entries.Ruby.en + "\n\n" + p.pokedex_entries.Sapphire.en+ "\n\n" + p.pokedex_entries.Emerald.en)
            thum = thum + "/ruby-sapphire/normal/"
          }else if(p.pokedex_entries.Gold){
            embed.setDescription(p.pokedex_entries.Gold.en + "\n\n" + p.pokedex_entries.Silver.en+ "\n\n" + p.pokedex_entries.Crystal.en)
            thum = thum + "/silver/normal/"
          }else if(p.pokedex_entries.Red){
            embed.setDescription(p.pokedex_entries.Red.en + "\n\n" + p.pokedex_entries.Yellow.en)
            thum = thum + "/red-blue/normal/"
          }


          thum = thum+p.names.en.toLowerCase().replace(" ","-")+".png"

        embed.setThumbnail(thum)
          
          var names = "";

          if(p.names.jp){
            names = names + "**JP:** " + p.names.jp + "\n"
          }
          if(p.names.de){
            names = names + "**DE:** " + p.names.de + "\n"
          }
          if(p.names.fr){
            names = names + "**FR:** " + p.names.fr + "\n"
          }
          if(p.names.es){
            names = names + "**ES:** " + p.names.es + "\n"
          }
          if(p.names.it){
            names = names + "**IT:** " + p.names.it + "\n"
          }
          
        embed.addField("Names", names, true)
        embed.addField("Base Stats", "**HP:** "+ p.base_stats.hp + "\n**ATK:** " + p.base_stats.atk + "\n**DEF:** " + p.base_stats.def + "\n**SP ATK:** " + p.base_stats.sp_atk + "\n**SP DEF:** " + p.base_stats.sp_def + "\n**SPEED:** " + p.base_stats.speed, true)
        embed.addBlankField()

        embed.addField("Types", p.types, true)
        embed.addField("Egg Groups", p.egg_groups, true)

        var ab = "";
        if(p.abilities.length > 0){
            for (var i = 0; i < p.abilities.length; i++) {
                ab = ab + p.abilities[i].name
                if(p.abilities[i].hidden){
                    ab = ab + " (hidden)\n"
                }else{
                    ab = ab + "\n"
                }
            }   
        }
        embed.addField("Abilities", ab,true)
        embed.addBlankField()
        var evs = "";
        if(p.evolution_from){
            evs = evs + "Evolves from: **" + p.evolution_from + "**\n\n"
        }
        if(p.evolutions.length > 0){
            for(var i = 0; i < p.evolutions.length; i++){
                if(p.evolutions[i].item){
                    evs = evs + p.evolutions[i].item + " -> **" + p.evolutions[i].to + "**" 
                }else if(p.evolutions[i].level){
                    evs = evs + "Lv. " + p.evolutions[i].level + " -> **" + p.evolutions[i].to + "**" 
                }else if(p.evolutions[i].happiness){
                    evs = evs + "Happiness -> **" + p.evolutions[i].to + "**" 
                }else if(p.evolutions[i].level_up){
                    evs = evs + "Level Up -> **" + p.evolutions[i].to + "**" 
                }
                if(p.evolutions[i].conditions){
                    evs = evs + " (" + p.evolutions[i].conditions+")\n"
                }else{
                    evs = evs + "\n"
                }
            }
        }
        if(p.evolution_from || p.evolutions.length > 0){
            embed.addField("Evolutions", evs, true)
        }else{
            embed.addField("Evolutions", "None", true)
        }
        

        embed.addField("Leveling Rate", p.leveling_rate, true)
        if(p.catch_rate){
            embed.addField("Catch Rate", p.catch_rate, true)
        }

        embed.addBlankField()
        embed.addField("Category", p.categories.en)
        embed.addField("Height", p.height_eu + " / " + p.height_us, true)
        embed.addField("Weight", p.weight_eu + " / " + p.weight_us, true)
        embed.addField("Color", p.color, true)
        if(p.gender_ratios){
            embed.addField("Gender Ratio", p.gender_ratios.male + "% Male, " + p.gender_ratios.female+ "% Female", true)
        }
        
        msg.channel.send(embed)

        })
           
    }
};
