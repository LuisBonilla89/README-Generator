const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMd = require("./utils/generateMarkdown");
const writeFileAsync = util.promisify(fs.writeFile);

// Prompt questions array for user to input README data
const questions = [
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "Describe what your project is about",
    name: "about",
  },
  {
    type: "input",
    message:
      "List any references that influened the development of your project?",
    name: "acknowledgements",
  },
  {
    type: "input",
    message:
      "List any prerequistite software is needed to support your project?",
    name: "prerequisite",
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
    message: "How can updates be made to your project?",
    name: "contribution",
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
    ],
    name: "license",
  },
];

const promptUser = () => {
  return inquirer.prompt(questions);
};

const writeToFile = (fileName, data) => {
  return writeFileAsync(fileName, data);
};

const init = async () => {
  try {
    console.log(
      "Please answer the following questions to generate your README file:"
    );

    // prompt user questions for data entry CHANGE THIS
    const answers = await promptUser();

    // create README content using answers CHANGE THIS
    const fileContent = generateMd(answers);

    // write answers to README.md file
    await writeToFile("./result/README.md", fileContent);

    // notify user of file output generation
    console.log("README.md successfully created in output folder.");
  } catch (err) {
    console.error("Errors identified. README generation failed.");
    console.log(err);
  }
};

init();
