const discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission("MANAGE_SERVER")) return message.reply("Geen toegang tot dit commando");

    if(!args[0]) return message.reply("Gebruik: prefix <prefix>");

    var prefixes = JSON.parse(fs.readfileSync("./prefixes.json"));
    
    prefixes[message.guild.id] = {
        prefix: args[0]
    };

    fs.whriteFileSync("./prefixes.json", JSON.stringify(prefixes), (err) => {
        if(err) console.log(err);
    });

    var embed = new discord.MessageEmbed()
    .setTitle("prefix")
    .setColor("0a1cf3")
    .setDescription(`Prefix is aangepast naar ${args[0]}`);

    message.channel.send(embed);
}

module.exports.help = {
    name: "prefix"
}