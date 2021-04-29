const Discord = require(`discord.js`);
require('dotenv').config();

const client = new Discord.Client();

const prefix = process.env.PREFIX;

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles){
    const command = require(`./commands/${file}`);       

    client.commands.set(command.name, command)
}

client.once('ready', () =>{
    console.log(`up`);
});


client.on('guildMemberAdd', guildMemeber =>{
    let welocomeRole = guildMember.guild.roles.cache.find(role => role.name === 'member');

    guildMember.role.add(welocomeRole);

    guildMemeber.guild.channels.cache.get('834174259281920070').set(`welcome <@${guildMember.user.id}> to our server `)

})

client.on('message', message =>{ 
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();


    if (command == 'image'){
        client.commands.get('image').execute(message, args);
    }
    
 

       
})
 


client.login(process.env.DISCORD_TOKEN)