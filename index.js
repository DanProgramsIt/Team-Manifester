const fs = require("fs");
const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const path = require("path");
const questions = require("./lib/questions");
const containers = require("./lib/containers");
const render = require("./lib/htmlRenderer");

const lib_DIR = path.resolve(__dirname, "lib");
const libPath = path.join(lib_DIR, "myTeam.html");

const employees = [];

const promptsUser = (type) => {
  return inquirer.prompt(questions[type]);
};

const writeLib = (pager) => {
  if (!fs.existsSync(lib_DIR)) {
    fs.mkdirSync(lib_DIR);
  }
  fs.writeFileSync(libPath, page);
  console.log("myTeam file has been generated in lib folder");
};

const askNext = () => {
  return promptsUser("nextEmp").then((answer) => {
    if (answer.role === "Engineer") {
      promptsUser("engineer")
        .then((emp) => {
          const newEmp = new Engineer(emp.name, emp.id, emp.email, emp.github);
          employees.push(newEmp);
          containers.ids.push(emp.id);
          askNext();
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (answer.role === "Intern") {
      promptsUser("intern")
        .then((emp) => {
          const newEmp = new Intern(emp.name, emp.id, emp.email, emp.school);
          employees.push(newEmp);
          containers.ids.push(emp.id);
          askNext();
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log(" Your Team is complete - rendering your team page");
      const htmlPage = render(employees);
      writeLib(htmlPage);
    }
  });
};

const buildTeam = () => {
    return promptsUser('manager').then((emp) => {
        const newEmp = new Manager(emp.name, emp.id, emp.email, emp.officeNumber);
        employees.push(newEmp);
        containers.ids.push(emp.id);
        askNext();
    })
    .catch((err) => {
        console.log(err);
    });
};

buildTeam();
