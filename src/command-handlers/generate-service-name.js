const {getRandomItem} = require('../utils');

const bases = [
    'Account',
    'Bookmarks',
    'Devices',
    'Downloads',
    'Entitlements',
    'Households',
    'Rules',
]

const suffixes1 = [
    'Agent',
    'Janitor',
    'Manager',
    'Provider',
]

const suffixes2 = [
    null,
    'Api',
    'Gateway',
    'Proxy',
    'Service',
];

const abbreviate = name => name.split(' ').map(segment => segment.charAt(0)).join('');

module.exports = async (client, message) => {
    const base = getRandomItem(bases);
    const suffix1 = getRandomItem(suffixes1);
    const suffix2 = getRandomItem(suffixes2);


    const fullServiceName = `${base} ${suffix1}${suffix2 != null ? ' ' + suffix2: ''}`;
    const serviceNameAbbreviation = abbreviate(fullServiceName);

    const embed = {
        color: 0x0000ff,
        name: client.user.username,
        title: 'Generated service name',
        description: `${serviceNameAbbreviation} - ${fullServiceName}`
    };

    await message.channel.send({embed});

}