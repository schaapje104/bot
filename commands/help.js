const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    try {

        var text = "**Limburg Bot** \n\n **__Commands__** \n .hallo - Geeft een Hallo Terug \n .info - Geeft Info. \n .serverinfo - Geeft Server Info Terug \n .clear - Verwijder een aantal berichten \n .sps - Speel blad steen schaar \n .ticket maak ticket aan \n .botinfo - Om alle info te verzamelen \n .suggestie - Om een suggestie te sturen \n .dobbel - Je hebt zoveel gegooid \n .kopofmunt - Gooi kop of munt \n .lock - Lock de Channel \n .unlock - unlock de channel \n .kick - kick iemand uit de discord \n .ban - Ban iemand uit de discord \n .gamelink - Geeft de gamelink! \n .giveaway - Maakt een Giveaway!";
        
        message.author.send(text)

        message.reply("Alle Commands kan je vinden in je DM")

    } catch(error){
        message.reply("Er is iets fout gelopen");
    }

}

module.exports.help = {
    name: "help"
}