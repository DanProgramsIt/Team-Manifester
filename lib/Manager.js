const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        const role = 'Manager';
        super(name, id, email, role);
        this.officeNumer = officeNumber;
    }
    getOfficeNumber() {
        return this.officeNumer;
    }
}

module.exports = Manager;