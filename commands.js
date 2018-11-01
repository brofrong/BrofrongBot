const Discord = require('discord.js');

module.exports.help = function(bot,msg){
    msg.reply("Помощь скоро будет=3");
}
module.exports.clear = function(bot,msg){
    msg.channel.fetchMessages()
    .then(messages => {
        arrmsg = messages.array();
        for (var i=0;i<arrmsg.length;i++){
            if ((arrmsg[i].author.id == bot.user.id) || (arrmsg[i].content[0] == '!')){
                arrmsg[i].delete();
                deletedMsg++;
            }

        }
        
    })
    .catch(console.error);
}
