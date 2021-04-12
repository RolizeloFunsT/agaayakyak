const RankSchema = require("../models/ranks");
const { Client, Message, MessageEmbed } = require("discord.js");

exports.run = async (client, message, args) => {
 RankSchema.find({ Guild: message.guild.id }, async (err, data) => {
        if (!data) return message.reply("Veritabanı bulunmuyor!")
        message.channel.send(
        new MessageEmbed()
          .setColor("RANDOM")
          .setColor("RANDOM")
          .setDescription(
            data
              .map(({ Rank, Role }, index) => {
                return `#${index + 1} | **${Rank}** -> <@&${Role}>`;
              })
              .join("\n")
          )
      );
    });
}

exports.conf = {
aliases: []
}

exports.help = {
name: 'ranklar',
description: 'Sunucudaki tüm rankları gösterir.',
usage: 'ranklar'
}