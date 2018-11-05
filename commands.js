const Discord = require('discord.js');


module.exports.help = function(bot,msg){
    msg.reply("Помощь скоро будет=3");
}

module.exports.clear = function(bot,msg){
    msg.channel.fetchMessages()
    .then(messages => {
        var messagesForDelete = messages.filter((message)=>{
            return ((message.author.id == bot.user.id) || (message.content[0] == '!'));
        });
        messagesForDelete.deleteAll();      
    })
    .catch(console.error);
}
module.exports.SFA = function(bot,msg){

    const backFromArmy = new Date('2019-11-01');
    const goToArmy = new Date('2018-11-01');
    var sLeft = backFromArmy-Date.now();
    var daysLeft = Math.floor(sLeft/86400000);
    var hourseLeft = Math.floor(sLeft/3600000);
    var minutesLeft = Math.floor(sLeft/60000);

    var embed = new Discord.RichEmbed()
            .setTitle("Серёжа вернётся!")
            .setColor("#ff0000")
            .setImage("http://brofrong.tk/imgs/segeza.jpg")
            .addField("дней осталось",daysLeft)
            .addField("часов осталось",hourseLeft)
            .addField("минут осталось",minutesLeft);
            msg.reply(embed);
}