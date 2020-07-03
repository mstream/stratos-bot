const commandHandlers = require('../command-handlers');
const {commandNames,commandPrefixes} = require('../consts');
const {getRandomItem} = require('../utils');

const wait = timeout => new Promise(resolve => setTimeout(resolve, timeout));

const handleCommand = async (client, message, commandName,params) => {
    const commandHandler = commandHandlers[commandName];

    if (commandHandler == null) {
        await message.channel.send(`unsupported command '${commandName}'`)
        await commandHandlers[commandNames.HELP](client,message);
    }

    await commandHandler(client,message,params);
};

const handleJockieMusicMessage = async (client,message) => {
    const songs = ['Best of Britney Spears', 'Spice Girls greatest hits', 'Justin Bieber mix'];

    if (message.embeds.some(embed => embed.description === "There are no more tracks")) {
        const song = getRandomItem(songs);
        await message.channel.send(`m!play ${song}`);
        await wait(5000);
        await message.channel.send(':disappointed_relieved:');
    }
}

const handleMessage = async (client, message)  => {

    for (const commandPrefix of commandPrefixes) {
        if (message.content.startsWith(commandPrefix)) {
            const [command, ...params] = message.content.split(" ").map(segment => segment.trim());
            await handleCommand(client, message, command.split("!")[1], params);
        }
    }

    if (message.author.bot && message.author.username.startsWith('Jockie Music')) {
        await handleJockieMusicMessage(client, message);
    }
}


module.exports = client => async message => handleMessage(client, message);