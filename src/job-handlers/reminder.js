const handleReminder = async (options, client) => {
    const embed = {
        color: 0x0000ff,
        name: client.user.username,
        title: 'Reminder',
        description: options.message,
    };

    client.channels.cache
        .filter(channel => channel.type === 'text' && options.channels.includes(channel.name))
        .forEach(channel => channel.send({embed}));
};

module.exports = handleReminder;