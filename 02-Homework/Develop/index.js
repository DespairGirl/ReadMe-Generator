// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = ["What is the title of your project?", "Give a brief summary of your project.", "What problem does your project solve?", "What steps did you take to solve this problem?", "What tools and resources did you use?", "Provide a link to your project.", "What license type would you like?", "Add gitignore?"];

inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: questions[0]

        },
        {
            type: 'input',
            name: 'summary',
            message: questions[1]

        },
        {
            type: 'input',
            name: 'problem',
            message: questions[2]

        },
        {
            type: ' input',
            name: 'solution',
            message: questions[3]

        },
        {
            type: 'input',
            name: 'tools',
            message: questions[4]

        },
        {
            type: 'input',
            name: 'link',
            message: questions[5]

        },
        {
            type:'list',
            name: 'lic',
            message: questions[6],
            choices:['None','Apache 2.0','GNU Public v3.0','MIT','Boost 1.0','Creative Commons', 'Eclipse 2.0', 'GNU Gen Public v2.0','GNU Lesser v2.1']
        },
        {
            type: 'confirm',
            name:'ignore',
            message: questions[7],
            default: true


        }

    ])
    .then((answers)=>{
        console.log(answers)

    })
// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
