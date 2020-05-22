const Command = require('../dcord/src/types/Command')
const EmbedBuilder = require('../dcord/src/types/EmbedBuilder')

class TestCommand extends Command {
    constructor(){
        super({
            name: 'auff',
            description: 'aufff',
            category: 'aufff'
        })
    }


    async execute(message, args){
        message.channel.send(
            new EmbedBuilder()
            .setTitle('тайтл')
            .setDescription('опис')
            .setUrl('https://natribu.org')
            .setColor('#2ab6f8')
            .setTimestamp()
            .setAuthor(message.author.username, 'https://cdn.discordapp.com/avatars/678121374887444480/1833cf1c948922c6bbefd535bcd83656.png?size=1024', 'https://cdn.discordapp.com/avatars/678121374887444480/1833cf1c948922c6bbefd535bcd83656.png?size=1024')
            .setFooter('ауф! ауф! ауф!', 'https://cdn.discordapp.com/avatars/678121374887444480/1833cf1c948922c6bbefd535bcd83656.png?size=1024')
            .setImage('https://cdn.discordapp.com/avatars/678121374887444480/1833cf1c948922c6bbefd535bcd83656.png?size=1024')
            .setThumbnail('https://cdn.discordapp.com/avatars/678121374887444480/1833cf1c948922c6bbefd535bcd83656.png?size=1024')
            .addField('!inline', 'ok')
            .addField('1inline', 'iasno', true)
            .addField('2inline', 'shock', true)
            .build()
        );
    }
}

module.exports = TestCommand;