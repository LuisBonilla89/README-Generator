const licenseBadgeURL = {
  MIT:
    "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
  "The Unlicense":
    "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)",
  "Apache 2.0":
    "[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
  "GNU v3":
    "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
  "BSD 3-Clause":
    "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
  "Mozilla Public License 2.0":
    "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
};

// Generate markdown data for README
function generateMarkdown(data) {
  // set url for license badge
  data.licenseBadge = licenseBadgeURL[data.license];

  // return data content
  return `# ${data.title}
${data.licenseBadge}
## Description
${data.description}

## Table of Contents
* [About](#About)
* [Acknowledgments](#Acknowledgements)
* [Prequisites](#Prerequisites)
* [Installation](#Installation)
* [Tests](#Tests)
* [Contribution](#Contribute)
* [Deployment](#Deployment)
* [License](#License)

# About
${data.about}
# Acknowledgments
${data.acknowledgments}
# Prerequisites
${data.prerequisites}
# Installation
${data.installation}
# Tests
${data.tests}
# Contribution
${data.contribute}
# Deployment
${data.deployment}
## License
This repository is licensed under the ${data.license} license.
`;
}

module.exports = generateMarkdown;
