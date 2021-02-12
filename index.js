const inquirer = require('inquirer');
const fs = require('fs');


generateREADME = (responses) => 
`# ${responses.title}

## Description 

${responses.description}

## Table of Contents (Optional)

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

// ## Credits  leave this out???


## License

${responses.license}


## Contributing

${responses.contributors}

## Tests

${responses.tests} 
`

inquirer.prompt[(
    {
        type: 'input',
        name: 'title',
        message: 'what is your project title?',
    },

    {
        type: 'input',
        name: 'description',
        message: 'Write a brief desciption of your project'
    },

    {
        type: 'input',
        name: 'installation',
        message: 'How do we install your app?'
    },

    {
        type: 'input',
        name: 'usage',
        message: 'Enter relevent information about usage'
    },

    {
        type: 'input',
        name: 'contributors',
        message: 'List contributors and guidelines for contributing'
    },

    {
        type: 'input',
        name: 'tests',
        message: 'Document any relevant tests'
    },

    {
        type: 'list',
        name: 'license',
        message: 'Select a license',
        choices: ['MIT', 'Apache', 'GPL']
    },

    {
        type: 'input',
        name: 'username',
        message: 'what is your Github username?'
    },

    {
        type: 'input',
        name: 'email',
        message: 'what is your email address?'
    }
)]

    .then((responses) => {
        const readmeContent = generateREADME(responses);

        fs.writeFile('README.MD', readmeContent, (err) =>
            err ? console.log(err) : console.log('Successfully created README.MD!')
        );
    });