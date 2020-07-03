const {commandNames} = require('../consts');

module.exports = {
    [commandNames.AINT]: require('./sound.js')('aint'),
    [commandNames.CHOOSE_INTERRUPTIBLE]: require('./choose-interruptible'),
    [commandNames.DILLI]: require('./dilli'),
    [commandNames.GET_SUPPORT_PAIR]: require('./get-support-pair'),
    [commandNames.GENERATE_SERVICE_NAME]: require('./generate-service-name'),
    [commandNames.RAMYA]: require('./ramya'),
    [commandNames.GIVE_FACT]: require('./give-fact'),
    [commandNames.HELP]: require('./help'),
    [commandNames.HUMMUS]: require('./sound.js')('hummus'),
    [commandNames.NICE]: require('./sound.js')('nice'),
    [commandNames.PAELLA]: require('./sound.js')('paella'),
    [commandNames.PULL_REQUESTS]: require('./pull-requests'),
    [commandNames.SAMMY]: require('./sammy'),
    [commandNames.STRATOS_MIX]: require('./sound.js')('nice'),
    [commandNames.TELL_JOKE]: require('./tell-joke'),
    [commandNames.UNWORRENIFY]: require('./unwarrenify'),
    [commandNames.WHAT_DAY]: require('./what-day'),
    [commandNames.WORRENIFY]: require('./warrenify'),
};
