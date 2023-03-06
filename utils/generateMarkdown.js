// function to generate markdown for README


function renderingLicenseBadge(license) {
  if(license !== "None")
  return `![Github license](https://img.shields.io/badge/license-${license}-yellowgreen.svg)`
  return ``
  }
  

// Function to return the license badge link
// function renderLicenseLink() {
  const renderLicenseLink = (license) => {
  if(license !== `None`) {
    return `* [license] (#license)\n`
  }
  return ``;
}
function generateMarkdown(data) {
  return `# ${data.title}
${renderingLicenseBadge(data.license)}

## Table of contents
- [Description](#description)
- [Instruction](#instruction)
- [Installation](#insatalltion)
- [Usage](#usesage)
${renderLicenseLink(data.license)}
- [Credit](#credit)
- [Contribution](#contribution)
- [Question](#question)

## Description
${data.description}

## Instruction
Clone repository to your local machine, install inquirer, run node index.js
 

## Installation
${data.installation}

## Usage
${data.usage}

## Credit
${data.credit}

## Contribution
${data.contribution}

## Questions
If got any questions, please reach out at GitHub: https://github.com/${data.github}
Email:${data.email}

`;
}

module.exports = generateMarkdown;
