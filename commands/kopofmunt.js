module.exports.run = async (client, message, args) => {

    var value = ["kop", "munt"];

    var result = value[Math.floor(Math.random() * value.length)];

    message.channel.send(`Ik had **${result}** in gedachten`);

}

module.exports.help = {
    name: "kopofmunt",
    description: "Geeft al de verschillende commands",
    category: "Informatie"
}