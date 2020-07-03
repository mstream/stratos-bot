
const handleSqueak = async (options, client) => {
    const channels = client.channels.cache
        .filter(channel => channel.type === 'voice' && options.channels.includes(channel.name));

    for(const channel of channels.array()) {
        try {
            const connection = await channel.join();
            connection.play('chicken.mp3');
        } catch (error) {
            throw error;
        }

    }
};

module.exports = handleSqueak;