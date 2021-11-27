const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const htmlRenderer = require('./lib/htmlRenderer.js')

const teamMembers = [];


// function init() {
//     console.log("Welcome to Team Generator!");



const managerPrompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the manager's name?",
            validate: answer => {
                if (!answer) {
                    return "You must enter a name."
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the manager's ID?",
            validate: answer => {
                if (!answer) {
                    return "You must enter an ID."
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the manager's email address?",
            validate: answer => {
                if (!answer) {
                    return "You must enter an email address."
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is the manager's office number?",
            validate: answer => {
                if (!answer) {
                    return "You must enter a number."
                }
                return true;
            }
        },


    ]).then(answers => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        teamMembers.push(manager);
        chooseTeam()
    })

}
managerPrompt()

const chooseTeam = () => {
    inquirer.prompt([
        {
            type: "list",
            name: "teamMember",
            message: "Would you like to add a team member to the project?",
            choices: [
                "Engineer",
                "Intern",
                "No thanks, I'm finished building the team."
            ]
        }

    ]).then(answers => {
        switch (answers.teamMember) {
            case "Engineer":
                engineerPrompt();
                break;
            case "Intern":
                internPrompt();
                break;
            default: createHTML();
        }
    })
}

const engineerPrompt = () => {
    return inquirer.prompt([

        //questions about employees
        {
            type: 'input',
            name: 'name',
            message: "What is the employee's name?",
            validate: answer => {
                if (!answer) {
                    return "You must enter the employee's name."
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

        },
        {
            type: "input",
            name: "github",
            message: "What is the employee's Github username?",
            validate: answer => {
                if (!answer) {
                    return "You must enter the employee's Github username."
                }
                return true;
            }
        }
    ]).then(answers => {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
        teamMembers.push(engineer);
        chooseTeam()
    })
}

const internPrompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the intern's name?",
            validate: answer => {
                if (!answer) {
                    return "You must enter the intern's name."
                }
                return true;
            }

        },
        {
            type: 'input',
            name: 'id',
            message: "What is the intern's ID?",
            validate: answer => {
                if (!answer) {
                    return "You must enter the intern's ID."
                }
                return true;
            }

        },
        {
            type: 'input',
            name: 'email',
            message: "What is the intern's email?",
            validate: answer => {
                if (!answer) {
                    return "You must enter the intern's email."
                }
                return true;
            }

        },
        {
            type: 'input',
            name: 'school',
            message: "What is the intern's school?",
            validate: answer => {
                if (!answer) {
                    return "You must enter the intern's school."
                }
                return true;
            }

        },

    ]).then(answers => {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        teamMembers.push(intern)
        chooseTeam()
    })
}

const createHTML = () => {
    fs.writeFileSync("./outputTeam.html", htmlRenderer(teamMembers), "utf-8")

}



