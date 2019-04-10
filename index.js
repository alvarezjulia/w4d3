const chalk = require('chalk')

console.log(chalk.blue('Hello world!'))

console.log('Hello world! (: ')

const exponentiation = (a, b) => a ** b

const factor = exponentiation(2, 3)

console.log('factor', chalk.underline(factor))
