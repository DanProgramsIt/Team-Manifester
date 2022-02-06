const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const path = require('path');
const questions = require('./lib/questions');
const containers = require('./lib/containers');
const render = require('./lib/htmlRenderer');

const lib_DIR = path.resolve(__dirname, 'lib');
const libPath = path.join(lib_DIR, 'myTeam.html');

const employees = [];