const inquirer = require('inquirer');
const fs = require('fs');


generateREADME = (responses) => 
`# ${responses.title}

![${responses.license} license badge](https://img.shields.io/badge/License-${responses.license}-blue)

## Description 

${responses.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)

## Installation

${responses.installation}

## Usage 

${responses.usage}

## License

This application is covered by the ${responses.license} License 

## Contributing

${responses.contributors}

## Tests

${responses.tests} 

## Questions

If you have any questions about this application, please contact ${responses.username} at ${responses.email}.
`;

inquirer.prompt([

    {
        type: 'input',
        name: 'title',
        message: 'what is your project title?',
    },

    {
        type: 'input',
        name: 'description',
        message: 'Write a brief desciption of your project',
    },

    {
        type: 'input',
        name: 'installation',
        message: 'How do we install your app?',
    },

    {
        type: 'input',
        name: 'usage',
        message: 'Enter relevent information about usage',
    },

    {
        type: 'input',
        name: 'contributors',
        message: 'Write guidelines for contributing',
    },

    {
        type: 'input',
        name: 'tests',
        message: 'Document any relevant tests',
    },

    {
        type: 'list',
        name: 'license',
        message: 'Select a license',
        choices: ['MIT', 'Apache', 'GPL'],
    },

    {
        type: 'input',
        name: 'username',
        message: 'what is your Github username?',
    },

    {
        type: 'input',
        name: 'email',
        message: 'what is your email address?',
    }
])

    .then((responses) => {
        const readmeContent = generateREADME(responses);

        fs.writeFile('README.md', readmeContent, (err) =>
            err ? console.log(err) : console.log('Successfully created README.md!')
        );
    });
