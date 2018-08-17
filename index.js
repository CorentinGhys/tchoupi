const Discord = require('discord.js');
const bot = new Discord.Client();

const PREFIX = '!';

bot.on('ready', function() {
    console.log("Im Ready !");

    bot.user.setActivity('faire des câlins').catch(console.error)
});


bot.on('message', message => {
if(message.content.startsWith("dm type")){
    var str = message.content
    message.delete()
    str = str.replace('dm type ','')
    message.channel.send(str)
}

/* if(message.content.toLowerCase().includes("nutella") && !message.content.toLowerCase().includes("lets")) {
    if(message.content.toLowerCase().includes("aime") || message.content.toLowerCase().includes("jtm"))
    {
        message.reply('je t\'aime aussi ❤');
    }
    message.react('💖');
} */

if(message.content.toLowerCase().includes("\@everyone")) {
    var i = Math.floor(Math.random() *10)
    if(i > 2)
    message.reply('your mother is the best person i have ever met in my life');
}

if(!message.content.toLowerCase().includes("phrase"))
{

    message.reply('your mother is the best person i have ever met in my life');
}





});

bot.login(process.env.choupii) //token
