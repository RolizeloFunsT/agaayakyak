const discord = require('discord.js');
exports.run = async(client, message, args) => {
    const embed = new discord.MessageEmbed()
    .setTitle('Roliz Yardım')
    .setColor('GOLD')
    .setThumbnail('https://cdn.glitch.com/2fa30168-89cc-4986-b626-93d09bc61fbe%2Fb4b6052a1d4c2a17a53a5d77c5945c1c.png?v=1618560560952')
     .addField('.aboneyardım', 'abone yardım menüsü', true)
    .addField('.istatistik', 'botun istatistikleri', true)
    .addField('.moderasyon', 'moderasyon menüsü', true)
    .addField('.küfür-engel', 'küfür engel menüsü', true)
    .addField('.reklam-engel', 'reklam engel menüsü', true)
        .addField('.botlist', 'botlist menüsü', true)
    .addField('.sayaç', 'sayaç menüsü', true)
    .addField('.otorol', 'otorol menüsü', true)
    .setImage('https://cdn.glitch.com/2fa30168-89cc-4986-b626-93d09bc61fbe%2Fstandard.gif?v=1618560688199')

message.channel.send(embed)
};
exports.conf = {
enabled: true,
guildOnly: false,
permLevel: 0,
aliases: ['help']



};
exports.help = {
name: "yardım"
};