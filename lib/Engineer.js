// Employee properties + github, 
// getGithub(), getRole() -- return Engineer //

const Employee = require('./Employee');

class Engineer extends Employee {
    constructor (id, name, email, github) {
        super(id, name, email);

        this.github = github;
        this.title = 'Engineer';
        
    }

    getGitHub() {
        return this.github;
    }
    
    getRole() {
        return this.title;
    }

    getIcon(){
        return this.icon;
    }

};

module.exports = Engineer;