const fs = require('fs');
const {Client} = require('discord.js');
const {CronJob} = require('cron');
const config = require('./config');
const {eventNames} = require('./consts');
const eventHandlers = require('./event-handlers');
const jobHandlers = require('./job-handlers');
const http = require('http');


http.createServer((_, response) => response.end()).listen(process.env.PORT)

const mode = process.env.MODE;

function generateOutputFile(channel, member) {
    const fileName = `./.recordings/${channel.id}-${member.id}-${Date.now()}.pcm`;
    return fs.createWriteStream(fileName);
}

const client = new Client();

if (mode === "recording") {
    const username = 'Ramya';


    client.login(config.discord.token);

    client.on('ready', () => {
        const channel = client.channels.cache
            .filter(channel => channel.type === 'voice' && channel.members.array().some(member => member.displayName === username)).array()[0];

        if(channel == null) {
            console.log(`Can't find any voice channel with user ${username}`);
            return;
        }

        channel.join()
            .then(conn => {
                conn.on('speaking', (user, speaking) => {
                    if (speaking) {
                        const audioStream = conn.receiver.createStream(user, { mode: 'pcm' });
                        console.log(`I'm listening to ${user}`);
                        const outputStream = generateOutputFile(channel, user);
                        audioStream.pipe(outputStream);
                        outputStream.on("data", console.log);
                        audioStream.on('end', () => {
                            console.log(`I'm no longer listening to ${user}`);
                        });
                    }
                });
            })
            .catch(console.log);
    });


} else {
    const registerJobs = () => config.jobs.map(job => new CronJob(
        job.cron,
        () => jobHandlers[job.name](job.options, client),
        () => {},
        false,
        'Europe/London'
    ).start());

    Object.values(eventNames).forEach(eventName => client.on(eventName, eventHandlers[eventName](client)));

    client.login(config.discord.token)
        .then(()=>registerJobs())
        .catch(error => console.error(error.stack));
}



