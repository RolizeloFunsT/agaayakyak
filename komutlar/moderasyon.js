const discord = require('discord.js');
exports.run = async(client, message, args) => {
    const embed = new discord.MessageEmbed()
    .setTitle('Roliz Yardım')
    .setColor('PURPLE')
    .setThumbnail('https://cdn.discordapp.com/avatars/761475156487962625/4be06fa16f3b9d5110927ebc91744535.webp?size=1024')
    .addField('.istatistik', 'boyun istatistikleri', true)
    .addField('.yardım', 'yardım menüsü', true)
    .addField('.yardım', 'yardım menüsü', true)
    .addField('.yardım', 'yardım menüsü', true)
    .addField('.yardım', 'yardım menüsü', true)
    .addField('.yardım', 'yardım menüsü', true)
    .addField('.yardım', 'yardım menüsü', true)
    .addField('.yardım', 'yardım menüsü', true)
    .addField('.yardım', 'yardım menüsü', true)

message.channel.send(embed)
};
exports.conf = {
enabled: true,
guildOnly: false,
permLevel: 0,
aliases: ['mod']



};
exports.help = {
name: "moderasyon"
};