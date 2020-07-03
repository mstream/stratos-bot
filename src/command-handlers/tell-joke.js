const axios = require('axios');

module.exports = async (client, message) => {
    const response = await axios({
        method: 'get',
        url: 'https://api.chucknorris.io/jokes/random?category=dev'
    });

    if (response.status !== 200) {
        await message.channel.send(`I can't recall any. Sorry...`);
    }

    const embed = {
        color: 0x0000ff,
        name: client.user.username,
        title: 'Joke',
        description: response.data.value,
    };

    await message.channel.send({embed});
};
