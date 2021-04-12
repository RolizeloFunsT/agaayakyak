const { Client, Message, MessageEmbed } = require('discord.js');
const RankSchema = require("../models/ranks");


exports.run = async (client, message, args) => {
         if (!message.member.hasPermission("ADMINISTRATOR")) return message.react("❌");
        
        const rankName = args.join(" ");
        if (!rankName) return message.reply("Rank adını girin!")

        RankSchema.findOne({ Guild: message.guild.id, Rank: rankName }, async (err, data) => {
            if (data) {
                await RankSchema.findOneAndDelete({ Guild: message.guild.id, Rank: rankName });
                message.channel.send('Rank silindi')
            }
            else return message.channel.send('Böyle bir veri bulunmadı!')
        }
        );
}

exports.conf = {
aliases: []
}

exports.help = {
name: 'rank-sil',
description: 'Rankı siler',
usage: 'rank-sil <rank adı>'
}