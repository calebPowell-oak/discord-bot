const Discord = require('discord.js')
const { prefix, token } = require('../config.json')
const client = new Discord.Client()
const schedule = require('node-schedule')

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on('message', (msg) => {
  if (msg.content.startsWith(`${prefix}Luke`)) {
    msg.channel.send('Hi my name is Lucas  Liney AND I STOLE FROM  MY MOM\'S PURSE')
  }
  if (msg.content.startsWith(`${prefix}Pavone`)) {
    msg.channel.send('https://cdn.discordapp.com/attachments/97076140069359616/766420029226352680/image0.png')
  }
  if (msg.content.startsWith(`${prefix}Cows`)) {
    msg.channel.send('https://i.ytimg.com/vi/TInoP_KtAzw/maxresdefault.jpg')
  }
  if (msg.content.startsWith(`${prefix}Frog`)) {
    msg.channel.send('https://img.fireden.net/ic/image/1553/75/1553758320439.png')
  }
  if (msg.content.startsWith(`${prefix}mtgFrog`)) {
    msg.channel.send('https://mtgcardsmith.com/view/complete/full/2019/7/9/1562676542892670.png')
  }
})

client.login(token)

var rule = new schedule.RecurrenceRule()
rule.hour = 19
rule.minute = 0

schedule.scheduleJob(rule, function () {
  client.channels.fetch('363436676699127810').then((channel) => {
    channel.send('https://i.ytimg.com/vi/TInoP_KtAzw/maxresdefault.jpg')
  })
})
