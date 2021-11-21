const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

const teamMembers = [];


function init() {
    console.log("Welcome to Team Generator!");
    inquirer
        .prompt([

            {
                type: 'input',
                name: 'name',
                message: "What is the employee's name?",
                validate: answer => {
                    if (!answer) {
                        return "You must enter your name."
                    }
                    return true;
                }

            },
            {
                type: 'input',
                name: 'id',
                message: "What is the employee's ID?",
                validate: answer => {
                    if (!answer) {
                        return "You must enter the employee's ID."
                    }
                    return true;
                }

            },
            {
                type: 'input',
                name: 'email',
                message: "What is the employee's email?",
                validate: answer => {
                    if (!answer) {
                        return "You must enter the employee's email."
                    }
                    return true;
                }

            }



        ])
        .then(answers => {
            console.log(answers);
        })

}





// function init() {
//     // console.log("Hola, mundo!")
//     inquirer.prompt(questions).then(responses => {
//         console.log(responses);
//     });
// };

init();