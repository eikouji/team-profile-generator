/* Employee class will have 
name
id
email
getName()
getId()
getEmail()
getRole() -- returns Employee */

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name
    }
    
    getID() {
        return this.Id;
    }
    
    getEmail() {
        return this.email;
    }

    getRole() {
        return "Employee";
    }
}

module.exports = Employee;
