const {jobNames} = require('../consts');


module.exports={
    [jobNames.REMINDER]: require('./reminder'),
    [jobNames.SQUEAK]: require('./squeek')
};