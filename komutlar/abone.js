const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '.'
let yardım = new Discord.MessageEmbed()  
.setAuthor(`${client.user.username}`, client.user.avatarURL())
.setColor('RANDOM')
.setImage('https://cdn.discordapp.com/avatars/761475156487962625/4be06fa16f3b9d5110927ebc91744535.webp?size=1024')
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
.setImage('')
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