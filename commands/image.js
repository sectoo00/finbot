const img = require('images-scraper') 

const Discord = require("discord.js"); 

const google = new img({ 

puppeteer: { 

headless: true, 

} 

}) 

 

module.exports = { 

name: 'image', 

description: "Sends a image image", 

async execute(message, args) { 

const query = args.join("  ") 

if (!query) return message.channel.send('Please enter a search query') 

 

var random = Math.floor((Math.random() * 90) + 0); 

console.log(random) 

const results = await google.scrape(query, 100) 

const hasil = results[random].url 

message.channel.send('YOUR IMAGE...') 

let embedpic = new Discord.MessageEmbed() 

.setColor('#DE3163')

.setTitle('IMAGE REALETED WITH YOUR SEARCH') 

.setImage(hasil)

.setFooter('🟥 🟩 🟦 ') 

.setThumbnail(url = 'https://media.giphy.com/media/fl57Vl5C6iLSiTdCkC/giphy.gif')

.addFields(
    {name: 'YOUR', value: query}
)

message.channel.send(embedpic) 

} 

}