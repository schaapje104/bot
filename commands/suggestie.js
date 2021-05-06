const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    const channel = message.guild.channels.cache.find(ch => ch.name === "suggesties");
    if(!channel) return message.replay("Kanaal niet gevonden");

    var argsBericht = args.join(" ");
    if(!argsBericht) return message.reply("Gelieve een suggestie mee te geven")

    var embed = new discord.MessageEmbed()
    .setDescription(argsBericht)
    .setColor("#0a1cf3")
    .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }));
    
    channel.send(embed).then(async (msg) => {
        
        await msg.react("👍");
        await msg.react("👎");
        message.delete();
    }).catch(err => {
       console.log(err); 
    });
}

module.exports.help = {
    name: "suggestie",
    description: "Geeft al de verschillende commands",
    category: "Informatie"
}