const axios = require('axios');

module.exports = async (client, message) => {
    const response = await axios({
        method: 'get',
        url: 'https://uselessfacts.jsph.pl/random.json?language=en'
    });

    if (response.status !== 200) {
        await message.channel.send(`I can't recall any. Sorry...`);
    }

    const embed = {
        color: 0x0000ff,
        name: client.user.username,
        title: 'Fact',
        description: response.data.text,
    };

    await message.channel.send({embed});
};
