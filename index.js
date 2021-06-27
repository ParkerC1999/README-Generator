const {writeFile} = require('./generate');
const inquirer = require('inquirer');
const generateRM = require('./utils/template');

const promptREADME = (data) => {
    return inquirer.prompt([
        { // Title
            type: 'input',
            name: 'title',
            message: 'What is the title of your project? (Required)'
            // Validate 
        },
        { // Description
            type: 'input',
            name: 'description',
            message: 'Write a discription for your project? (Required)'
            // Validate
        },
        { // Licence
            type: 'list',
            name: 'license',
            message: 'Choose a license',
            choices: ['Community', 'MIT', 'GNU GPLv3']
        },
        // { // Contribution
        //     type: 'prompt',
        //     name: 'contribute'
        // },
        // { 
        //     type: 'confirm',
        //     name: 'addContributer',
        //     message: 'Would you like to add a new contributer?',
        //     default: false
        // }
    ])
}

promptREADME()
    .then(readmeData => {
        return generateRM(readmeData);
    })
    .then(pageMD => {
        return writeFile(pageMD);
    });