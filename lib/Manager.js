// will have same classes as Employee, plus 3 more
// officeNumber, getRole() -- return Manager //


const Employee = require('./Employee');

class Manager extends Employee {
  
    constructor(id, name, email, officeNumber){
        super(id, name, email);
        this.officeNumber = officeNumber;
        this.title = "Team Manager";
        this.icon = "fas fa-users fa-sm";
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return this.title;
    }

    // trying out font-awesome icons for this one //
    getIcon() {
        return this.icon;
    }


};

module.exports = Manager;