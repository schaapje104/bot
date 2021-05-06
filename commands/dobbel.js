module.exports.run = async (bot, message, args) => {

    var result = Math.ceil( Math.random() * 8);
    
    message.channel.send(`:game_die: **${result}** gegooid! :game_die:`); 

}

module.exports.help = {
    name: "dobbel"
}