const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    return message.channel.send("hallo! " + message.author.username);
}

module.exports.help = {
    name: "hallo"
}