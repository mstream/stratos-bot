module.exports = async (client, message) => {

    const authorId = message.author.id;

    const channels = client.channels.cache
        .filter(channel => channel.type === 'voice' && channel.members.array().some(member => member.id === authorId));

    for(const channel of channels.array()) {
        try {
            const connection = await channel.join();
            connection.play('hummus.mp3');
        } catch (error) {
            throw error;
        }

    }
}
