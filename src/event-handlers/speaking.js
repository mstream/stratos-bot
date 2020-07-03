const {commandPrefixes} = require('../consts');

// make a new stream for each time someone starts to talk
function generateOutputFile(channel, member) {
    // use IDs instead of username cause some people have stupid emojis in their name
    const fileName = `./recordings/${channel.id}-${member.id}-${Date.now()}.pcm`;
    return fs.createWriteStream(fileName);
}

module.exports = client => async (user, speaking) => {
    if (!speaking) {
        return;
    }

    user

    console.log(`started recording ${JSON.stringify(user)}`)
    const audioStream = receiver.createPCMStream(user);
    const outputStream = generateOutputFile(voiceChannel, user);
    audioStream.pipe(outputStream);
    audioStream.on('end', () => {
        console.log(`stopped recording ${JSON.stringify(user)}`)
    });
}
