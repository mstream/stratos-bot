const {eventNames} = require('../consts');


module.exports = {
    [eventNames.MESSAGE]: require('./message'),
    [eventNames.READY]: require('./ready'),
    [eventNames.SPEAKING]: require('./speaking'),
};