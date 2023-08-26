const shell = require('shelljs');
const chalk = require('chalk');

console.log(chalk.green('hello'));
shell.exec('echo "world"');