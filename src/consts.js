const commandNames = {
  AINT: 'aint',
  CHOOSE_INTERRUPTIBLE: 'choose-interruptible',
  DILLI: 'dilli',
  GET_SUPPORT_PAIR: 'get-support-pair',
  GENERATE_SERVICE_NAME: 'generate-service-name',
  GIVE_FACT: 'give-fact',
  HELP: 'help',
  HUMMUS: 'hummus',
  NICE: 'nice',
  PAELLA: 'paella',
  PULL_REQUESTS: 'pull-requests',
  RAMYA: 'ramya',
  SAMMY: 'sammy',
  STRATOS_MIX: 'stratos-mix',
  TELL_JOKE: 'tell-joke',
  UNWORRENIFY: 'unworrenify',
  WHAT_DAY: 'what-day',
  WORRENIFY: 'worrenify',
}

const commandDescriptions = {

  [commandNames.AINT]: 'Do we have time for that?',
  [commandNames.CHOOSE_INTERRUPTIBLE]: 'Choosing the next interruptible team member',
  [commandNames.DILLI]: 'Impersonate Dilli.',
  [commandNames.GET_SUPPORT_PAIR]: 'Displays the current support pair',
  [commandNames.GENERATE_SERVICE_NAME]: 'Generating a service name',
  [commandNames.GIVE_FACT]: 'Giving a random useless fact',
  [commandNames.HELP]: 'Displaying this message',
  [commandNames.HUMMUS]: '"hummus"',
  [commandNames.NICE]: '"nice"',
  [commandNames.PAELLA]: '"paella"',
  [commandNames.PULL_REQUESTS]: 'Show open pull requests',
  [commandNames.RAMYA]: 'Ramya\'s popular quotes',
  [commandNames.SAMMY]: 'Impersonate Sammy.',
  [commandNames.STRATOS_MIX]: 'An ultimate stratos mix.',
  [commandNames.TELL_JOKE]: 'Telling a random geeky joke',
  [commandNames.WHAT_DAY]: 'Checking what day of the week is today',
  [commandNames.WORRENIFY]: 'Worrenify a message',
};

const commandPrefixes = ["s!","str!","stratos!"];

const eventNames = {
  MESSAGE: 'message',
  READY: 'ready',
  SPEAKING: 'speaking',
}

const jobNames = {
  REMINDER: 'reminder',
  SQUEAK: 'squeak',
}


module.exports = {
  commandNames,
  commandDescriptions,
  commandPrefixes,
  eventNames,
  jobNames,
};
