module.exports.run = async (bot, message, args) => {

    if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("Sorry jij kan dit niet doen");

    await message.channel.overwritePermissions([

        {
             id: message.guild.roles.cache.find(r => r.name == "@everyone").id,
             deny: ['SEND_MESSAGES']
        }    
    
    ]);

    message.channel.send("Kanaal in Lockdown");

}

module.exports.help = {
    name: "lock",
    description: "Geeft al de verschillende commands",
    category: "Informatie"
}