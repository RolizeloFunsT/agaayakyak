//--------------------Bot Ana Dosya--------------------//
const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const moment = require('moment');
var Jimp = require('jimp');
const { Client, Util } = require('discord.js');
const fs = require('fs');
const db = require('wio.db');
require('./util/eventLoader.js')(client);
const path = require('path');
const snekfetch = require('snekfetch');
require("./util/eventLoader")(client);
const qdb = require('quick.db');


//-------------------- 7/24 Uptime --------------------//
//-------------------- 7/24 Uptime --------------------//
//-------------------- 7/24 Uptime --------------------//

const express = require("express");
const app = express();
const http = require("http");
app.get("/", (request, response) => {
  console.log(`7/24 Hizmet Vermekteyim!`);
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

//-------------------- 7/24 Uptime --------------------//
//-------------------- 7/24 Uptime --------------------//
//-------------------- 7/24 Uptime --------------------//

client.on("ready", async () => {
  client.appInfo = await client.fetchApplication();
  setInterval(async () => {
    client.appInfo = await client.fetchApplication();
  }, 600);
});

const log = message => {
  console.log(` ${message}`);
};
require("./util/eventLoader.js")(client);

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});
client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};
client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};
client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);//
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};
client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};
//
client.login(process.env.token);
//sess
client.on("ready", () => {
  client.channels.cache.get("825291213246431252").join();
})
client.on("ready", () => {
  client.channels.cache.get("807162915449995314").join();
})
//-------------------- Sa As Sistemi --------------------//

client.on("message", async msg => {
const Database = require("plasma-db");
const db = new Database("./database.json"); 
  const gereksiz = await db.fetch(`saas_${msg.guild.id}`);
  if (gereksiz === "aktif") {
    if (
      msg.content.toLowerCase() == "selam" ||
      msg.content.toLowerCase() == "selamun aleyküm" ||
      msg.content.toLowerCase() == "s.a" ||
      msg.content.toLowerCase() == "sea" ||
      msg.content.toLowerCase() == "sa" ||
      msg.content.toLowerCase() == "selamm" ||
      msg.content.toLowerCase() == "saa" ||
      msg.content.toLowerCase() == "saaa"
    )
        return msg.reply("Aleyküm selam hoşgeldin nasılsın?");
    } else if (gereksiz === "deaktif") {
  }
  if (!gereksiz) return;
});

//-------------------- Sa As Sistemi --------------------//
//-------------------- Küfür Engel ---------------------//
client.on('message', async msg => {
const Database = require("plasma-db");
const db = new Database("./database.json");
let engin = db.fetch(`küfürengellog_${msg.guild.id}`)
let enginn = db.fetch(`küfürengelmesaj_${msg.guild.id}`)
let enginar = db.fetch(`küfürengel_${msg.guild.id}`)
if(enginar === "aktif") {
const kufurler = ["oç", "amk", "ananı sikiyim", "ananıskm", "piç", "amk", "amsk", "sikim", "sikiyim", "orospu çocuğu", "piç kurusu", "kahpe", "orospu", "sik", "yarrak", "amcık", "amık", "yarram", "sikimi ye", "mk", "mq", "aq", "amq",];
if (kufurler.some(word => msg.content.includes(word))) {
  try {
    if (!msg.member.hasPermission("BAN_MEMBERS")) {
          msg.delete();
          const embed = new Discord.MessageEmbed()
          .setTitle('Bir küfür yakaladım!')
          .setDescription(`<@${msg.author.id}> adlı kullanıcı küfürlü kelime kullandı! \n Kullanıcının ettiği küfür silindi!`)
          client.channels.cache.get(engin).send(embed)
          return msg.channel.send(`<@${msg.author.id}>, ${enginn}`)
 
        }              
      } 
      catch(err) {
        console.log(err);
      }
}
}
else return;
});
//-------------------- Küfür Engel ---------------------//
//reklamengel

client.on('message', async msg => {
const Database = require("plasma-db");
const db = new Database("./database.json");
let engin = db.fetch(`küfürengellog_${msg.guild.id}`)
let enginn = db.fetch(`küfürengelmesaj_${msg.guild.id}`)
let enginar = db.fetch(`küfürengel_${msg.guild.id}`)
if(enginar === "aktif") {
const kufurler = ["oç", "amk", "ananı sikiyim", "ananıskm", "piç", "amk", "amsk", "sikim", "sikiyim", "orospu çocuğu", "piç kurusu", "kahpe", "orospu", "sik", "yarrak", "amcık", "amık", "yarram", "sikimi ye", "mk", "mq", "aq", "amq",];
if (kufurler.some(word => msg.content.includes(word))) {
  try {
    if (!msg.member.hasPermission("BAN_MEMBERS")) {
          msg.delete();
          const embed = new Discord.MessageEmbed()
          .setTitle('Bir reklam yakaladım!')
          .setDescription(`<@${msg.author.id}> adlı kullanıcı reklam ya! \n Kullanıcının ettiği küfür silindi!`)
          client.channels.cache.get(engin).send(embed)
          return msg.channel.send(`<@${msg.author.id}>, ${enginn}`)
 
        }              
      } 
      catch(err) {
        console.log(err);
      }
}
}
else return;
});

//reklamengel