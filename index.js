#! /usr/bin/env node 
import chalk from "chalk";
import inquirer from "inquirer";
let yourMarks = 0;
const totalMarks = 10;
console.log(chalk.blueBright("\nQuiz#1(Operators)"));
console.log(chalk.blueBright("\n>Test your understanding of TypeScript operators with 20 multiple-choice questions covering topics such as arithmetic, assignment, and string operators"));
const nameEmail = await inquirer.prompt([
    {
        name: "yourName",
        type: "input",
        message: chalk.blueBright("\nYour Name:\n")
    },
    {
        name: "yourEmail",
        type: "input",
        message: chalk.blueBright("\nYour Email:\n")
    }
]);
let questions = await inquirer.prompt([
    {
        name: "q1",
        type: 'list',
        message: chalk.greenBright("1)Which operator is used to concatenate strings in TypeScript?"),
        choices: ['-', '*', '+']
    },
    {
        name: "q2",
        type: 'list',
        message: chalk.greenBright("2)What is the purpose of an assignment operator in TypeScript?"),
        choices: ['To compare two values', 'To perform mathematical calculations', 'To assign a value to a variable']
    },
    {
        name: "q3",
        type: 'list',
        message: chalk.greenBright("3)Which operator in TypeScript is used for incrementing a value by 1?"),
        choices: ['+=', '--', '++']
    },
    {
        name: "q4",
        type: 'list',
        message: chalk.greenBright("4)Which type of operator is used to perform mathematical operations like addition and subtraction?"),
        choices: ['Logical Operator', 'Arithmetic Operator', 'Assignment Operator']
    },
    {
        name: "q5",
        type: 'list',
        message: chalk.greenBright("5)What do logical operators do in TypeScript?"),
        choices: ['Concatenate strings', 'Perform mathematical operations', 'Manipulate boolean values']
    },
    {
        name: "q6",
        type: 'list',
        message: chalk.greenBright("6)What does the following TypeScript expression evaluate to: 10 <= 5?"),
        choices: ['true', 'false', 'NaN']
    },
    {
        name: "q7",
        type: 'list',
        message: chalk.greenBright("7)What is the purpose of the modulus operator (%) in TypeScript?"),
        choices: ['to perform division', 'to find the remainder of a division operation', 'to perform multiplication']
    },
    {
        name: "q8",
        type: 'list',
        message: chalk.greenBright("8)Which operator is used to perform exponentiation in TypeScript?"),
        choices: ['^', '**', '%']
    },
    {
        name: "q9",
        type: 'list',
        message: chalk.greenBright("9) Which of the following is an arithmetic operator?"),
        choices: ['||', '%', '&&']
    },
    {
        name: "q10",
        type: 'list',
        message: chalk.greenBright("10)What does the NOT operator (!) do in TypeScript?"),
        choices: ['It negates a boolean value', 'It performs bitwise operations', 'It concatenates strings']
    }
]);
switch (questions.q1) {
    case '+':
        ++yourMarks;
        break;
}
switch (questions.q2) {
    case 'To assign a value to a variable':
        ++yourMarks;
        break;
}
switch (questions.q3) {
    case '++':
        ++yourMarks;
        break;
}
switch (questions.q4) {
    case 'Arithmetic Operator':
        ++yourMarks;
        break;
}
switch (questions.q5) {
    case 'Manipulate boolean values':
        ++yourMarks;
        break;
}
switch (questions.q6) {
    case 'false':
        ++yourMarks;
        break;
}
switch (questions.q7) {
    case 'to find the remainder of a division operation':
        ++yourMarks;
        break;
}
switch (questions.q8) {
    case '**':
        ++yourMarks;
        break;
}
switch (questions.q9) {
    case '%':
        ++yourMarks;
        break;
}
switch (questions.q10) {
    case 'It negates a boolean value':
        ++yourMarks;
        break;
}
console.log(chalk.redBright("####### Quiz#1(operators) Result #######"));
console.log(chalk.redBright(`Your Name:${nameEmail.yourName}\nYour Email:${nameEmail.yourEmail}\nYour Score:${yourMarks}/${totalMarks}`));
