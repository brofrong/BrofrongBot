const Discord = require('discord.js');
const client = new Discord.Client();
const token = require("./TOKEN.json")
const Commands = require('./commands');
const Segeza = require('./text/segezaFromArmy');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);

  SegezaFromArmy(client);

});

client.on('message', msg => {
    if (msg.author.id === client.user.id) return;
    if (msg.content.substring(0,1) !== "!") return;

    const commandObject = parseMessage(msg);
    if(commandObject){
        Commands[commandObject.command](client,msg, ...commandObject.args);
    } else{
        msg.reply('Неверная команнда');
        Commands['help'](client,msg);
    }
});


 function SegezaFromArmy(bot){
    var channels = bot.channels;
    general = channels.find(function(channel){
        return (channel.id == "95448882745454592")
    });
    Segeza.comeBackSegeza(general);
};

function parseMessage(message){
    const parts = message.content.split(' ');
    const command = parts[0].substring(1);
    const args = parts.slice(1);
    if(typeof Commands[command] === 'function'){
        return {command,args};
    }else{
        return null;
    }
}


client.login(token.token);
