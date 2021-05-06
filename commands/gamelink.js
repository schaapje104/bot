const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    return message.channel.send("https://www.roblox.com/games/6130230291/Limburg-Roleplay Hier is de game link!");
}

module.exports.help = {
    name: "gamelink"
}