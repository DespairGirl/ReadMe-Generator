// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const util = require('util');
const writeFileAsync = util.promisify(fs.writeFile);
let fileName = 'READMEFin1.md'

// TODO: Create an array of questions for user input
const questionsPrompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Enter the name of your Project...'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Add a description of your Project...'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Add installations needed for the Project to run...'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Enter how this Project can be used... '
        },

        {
            type: 'list',
            name: 'license',
            message: 'Choose a License.',
            choices: ['None', 'Apache 2.0', 'GNU v3.0', 'MIT', 'Boost 1.0', 'Creative Commons', 'Eclipse 2.0', 'GNU v2.0', 'GNU Lesser v2.1']
        },
        {
            type: 'input',
            name: 'contributions',
            message: 'List your contributors...'
        },
        {
            type: 'input',
            name: 'test',
            message: 'Enter test instructions...'
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your Github Username...'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address...'
        }
    ]);
}
questionsPrompt()

    .then((data) => writeFileAsync(fileName, generateMarkdown(data)))
    .then(() => console.log('READEME GENERATED!'))
    .catch((error) => console.log(error))
    


