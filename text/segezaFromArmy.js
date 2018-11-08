const Discord = require('discord.js');
const fs = require('fs');

module.exports.comeBackSegeza =  function(general){
    const backFromArmy = new Date('2019-11-01');
    const goToArmy = new Date('2018-11-01');
    var sLeft = backFromArmy-Date.now();
    var daysLeft = Math.floor(sLeft/86400000);
    var hourseLeft = Math.floor(sLeft/3600000);
    var minutesLeft = Math.floor(sLeft/60000);

    var imgs = fs.readdirSync("/home/brofrong-home/prog/discord/BrofrongBot/img");
    imgToDraw = imgs[Math.floor(Math.random()*imgs.length%imgs.length)];

    general.fetchMessages({limit:50})
    .then(messages => {
        var botmsg = messages.filter((msg)=>{
            if(msg.embeds[0]){
                return((msg.embeds[0].title == 'Серёжа вернётся!') && ((new Date() - msg.createdTimestamp) < 864000000));//864000000
            }
            return 0;
        });
        console.log(`сегеже мешают: ${botmsg.size}`);
        if(!botmsg.size){
            var embed = new Discord.RichEmbed()
            .setTitle("Серёжа вернётся!")
            .setColor("#ff0000")
            .setImage("http://brofrong.tk/imgs/"+imgToDraw)
            .addField("дней осталось",daysLeft)
            .addField("часов осталось",hourseLeft)
            .addField("минут осталось",minutesLeft);
            general.send(embed);
        }
    });

    setTimeout(module.exports.comeBackSegeza,3600000,general);
}
