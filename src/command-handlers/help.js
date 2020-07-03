const {commandDescriptions,commandNames} = require('../consts');

module.exports = async (client, message) => {
    const fields = Object.values(commandNames).reduce((fields, commandName) => [...fields, {
        name: commandDescriptions[commandName],
        value: commandName
    }], []);
    await message.channel.send({
        embed: {
            color: 0x0000ff,
            name: client.user.username,
            title: 'Help',
            description: 'Feel free to use any of following commands:',
            fields
        },

    })};