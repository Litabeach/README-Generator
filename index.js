const inquirer = require('inquirer');
const fs = require('fs');

inquirer.prompt[(
    {
        type: 'input',
        name: 'title',
        message: 'what is your project title?',
    },

    {
        type: 'input',
        name: 'username',
        message: 'what is your Github username?'
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
    }


)]