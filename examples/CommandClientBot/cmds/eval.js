const Command = require('../dcord/src/types/Command')
const { inspect } = require('util');

class EvalCommand extends Command {
    constructor(){
        super({
            name: '>',
            description: '>',
            category: '>'
        })
    }


    async execute(message, args){
        const evaled = inspect(await eval(args.join(' ')), {depth: 0});
        message.channel.send(`\`\`\`\n${evaled}\`\`\``);
    }
}

module.exports = EvalCommand;