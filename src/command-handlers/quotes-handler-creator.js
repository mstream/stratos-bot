module.exports = quotes => async (client, message, params) => {

    const printHelp = async () => {
        const embed = {
            color: 0x0000ff,
            name: client.user.username,
            title: 'Supported quotes',
            description: Object.keys(quotes).join(", "),
        };

        await message.channel.send({embed});
    }

    if (params == null || params.length === 0) {
        return await printHelp();
    }

    const quoteKey = Object.keys(quotes).find(quoteKey => quoteKey === params[0]);

    if (quoteKey == null) {
        return await printHelp();
    }

    const channels = client.channels.cache
        .filter(channel =>
            channel.type === 'voice' &&
            channel.members.array().some(member => member.id === message.author.id));

    for(const channel of channels.array()) {
        try {
            const connection = await channel.join();
            connection.play(`sound/${quotes[quoteKey]}.mp3`);
        } catch (error) {
            throw error;
        }

    }
}
