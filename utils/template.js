const generateContribute = data => {
    if (!data) {
        return '';
    }
    return `

## Contributing
${data}

    `
}


const generateEmail = emailData => {
    if (!emailData) {
        return '';
    }
    return `
${emailData}
    `
}


const generateTests = testData => {
    if (!testData) {
        return '';
    }
    return `

## Tests
${testData}

    `
}


module.exports = readMeData => {
    const { title, description, license, install, usage, usagePicture, github, email, contribute, tests, ...rest } = readMeData;

    return `[badge](https://img.shields.io/badge/License-${license}-blue)
# ${title}
    
## Description
${description}

## Table of Contents
* [Installation](#installation)
* [Licensing](#licensing)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
${install}

## Licensing
${license} License

## Usage
${usage}
[usage](${usagePicture})
${generateContribute(contribute)}
${generateTests(tests)}
## Questions
Github: [${github}](github.com/${github})
${generateEmail(email)}
    `;

}