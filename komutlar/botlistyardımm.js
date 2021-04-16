const discord = require('discord.js');
exports.run = async(client, message, args) => {
    const embed = new discord.MessageEmbed()
    .setTitle('Roliz Yardım')
    .setColor('PINK')
    .setThumbnail('https://cdn.glitch.com/2fa30168-89cc-4986-b626-93d09bc61fbe%2Fb4b6052a1d4c2a17a53a5d77c5945c1c.png?v=1618560560952')
     .addField('.bot-onayla botid sahipid', 'Botu Onaylarsınız', true)
    .addField('.bot-reddet botid sahipid sebep', 'Botu Reddedersiniz', true)
    .addField('.bot-ekle', 'Bot eklersiniz', true)
    .addField('.botlist-ayar', 'Ayarlama Komutlarını Gösterir', true)
    .setImage('https://cdn.glitch.com/2fa30168-89cc-4986-b626-93d09bc61fbe%2Fstandard.gif?v=1618560688199')

message.channel.send(embed)
};
exports.conf = {
enabled: true,
guildOnly: false,
permLevel: 0,
aliases: ['botlistyardım']



};
exports.help = {
name: "botlist"
};