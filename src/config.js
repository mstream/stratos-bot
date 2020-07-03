const {jobNames} = require('./consts');


module.exports = {
  discord: {
    token: process.env.DISCORD_TOKEN,
  },
  jobs: [
      {
        name: jobNames.REMINDER, cron: '00 45 09 * * 5', 
        options: {message: '@here Please submit the time sheets.', channels: ['kraken-shop']}
      },
      {
        name: jobNames.REMINDER, cron: '00 00 17 * * 5',
        options: {message: 'The weekend has landed!', channels: ['kraken-shop']}
      },
    ],
    github: {
      token: process.env.GITHUB_TOKEN,
      repositories: [
          'ovp-concurrency',
          'ovp-stratos-config',
          'ovp-stratos-crm',
          'ovp-dcm',
          'ovp-hkm',
          'ovp-hkm-client',
          'ovp-parental-control',
          'ovp-stratos-stratline',
          'stratos-monitoring',
      ],
    },
    xmatters: {
      username: 'x-api-key-55b1e3e9-ec0a-4fd7-a1cb-c619ad095497',
      password: process.env.X_MATTERS_PASSWORD,
    }
};
