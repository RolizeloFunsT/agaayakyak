const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

exports.run = (client, message) => {
  const devtr = new Discord.MessageEmbed()
  .setTitle("Davet Linkleri Altta Belirtilmiştir")
  .setColor("RANDOM")
    .addField("» **Botun Sahibi**", "<@!545651586559377410>| FunsT#7126 ")
    .addField("**» Destek Sunucusu**", " [Sunucumuza Katıl](https://discord.gg/TQnNm2UuB4)", )
    .addField("**» Davet Linki**", " [Botu Davet Et](https://discord.com/oauth2/authorize?client_id=761475156487962625&scope=bot&permissions=805314622)", )
   .setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL())
  message.channel.send(devtr);   //DevTR
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'davet',
};