// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  } switch (license) {
    case 'MIT':
      return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
    case 'Apache 2.0':
      return '![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
    case 'GPL 3.0':
      return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
    default:
      return '';
  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }
  switch (license) {
    case 'MIT':
      return '[License Link](https://opensource.org/licenses/MIT)';
    case 'Apache 2.0':
      return '[License Link](https://opensource.org/licenses/Apache-2.0)';
    case 'GPL 3.0':
      return '[License Link](https://www.gnu.org/licenses/gpl-3.0)';
    default:
      return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }
  return `## License\n\n${renderLicenseBadge(license)}\n\n${renderLicenseLink(license)}`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}\n\n${renderLicenseSection(data.license)}`;

}

export default generateMarkdown;
