const inquirer = require("inquirer");
const fs = require("fs");

const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/intern");

let generatedTeamArray = [];






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