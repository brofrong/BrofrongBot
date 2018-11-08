const Discord = require('discord.js');
const fs = require('fs');




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

    var imgs = fs.readdirSync("/home/brofrong-home/prog/discord/BrofrongBot/img");
    imgToDraw = imgs[Math.floor(Math.random()*imgs.length%imgs.length)];


    var embed = new Discord.RichEmbed()
            .setTitle("Серёжа вернётся!")
            .setColor("#ff0000")
            .setImage("http://brofrong.tk/imgs/"+imgToDraw)
            .addField("дней осталось",daysLeft)
            .addField("часов осталось",hourseLeft)
            .addField("минут осталось",minutesLeft);
            msg.reply(embed);
}

module.exports.play = function(bot,msg,url){
    if(!url){
        msg.reply("укажите URL");
        return 0;
    }
    var voiceChannel =  msg.member.voiceChannel;
    voiceChannel.join()
    .then(connection => {console.log("connected")
        const stream = ytdl('https://www.youtube.com/watch?v=lTTajzrSkCw', { filter : 'audioonly' });
        broadcast.playStream(stream);
        const dispatcher = connection.playBroadcast(broadcast);
        broadcast.end(()=> voiceChannel.leave());
    })
    .catch(console.error);
}

