#! /usr/bin/env node

import inquirer from 'inquirer';

let todos: string[] = [];
let loop = true;

while (loop) {
    const answers: {
        TODO:string,
        nadeem:boolean
    } = await inquirer.prompt([
        {
            type: 'input',
            name: 'TODO',
            message: 'What do you want to Some add in your todo List?'
        },
        {
            type: 'confirm',
            name: 'nadeem',
            message: 'Do you want to add Some  todo List....',
            default: false
        }
    ]);
    const { TODO, nadeem } = answers;
   
    loop = nadeem;
    if (TODO) {
        todos.push(TODO);
    }
    else {
        console.log('Pleasse  Add Youre Valid Input');
    }
}
if (todos.length > 0) {
    console.log(' Add All Your todo list Enter ------>>>>');
    todos.forEach(todo => {
        console.log(todo);
    });
}
else {
    console.log('Todos Result is Not found..');
}