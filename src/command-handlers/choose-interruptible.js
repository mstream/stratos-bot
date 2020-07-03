module.exports = async (client, message) => {
    const embed = {
        color: 0x0000ff,
        name: client.user.username,
        title: 'Next interruptible person',
        description: 'Warren Haskins',
    };

    await message.channel.send({embed});

}