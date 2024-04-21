#! usr/bin/env node
// import inquirer
import inquirer from "inquirer";
// declare a const answer and assighn it to the inqirer.prompt function
const answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter your sentence to count the word"
    }
]);
const words = answers.sentence.trim().split(" ");
// print the array of the words to the console
console.log(words);
// print the length of the array to the console
console.log(`your sentence word count is ${words.length}`);
