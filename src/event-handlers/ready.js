const {commandPrefixes} = require('../consts');

module.exports = client => async () => {
    const statusMessage = commandPrefixes.map(commandPrefix => `${commandPrefix}help`).join(' | ');
    await client.user.setActivity(statusMessage, {type: 'LISTENING'});
    console.log(`Logged in as ${client.user.tag}!`);
}
