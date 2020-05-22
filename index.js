const Dcord = require('./D3v.js/src');

const bot = new Dcord.CommandClient({debug: false, disabledEvents: ['PRESENCE_UPDATE'], prefix: '!', commandDir: 'cmds'})


bot.on('ready', async () => {
    console.log('Bot ready!');
    
})


bot.on('message', async (message) => {
    if(message.author.bot) return;

    if(message.content.toLowerCase().includes('ауф')) 
        message.channel.send('ауф! '.repeat(6)); 
    
    if(message.content.endsWith('.')) message.reply(`Засунь эту точку себе в зад.`);
});


bot.on('commandInvokeError', (message, args, error) => {
    let channel = bot.channels.get('712739051794595902');
    channel.send(`
Призойшла ошибка!


Полное сообщение ошибки: ${message.content}

Стек ошибки\`\`\`
${error.stack}
\`\`\``)
})
bot.run('NDQ3ODQ4MTQ5NDQ1MjQ2OTc2.XscQlA.kNi8e8uvMCktmuRY8-aWx-DAosY');