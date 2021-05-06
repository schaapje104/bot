const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var botEmbed = new discord.MessageEmbed()
        .setTitle("Limburg Roleplay")
        .setDescription("Wij zijn een roblox Comuninty")
        .setColor("#0a1cf3")
        .addField("Bot Naam", bot.user.username)
        .addFields(
             {name: "Je bent de server gejoind op:", value: message.member.joinedAt},
             {name: "Totaal Members:", value:message.guild.memberCount}
        )
        .setFooter("Copyright 2021", "https://cdn.discordapp.com/attachments/835189564788048032/835450739194462228/Limburg1.jpg")
        .setTimestamp();
        return message.channel.send(botEmbed);
}

module.exports.help = {
    name: "serverinfo"
}