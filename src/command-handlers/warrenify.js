const axios = require('axios');

const warrenCodec = require('../warren_codec')

module.exports = async (client, message, params) => {

    const embed = {
        color: 0x0000ff,
        name: client.user.username,
        title: 'Encoded message',
        description: eval(warrenCodec.encode(params.join(' ').trim())).value0,
    };

    await message.channel.send({embed});
};
