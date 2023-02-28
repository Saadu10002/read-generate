const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
{
    type: `input`,
    name: `title`,
    message: `what is the name of your project:`
},
{
    type: `input`,
    name: `description`,
    message: `describe your project`
},

{
    type: `input`,
    name: `email`,
    message: `enter your email address:`
},

{
    type: `input`,
    name: `github`,
    message: `enter your github username:`
},

{
    type: `input`,
    name: `instalation`,
    message: `please state any installation instruction if any:`
},

{
    type: `input`,
    name: `usage`,
    message: `please state how to use the repo:`
},

{
    type: `list`,
    name: `license?`,
    message: `what type of license do you prefere:`,
    choices: [
        "ISC",
        "APACHE",
        "GPL",
        "MIT"
]

    
   
},

{
    type: `input`,
    name: `contibution`,
    message: `Enter contribution guideline if any:`
},




];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName),data);
}


// function to initialize program
function init() {
inquirer.prompt(questions).then((response) => {
    console.log(`generating simple
     README...`);
    writeToFile(`README.md`, generateMarkdown({...response}))
})
}

// function call to initialize program
init();