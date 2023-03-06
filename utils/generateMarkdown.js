// function to generate markdown for README


function renderingLicenseBadge(license) {
  if(license !== "None")
  return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`
  return ``
  }
  

// Function to return the license badge link
function renderLicenseLink() {
 
}
function generateMarkdown(data) {

  return `# ${data.title}
${renderingLicenseBadge(data.license)}
`;
}

module.exports = generateMarkdown;
