function renderLicenseBadge(data) {
  let licenceChoice = data.license[0];
  let pickedLicense = "";
  if (licenceChoice === "MIT") {
    pickedLicense =
      "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
  } else if (licenceChoice === "GNU General Public License 2.0") {
    pickedLicense =
      "![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg";
  } else if (licenceChoice === "Apache License 2.0") {
    pickedLicense =
      "![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)";
  } else if (licenceChoice === "GNU General Public License 3.0") {
    pickedLicense =
      "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)";
  } else if (licenceChoice === "BSD 3-Clause") {
    pickedLicense =
      "![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)";
  } else if (licenceChoice === "Mozilla Public License 2.0") {
    pickedLicense =
      "![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)";
  } else {
    pickedLicense = "";
  }
  return pickedLicense;
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  let licenseURL = data.license[0];
  let chosedLink = "";

  if (licenseURL === "MIT") {
    chosedLink = `<a href = "https://opensource.org/licenses/MIT">License Link</a>`;
  } else if (licenseURL === "GNU General Public License 2.0") {
    chosedLink = `<a href = "http://unlicense.org/">License Link</a>`;
  } else if (licenseURL === "Apache License 2.0") {
    chosedLink = `<a href = "https://opensource.org/licenses/Apache-2.0">License Link</a>`;
  } else if (licenseURL === "GNU General Public License 3.0") {
    chosedLink = `<a href = "https://www.gnu.org/licenses/gpl-3.0">License Link</a>`;
  } else if (licenseURL === "BSD 3-Clause") {
    chosedLink = `<a href = "https://opensource.org/licenses/BSD-3-Clause">License Link</a>`;
  } else if (licenseURL === "Mozilla Public License 2.0") {
    chosedLink = `<a href = "https://opensource.org/licenses/MPL-2.0">License Link</a>`;
  } else {
    chosedLink = "";
  }
  return chosedLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  let licenseSection = data.license[0];
  let pickedSection = "";
  if (licenseSection === "MIT") {
    pickedSection = `<a href = "https://gist.github.com/ckib16/8732561535ed766cd6b8">MIT Guide</a>`;
  } else if (licenseSection === "GNU General Public License 2.0") {
    pickedSection = `<a href = "https://gist.github.com/ckib16/8732561535ed766cd6b8">MIT Guide</a>`;
  } else if (licenseSection === "Apache License 2.0") {
    pickedSection = `<a href = "https://github.com/Medium/opensource/blob/master/apache-license-2.0.md">Apache Guide</a>`;
  } else if (licenseSection === "GNU General Public License 3.0") {
    pickedSection = `<a href = "https://github.com/TheFox/GPLv3.mdl">GPLv3 Guide</a>`;
  } else if (licenseSection === "BSD 3-Clause") {
    pickedSection = `<a href = "https://gist.github.com/ckib16/8732561535ed766cd6b8">MIT Guide</a>`;
  } else if (licenseSection === "Mozilla Public License 2.0") {
    pickedSection = `<a href = "https://gist.github.com/ckib16/8732561535ed766cd6b8">MIT Guide</a>`;
  } else {
    pickedSection = "Not Available";
  }
  return pickedSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Badge: ${renderLicenseBadge(data)}
  ## Table of Contents:
  * [Installation](#Installation)
  * [Tests](#Tests)
  * [Credits](#Credits)
  * [Deployment](#Deployment)
  * [License](#License)
## Description:
${data.description}
# Installation
${data.installation}
# Tests
${data.tests}
# Credits
${data.credits}
# Deployment
${data.deployment}
## License
 A. Your Badge : ${renderLicenseBadge(data)}
 B. Your Badge Link : ${renderLicenseLink(data)}
 C. Your Badge Readme: ${renderLicenseSection(data)}
`;
}

module.exports = generateMarkdown;
