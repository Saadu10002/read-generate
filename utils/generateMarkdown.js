// function to generate markdown for README




function renderingLicenseBadge(license) {
  if (license !== "none") {
    return `![Github license](https://img.shields.io/badge/license-${license}-yellowgreen.svg)`;
  }
  return``;
}
// Function to return the license badge link
function renderLicenseLink() {
  if (license!== `none`) {
    return
  }
}
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
