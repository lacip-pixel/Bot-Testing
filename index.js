const { Client, GatewayIntentBits}= require('discord.js')
require('dotenv/config')

const client = new Client({
    intents:[
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ]
})

client.on('ready',()=>{
    console.log('Bot is Active! :)')
})

client.on('messageCreate',message  => {
    if (message.content === 'hello'){
        message.reply('Hey! :) Welcome')
    }
})
client.on('messageCreate',message  => {
    if (message.content === 'hi'){
        message.reply('Hey! :) Welcome')
    }
})
client.on('messageCreate',message  => {
    if (message.content === 'hey'){
        message.reply('Hey! :) Welcome')
    }
})

client.login(process.env.TOKEN)