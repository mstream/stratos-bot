const axios = require('axios');
const config = require('../config');

module.exports = async (client, message) => {

    const response = await axios({
        auth: {
            username: config.xmatters.username,
            password: config.xmatters.password,
        },
        method: 'get',
        url: 'https://sky.xmatters.com/api/xm/1/on-call?groups=UK%20OTT%20DCM%20Support'
    });

    if (response.status !== 200) {
        await message.channel.send(`I have no clue. Sorry...`);
    }

    let supportPeople = response.data.data[0].members.data.map(memberData => `${memberData.member.firstName} ${memberData.member.lastName}`)

    const embed = {
        color: 0x0000ff,
        name: client.user.username,
        title: 'People on the watch',
        description: '',
        fields: [
            {
                name: 'Primary',
                value: supportPeople[0]
            },
            {
                name: 'Secondary',
                value: supportPeople[1]
            }
        ]
    };

    await message.channel.send({embed});
}