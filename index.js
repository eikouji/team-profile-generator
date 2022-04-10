const inquirer = require("inquirer");
const fs = require("fs");

const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/intern");

let generatedTeamArray = [];


function nameMyTeam() {
    inquirer.prompt([
        {
        message: "Please enter your team Name:",
        name: "The Octogons";
        }
    ])
    .then(function(data){
        const myTeamName = data.myTeamName
        generatedTeamArray.push(myTeamName)
        addManager();
    })
}

// add people to the team //
// Manager //
function addManager() {
    inquirer.prompt([
        {
            message: "What is your team manager's name?",
            name: "managerName"
        },
        {
            message: "What is your team manager's email address?",
            name: "managerEmail"
        },
        {
            message: "What is your team manager's office number?",
            name: "managerOfficeNumber"
        },
    ])

    .then(function(data) {
        const name = data.managerName
        const id = 1
        const email = data.managerEmail
        const officeNumber = data.managerOfficeNumber
        const teamMember = new Manager(name, id, email, officeNumber)

        generatedTeamArray.push(teamMember)
        addTeamMembers();
    });
}

function addTeamMembers() {
    inquirer.prompt([
        {
            type: "list",
            message: "would you like to add more members to your team?",
            choices: ["Yes, add an engineer", "Yes, add an intern", "Yes, add a team manager", "No, my team is complete."],
            name: "addTeamMemberData"
        }
    ])

    .then(function(data) {
        
        switch (data.addTeamMemberData) {
            case "Yes, add an engineer":
              addEngineer();
              break;

            case "Yes, add an intern":
              addIntern();
              break;
            
            case "Yes, add a team manager":
              addTeamManager();

            case "No, my team is complete":
                createTeam();
        }    
    })
}



function createTeam() {
    console.log("Your team profile has been successfully generated!")

    const htmlArray = []
    const htmlBeginning = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <title>${myTeamArray[0]}</title>
        <!-- Latest compiled and minified CSS, Bootstrap + Font Awesome CSS -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.0.2/css/bootstrap.min.css"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"/>
        <!--font awesome kit-->
        <script src="https://kit.fontawesome.com/e9b8e84ab6.js"></script>
      </head>

      <body>
        <div class="container-fluid">
         <div class="jumbotron text-center" style="background-color:#dc3545">
           <h1 style="color:white;">$
    
    `
}