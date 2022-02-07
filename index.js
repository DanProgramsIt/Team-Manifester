const fs = require("fs");
const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const path = require("path");
const questions = require("./lib/questions");
const containers = require("./lib/containers");
const render = require("./lib/htmlRenderer");

const dist_DIR = path.resolve(__dirname, "dist");
const distPath = path.join(dist_DIR, "Team-Manifester.html");

const employees = [];

const promptsUser = (type) => {
  return inquirer.prompt(questions[type]);
};

const writeDist = (page) => {
  if (!fs.existsSync(dist_DIR)) {
    fs.mkdirSync(dist_DIR);
  }
  fs.writeFileSync(distPath, page);
  console.log("Team-Manifester file has been generated in dist folder");
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
      writeDist(htmlPage);
    }
  });
};

const buildTeam = () => {
  return promptsUser("manager")
    .then((emp) => {
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
