const Discord = require('discord.js'),
      db = require('quick.db'),
      ayarlar = require('../ayarlar.json'),
      prefix = ayarlar.prefix
exports.run = async (client, message, args) => {
  
let sayı = await db.fetch(`SayaçSayı_${message.guild.id}`)  
let kanal = await db.fetch(`SayaçKanal_${message.guild.id}`)  
 
if(!sayı && !kanal) return message.reply(`:x:Sayaç Sistemi Zaten Ayarlı Değil! **Ayarlamak İçin** : \`${prefix}sayaç #kanal 100\``)
db.delete(`SayaçSayı_${message.guild.id}`) 
db.delete(`SayaçKanal_${message.guild.id}`) 
message.reply(`:white_check_mark:Sayaç Başarıyla Sıfırlandı`)
};
exports.conf = {//:dikkat:
  enabled: false,
  guildOnly: false,
  aliases: [],
  permLevel: 3
};
exports.help = {
  name: 'sayaç-sıfırla',
  description: 'Sayaç Sistemi',
  usage: 'sayaç-sıfırla'
};