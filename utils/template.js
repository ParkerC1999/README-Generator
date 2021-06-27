module.exports = readMeData => {
    const { title, description, license} = readMeData;

    return `# ${title}
    
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

## Licensing
${license} License

## Usage

## Contributing

## Tests

## Questions
    `;

}