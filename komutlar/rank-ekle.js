const { Client, Message, MessageEmbed } = require('discord.js');
const RankSchema = require("../models/ranks");


exports.run = async (client, message, args) => {
 if (!message.member.hasPermission("ADMINISTRATOR")) return message.react("❌");

        const role = message.mentions.roles.first();
        if (!role) return message.reply("Bir rol etiketle!")
        const rankName = args.slice(1).join(" ");
        if (!rankName) return message.reply("Rank adını girin!")

        RankSchema.findOne({ Guild: message.guild.id, Rank: rankName }, async (err, data) => {
            if (data) return message.channel.send("Bu rank zaten bulunuyor!");
            else {
                data = new RankSchema({
                    Guild: message.guild.id,
                    Rank: rankName,
                    Role: role.id,
                });
                data.save();
                message.channel.send(`${role} rolünde yeni rank oluşturuldu -> ${rankName}`);
            }
        }
        );
}

exports.conf = {
aliases: []
}

exports.help = {
name: 'rank-ekle',
description: 'Rank ekler',
usage: 'rank-ekle <@rol> <rank adı>'
}