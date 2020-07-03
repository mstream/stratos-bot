const axios = require('axios');
const config = require('../config');

const createQueryString = repositoryName =>
`
query {
    organization(login: "sky-uk") {
        repository(name:"${repositoryName}") {
            pullRequests(first: 1, states:[OPEN]) {
                nodes {
                    title,
                    url
                }
            }
        }
    }
}
`

const fetchOldestOpenPullRequests= async repositoryName => {
    try {
        return await axios({
            method: 'post',
            url: 'https://api.github.com/graphql',
            headers: {'Authorization': `Bearer ${config.github.token}`},
            data: {query: createQueryString(repositoryName)}
        });
    } catch (error) {
        if (error.response != null) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        } else if (error.request != null) {
            console.error('Did not receive response from the github api');
        } else {
            console.error('Could not create the request');
        }

    }
}

module.exports = async (client, message) => {

    const responsePromises = config.github.repositories.map(repositoryName => fetchOldestOpenPullRequests(repositoryName));

    const responses = await Promise.all(responsePromises);


    const fields = config.github.repositories.reduce(
        (fields, repositoryName, index) => {
            const response = responses[index];
            if (response.status !== 200) {
                return [...fields, {name: repositoryName, value: 'Fetching error'}];
            }

            const nodes = response.data.data.organization.repository.pullRequests.nodes;

            if (nodes.length === 0) {
                return fields;
            }

            return [...fields, {name: repositoryName, value: `${nodes[0].title}\n${nodes[0].url}\n`}];
        },
        []
    );

    const embed = {
        color: 0x0000ff,
        name: client.user.username,
        title: 'Open pull requests',
        description: fields.length > 0 ? 'Oldest, grouped per repository.' : 'None.',
        fields
    };

    await message.channel.send({embed});
};
