// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name? (Required)",
      validate: (userInput) => {
        if (userInput) {
          return true;
        } else {
          console.log("Please enter your name!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "github",
      message: "Enter your GitHub Username (Required)",
      validate: (githubInput) => {
        if (githubInput) {
          return true;
        } else {
          console.log("Please enter your GitHub username!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "Enter your Email (Required)",
      validate: (emailInput) => {
        if (emailInput) {
          return true;
        } else {
          console.log("Please enter your Email!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "title",
      message: "Enter your ReadMe title (Required)",
      validate: (readMeInput) => {
        if (readMeInput) {
          return true;
        } else {
          console.log("Please enter a title!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "description",
      message: "Enter a description of your ReadMe (Required)",
      validate: (descriptionInput) => {
        if (descriptionInput) {
          return true;
        } else {
          console.log("Please enter your description!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "installation",
      message: "How would you install your dependencies? (Required)",
      validate: (installInput) => {
        if (installInput) {
          return true;
        } else {
          console.log("Please enter the installation instructions!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "usage",
      message: "What is the app used for?",
    },
    {
      type: "input",
      name: "contributors",
      message: "Who contributed to this application?",
    },
    {
      type: "input",
      name: "test",
      message: "Enter any test instructions",
    },
    {
      type: "list",
      name: "license",
      message:
        "Were there any licenses needed? (choose any that are applicable)",
      choices: ["none", "MIT", "Apache", "Mozilla", "WTFPL"],
    },
  ]);
};
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (err) {
    if (err) {
      return console.log(err);
    } else {
      console.log("Succesfully wrote" + fileName);
    }
  });
}
// TODO: Create a function to initialize app
function init() {
  questions().then(function (answerObject) {
    writeToFile("ReadMeGenerator.md", generateMarkdown(answerObject));
  });
}

// Function call to initialize app
init();
