const moment = require('moment');

const nonFridayGifUrls = [
    'https://media.giphy.com/media/Er3QVX48nt5ok/giphy.gif',
    'https://media.giphy.com/media/kKefeMw8rbMVq/giphy.gif',
    'https://media.giphy.com/media/3o6ZsX2OZJ8G3Tec6Y/giphy.gif',
    'https://media.giphy.com/media/IpeYSEZshTefe/giphy.gif',
    'https://media.giphy.com/media/KAvlM8rLYEXkLTMMM5/giphy.gif',
    'https://media.giphy.com/media/J2JTRI6OSsz8clyZEe/giphy.gif',
];

const fridayGifUrls = [
    'https://media.giphy.com/media/3o7btV1sSvBaaSAQKc/giphy.gif',
    'https://media.giphy.com/media/3oEjHKjVoNVsCeMoDe/giphy.gif',
    'https://media.giphy.com/media/13LG0jQiE8tJSw/giphy.gif',
    'https://media.giphy.com/media/l0IsHsQK0O7u2d1Cg/giphy.gif',
    'https://media.giphy.com/media/l0Iymd3jiCZspyYMM/giphy-downsized-large.gif',
    'https://media.giphy.com/media/XbTygeYSO8bQ5FB02p/giphy.gif',

];

const dayNames = {
    0: 'Sunday',
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
}

const getRandomItem = array => array[Math.floor(Math.random() * Math.floor(array.length))];


module.exports = async (client, message) => {
    const dayName = dayNames[moment().day()];
    const isFriday = dayName === 'Friday';

    const gifUrl = isFriday ?
        getRandomItem(fridayGifUrls):
        getRandomItem(nonFridayGifUrls);

    const embed = {
        color: 0x0000ff,
        name: client.user.username,
        title: 'Today is',
        description: isFriday ? '' : dayName,
        image: {
            url: gifUrl,
        },
    };

    await message.channel.send({embed});

}