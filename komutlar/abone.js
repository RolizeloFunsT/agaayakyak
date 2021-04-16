const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '.'
let yardım = new Discord.MessageEmbed()  
.setAuthor(`${client.user.username}`, client.user.avatarURL())
.setColor('RANDOM')
.setImage('https://cdn.glitch.com/2fa30168-89cc-4986-b626-93d09bc61fbe%2Fb4b6052a1d4c2a17a53a5d77c5945c1c.png?v=1618560560952')
.addField(' Roliz',`
 Roliz Abone Yardım Menüsü  
**.abonerol** 
Abone Rolünü ayarlarsınız
**.abonelog** 
Abone Log'u ayarlarsınız
**.abone-y-rol** 
Abone Yetkili Rolü Ayarlarsınız
 **.abone** 
Abone rolü verirsiniz
`)
.setImage('https://cdn.glitch.com/2fa30168-89cc-4986-b626-93d09bc61fbe%2Fstandard.gif?v=1618560688199')
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL())
.setThumbnail(client.user.avatarURL())
 message.channel.send(yardım) 
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori: `Geliştirici`
};

exports.help = {
  name: 'aboneyardım',
  description: '[Admin Komutu]',
  usage: '!bakım-mod aç'
};