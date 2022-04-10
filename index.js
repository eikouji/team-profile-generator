const inquirer = require("inquirer");
const fs = require("fs");

const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");

let generatedTeamArray = [];


function nameMyTeam() {
    inquirer.prompt([
        {
        message: "Please enter your team Name:",
        name: "myTeamName"
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

function addEngineer() {
    inquirer.prompt([
        {
            message: "What is this engineer's name?",
            name: "engineerName"
        },
        {
           message: "What is this engineer's email address?",
           name: "engineerEmail"
        },
        {
            message: "what is this engineer's GitHub profile?",
            name: "engineerGitHub"

        }
    ])

    .then(function(data) {
        const name = data.name
        const id = generatedTeamArray.length + 1
        const email = data.engineerEmail
        const gitHub = data.engineerGitHub
        const teamMember = new Engineer(name, id, email, github)
        generatedTeamArray.push(teamMember)
        addTeamMembers()
    });
};

function addIntern() {
    inquirer(prompt([
        {
            message: "What is this intern's name?",
            name: "internName"
        },
        {
            message: "What is this intern's email address?",
            name: "internEmail"
        },
        {
            message: "Where did this intern go to school?",
            name: "internSchool"
        }

    ])

    .then(function (data) {
        const name = data.name
        const id = generatedTeamArray.length + 1
        const email = data.email
        const school = data.school
        const teamMember = new Intern(name, id, email, school)
        generatedTeamMember.push(teamMember)
        addTeamMembers()
    })
 };

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
           <h1 style="color:white;">$[generatedTeamArray[0]}</h1>
        </div

        <div class="container">
        <div class="row row-cols-1 row-cols-md-3 g-4">
    `
    htmlArray.push(htmlBeginning);

    for (let i = 1; i < generateTeamArray.length; i++) {
        let object = `
        <div class="col">
      <div class="card mb-3 mt-3">
        <div class="card-body">
          <div class="card-header bg-primary text-white" style="font-size: 20px;">${generateTeamArray[i].name}
            <p><i class="${generateTeamArray[i].icon}"></i> ${generateTeamArray[i].title}</p>
          </div>
          <ul class="list-group list-group-flush">
          <li class="list-group-item">ID:${generateTeamArray[i].id}</li>
          <li class="list-group-item">Email :<a href="mailto:${generateTeamArray[i].email}">${generateTeamArray[i].email}</a></li>
              
        `
        if (generateTeamArray[i].officeNumber) {
            object += `
            <li class="list-group-item">OfficeNumber:${generatedTeamArray[i].officeNumber}</li>`
        }
        if (generateTeamArray[i].github)
           object += `
           <li class="list-group-item">GitHub: <a href="https://github.com/${generatedTeamArray[i].github}</a></li>
           `
    }
    if (generatedTeamArray[i].school {
        object += `
        <li class="list-group-item">School: ${generateTeamArray[i].schoolName}</li>
        `
    }
    }

    object += `
    </ul>
    </div>
    </div>
    </div>

     `

     htmlArray.push(object)
  }

const htmlEnd = `
  </div>
  </div>
  </body>
  </html>
`

htmlArray.push(htmlEnd);

  fs.writeFile(`./dist/${generatedTeamArray[0]}.html`, htmlArray.join(""), function (err) {

  })
}

nameMyTeam();