// TODO: Include packages needed for this application
import fs from 'fs';
import inquirer from 'inquirer';
import renderLicenseSection from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input
const questions = [
    {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
    },
    {
    type: 'input',
    name: 'description',
    message: 'Please provide a description of your project:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide steps required to install your project:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide instructions and examples how to use your project:',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please list all contributers for your project:',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please provide test instructions for your project:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license does your project have?',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'None'],
      },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('README.md has been generated!')
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        //For formatting answers into a README string
        const readmeContent = `
        # ${answers.title}

        ## Description
        ${answers.description}

        ## Installation
        ${answers.installation}

        ## Usage
        ${answers.usage}

        ## Contribution
        ${answers.contributing}

        ## Tests
        ${answers.tests}

        ## License
        ${renderLicenseSection(answers.license)}

         `;
            writeToFile('README.md', readmeContent);
    });
}

// Function call to initialize app
init();
