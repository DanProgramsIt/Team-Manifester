const containers = require('./containers');

const confirmEmail = (email) => {
    const confirm = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i.test(email);
    if (valid) {
        return true;
    } else {
        return "Please a correct email address!"
    }
}

const confirmId = (id) => {
    if (!id) {
        return "Cant be blank, try again!"
    } else if (containers.ids.includes(id)) {
        return 'Duplicate I.D - please use a diffrent I.D';
    }
    return true;
}

const validate = (input) => {
    if (!input) {
        return "Cant be blank, try again!"
    }
    return true;
}

const manager = [
    {
        type: 'input',
        message: "What is the manager's name?",
        name: 'name',
        validate: validate
    },
    {
        type: 'input',
        message: "What is the manager's ID?",
        name: 'id',
        validate: validate
    },
    {
        type: 'input',
        message: "What is the manager's email?",
        name: 'email',
        validate: confirmEmail
    },
    {
        type: 'input',
        message: "What is the manager's office number?",
        name: 'officeNumber',
        validate: validate
    },
];

const engineer = [
    {
        type: 'input',
        message: "What is the engineer's name?",
        name: 'name',
        validate: validate
    },
    {
        type: 'input',
        message: "What is the engineer's ID?",
        name: 'id',
        validate: confirmId
    },
    {
        type: 'input',
        message: "What is the engineer's email?",
        name: 'email',
        validate: confirmEmail
    },
    {
        type: 'input',
        message: "What is the engineer's GitHub username?",
        name: 'github',
        validate: validate
    },
];

const intern = [
    {
        type: 'input',
        message: "What is the intern's name?",
        name: 'name',
        validate: validate
    },
    {
        type: 'input',
        message: "What is the intern's ID?",
        name: 'id',
        validate: confirmId
    },
    {
        type: 'input',
        message: "What is the intern's email?",
        name: 'email',
        validate: confirmEmail
    },
    {
        type: 'input',
        message: "What is the intern's school?",
        name: 'school',
        validate: validate
    },
];

const nextEmp = [
    {
        type: 'list',
        message: "What employee would you like to add next?",
        name: 'role',
        choices: ['Engineer', 'Intern', 'I am done selecting employees']
    },
];

module.exports = {manager, engineer, intern, nextEmp};