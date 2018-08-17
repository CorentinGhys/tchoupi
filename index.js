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
    var i = Math.floor(Math.random() *100)
    if(i < 2)
    var y = Math.floor(Math.random() *9)    
    switch (y) {
            case 0:
            message.reply('Je t\'aime');
            break
        case 1:   
            message.reply('Tu es beau');
            break
             case 2:   
           message.reply('Tu es gentil');
            break         
        case 3:   
           message.reply('Tu sens bon');
            break     
        case 4:   
           message.reply('Tu es la meilleure personne sur terre');
            break   
        case 5:   
            message.reply('Tu es magnifique quand tu souris');
            break 
        case 6:   
           message.reply('Fais moi un câlin');
            break 
              case 7:   
           message.reply('T\’es mon bijou');
            break 
        case 8:   
           message.reply('Je suis fou de toi je veux mon bisou');
            break  
            
}}





});

bot.login(process.env.choupii) //token
