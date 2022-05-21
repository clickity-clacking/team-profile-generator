// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

const generateHTML = require('./script');
var employeeList = [];


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'Name',
        message: "What is the employee's name?",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter a name")
                return false;
            }
        }
    },

    {
        type: 'list',
        name: 'role',
        message: "What is the employee's role on the team?",
        choices: ["Manager", "Engineer", "Intern"]
    },

    {
        type: 'input',
        name: 'id',
        message: "What is the employee's ID number?",
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log("Please enter an ID")
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'email',
        message: "What is the employee's email?",
        validate: testInput => {
            if (testInput) {
                return true;
            } else {
                console.log("Please enter tan email")
                return false;
            }
        }
        
    },
    {
        type: 'input',
        name: 'github',
        message: "What is the employee's GitHub url?",
        when: (answers) => answers.role === "Engineer",
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log("Please enter a GitHub url")
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'officeNum',
        message: "What is the manager's office number?",
        when: (answers) => answers.role === "Manager",
        validate: officeNumInput => {
            if (officeNumInput) {
                return true;
            } else {
                console.log("Please enter an office number")
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'school',
        message: "What is the intern's school?",
        when: (answers) => answers.role === "Intern",
        validate: schoolInput => {
            if (schoolInput) {
                return true;
            } else {
                console.log("Please enter a school")
                return false;
            }
        }
    },
    
    {
        type: 'list',
        name: 'more',
        message: "Would you like to enter another team member or are you ready to build your team profile?",
        choices: ["Add another team member", "Build team profile"]
    }
];



function makeObject(name, role, id, email, github, more) {
    return new employee(name, role, id, email, github, more);
};

// TODO: Create a function to initialize app
async function init(questions) {
    const answers = await inquirer.prompt(questions);
    if (answers.role === 'Engineer'){
        var newEng = new Engineer(answers.name,answers.id,answers.email,answers.github);
        employeeList.push(newEng);
    } else if (answers.role==="Intern"){
        var newIntern = new Intern(answers.name,answers.id,answers.email,answers.school)
        employeeList.push(newIntern);
    } else{
        var newManager = new Manager(answers.name,answers.id,answers.email,answers.officeNum)
        employeeList.push(newManager);
    }


    if(answers.more === "Add another team member"){
        init(questions);
    } else {
        console.log(employeeList);
        html = generateHTML(employeeList);
        fs.writeFile("writtenFile.html", html, "utf8", (err) => {
            if (err)
                console.log(err);
            else {
                console.log("File written successfully\n");
            }
        });
    };

};

// Function call to initialize app
init(questions);


