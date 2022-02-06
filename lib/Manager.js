const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNum) {
        const role = 'Manager';
        super(name, id, email, role);
        this.officeNum = officeNum;
    }
    getOfficeNumber() {
        return this.officeNum;
    }
}

module.exports = Manager;