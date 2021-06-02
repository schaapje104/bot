const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var categoryID = "827825286300958720";

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Sorry jij kan dit niet");

    if(message.channel.parentID != categoryID) return message.reply("Oeps Geen ticket kanaal");

    var addUser = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));

    if(!addUser) return message.reply("Geen Gebruiker mee gegeven");

    var embedPrompt = new discord.MessageEmbed()
    .setColor("GREEN")
    .setTittle("Antwoorden binnen 30 Sec.")
    .setDescription(`Wil je ${addUser} Toevoegen?`);

    var embedPrompt = new discord.MessageEmbed()
    .setColor("GREEN")
    .setTittle("Gebruiker toegevoegt.")
    .setTimestamp()
    .addField("Toegevoegde gebruiker", `${addUser}`)
    .addField("Persoon toegevoegt door", message.author);

    message.channel.send(embedPrompt).then(async msg =>{

        message.delete();

        var emoji = await promptMessage(msg, message.author, 30, ["✅", "❌"]);


        // We kijken dat het de gebruiker is die het als eerste heeft uitgevoerd.
        // message.channel.awaitMessages(m => m.author.id == message.author.id,
        //     { max: 1, time: 30000 }).then(collected => {

        //         if (collected.first().content.toLowerCase() == 'yes') {
        //             message.reply('Kick speler.');
        //         }
        //         else
        //             message.reply('Geanuleerd');

        //     }).catch(() => {
        //         message.reply('Geen antwoord na 30 sec, geanuleerd.');
        //     });


        if (emoji === "✅") {

            msg.delete();

            message.channel.updateOverwhrite(addUser,{
                SEND_MESSAGES: true,
                CREATE_INSTANT_INVITE: false,
                READ_MESSAGES: true,
                ATTACH_FILES: true,
                ADD_REACTIONS: true,
                CONNECT: true,
                READ_MESSAGES_HISTORY: true,
                VIEW_CHANNEL: true,
            });

            message.channel.send(embed).then(msg => msg.delete({timeout: 10000}));
            
        }else if (emoji === "❌") {

            msg.delete();

            message.reply("toevoeging Geanduleerd").then(m => m.delete(5000));

        }



    });

}



module.exports.help = {
    name: "add"
}