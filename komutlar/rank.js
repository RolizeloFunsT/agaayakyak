const RankSchema = require("../models/ranks");
const { Client, Message, MessageEmbed } = require("discord.js");


exports.run = async (client, message, args) => {
 const rankName = args.join(" ");
      if (!rankName) return message.channel.send("Bir rank adı gir!")
    RankSchema.findOne({ Guild: message.guild.id, Rank: rankName }, async (err, data) => {
        if (!data) return message.reply('Bu rank veritabanında bulunmuyor');
        if (message.member.roles.cache.find(role => role.id === data.Role)) {
            message.member.roles.remove(data.Role);
            return message.reply(`**${data.Rank}** Rankından ayrıldın.`)
        }
        message.member.roles.add(data.Role);
        return message.reply(`**${data.Rank}** Rankına katıldın.`)
    });
}

exports.conf = {
    aliases: []
}

exports.help = {
    name: 'rank',
    description: 'Bir ranka girersiniz.',
    usage: 'rank <rank adı>'
}