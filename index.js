const {writeFile} = require('./generate');
const inquirer = require('inquirer');
const generateRM = require('./utils/template');

const promptREADME = () => {
    return inquirer.prompt([
        { // Title
            type: 'input',
            name: 'title',
            message: 'What is the title of your project? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('A title is required!');
                    return false;
                }
            }
        },
        { // Description
            type: 'input',
            name: 'description',
            message: 'Write a discription for your project? (Required)',
            validate: describeInput => {
                if (describeInput) {
                    return true;
                } else {
                    console.log('Please type a decription!');
                    return false;
                }
            }
        },
        { // Licence
            type: 'list',
            name: 'license',
            message: 'Choose a license',
            choices: ['Community', 'MIT', 'GNU GPLv3']
        },
        { // Installation
            type: 'input',
            name: 'install',
            message: 'Describe the steps of how to install use of your project. (Required)',
            validate: installInput => {
                if (installInput) {
                    return true;
                } else {
                    console.log('Please type in how to install use of your project!')
                }
            }
        },
        { // Usage
            type: 'input',
            name: 'usage',
            message: 'Provide instuctions on how to use the project.'
        },
        { // Usage Picture
            type: 'input',
            name: 'usagePicture',
            message: 'Provide a picture via link or directory location.'
        },
        { // Github
            type: 'input',
            name: 'github',
            message: 'What is your github username. (Required) A link will be created for your page upon submitting.',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter you GitHub username!')
                }
            }
        },
        { // Confirm Tests
            type: 'confirm',
            name: 'confirmTest',
            message: 'Do you want to make a description  of tests you made in your project?',
            default: true
        },
        { // Tests
            type: 'input',
            name: 'tests',
            message: 'Describe any tests you have made in your project.',
            validate: testInput => {
                if (testInput) {
                    return true;
                } else {
                    console.log('Please write a decription!')
                    return false;
                }
            },
            when: ({ confirmTest }) => confirmTest
        },
        { // Email confirm
            type: 'confirm',
            name: 'confirmEmail',
            message: 'Would you like to enter your email? (Recommended for contact use)',
            default: true
        },
        { // Email
            type: 'input',
            name: 'email',
            message: 'Enter your email',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email!');
                    return false;
                }
            },
            when: ({ confirmEmail }) => confirmEmail
        },
        { // Contributer confirm
            type: 'confirm',
            name: 'confrimContribute',
            message: 'Would you like to add a contribution?',
            default: true
        },
        { // Contributor
            type: 'input',
            name: 'contribute',
            message: 'Provide information about contributor(s).',
            validate: contributeInput => {
                if (contributeInput) {
                    return true
                } else {
                    console.log('Please provide information about contributor');
                    return false;
                }
            } ,
            when: ({ confrimContribute }) => confrimContribute
        },
    ])
}

promptREADME()
    .then(readmeData => {
        return generateRM(readmeData);
    })
    .then(pageMD => {
        return writeFile(pageMD);
    });