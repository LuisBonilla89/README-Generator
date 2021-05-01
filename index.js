const inquirer = require("inquirer");
const fs = require("fs");
const generateMd = require("./utils/generateMarkdown");
// Prompt questions array for user to input README data
const questions = [
  {
    type: "input",
    message: "What is the project of your title?",
    name: "title",
  },

  {
    type: "input",
    message: "Describe what your project is about",
    name: "description",
  },

  {
    type: "input",
    message: "How can your application be installed?",
    name: "installation",
  },
  {
    type: "input",
    message: "What unit tests should be taken to verify your project?",
    name: "tests",
  },
  {
    type: "input",
    message: "List your collaborators if any, with their Github links",
    name: "credits",
  },
  {
    type: "input",
    message: "What technology is required to support your project?",
    name: "deployment",
  },
  {
    type: "checkbox",
    message: "What license is required for your project?",
    choices: [
      "MIT",
      "GNU General Public License 2.0",
      "Apache License 2.0",
      "GNU General Public License 3.0",
      "BSD 3-Clause",
      "Mozilla Public License 2.0",
    ],
    name: "license",
  },
];

function writeToFile(fileName, data) {
  fs.writeFile("./" + fileName, data, (err) => {
    if (err) {
      return console.error(err);
    } else {
      console.log("Successful writing to " + fileName);
    }
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(function (info) {
    writeToFile("README.md", generateMd(info));
  });
}
// Function call to initialize app
init();
