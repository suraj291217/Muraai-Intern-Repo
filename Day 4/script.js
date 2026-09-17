//let
/*let age = 22;
age = 23;
console.log(age);
*/

//const
// const name = "Suraj";
// name = "Rahul";

//arrow functions
//1. traditional function
// function add(a, b) {
//     return a + b;
// };
//2. arrow function
// const add = (a, b) => {
//     return a + b;
// };
//3. even shorter
const add = (a, b) => a + b; 
// console.log(add(10,20));

//one parameter
const square = x => x * x;

//no parameter
// const greet = () => {
//     console.log("Hello");
// }

// const numbers = [1, 2, 3, 2, 4, 5, 5, 6, 1];
// const uniqueNums = [...new Set(numbers)];
// console.log(uniqueNums);

// const numbers = [1, 2, 3, 4];
// const doubled = numbers.map(n => n * 2);
// console.log(doubled);

/*//template literals
const name = "Suraj";
const age = 23;
// console.log("My name is " + name + " and I'm " + age + " years old");
console.log(`My name is ${name} and I am ${age} years old.`);*/

/*
//destructuring
//without destructuring
const numbers = [10, 20, 30];
const first = numbers[0];
const second = numbers[1];
console.log(first);
console.log(second);
//with destructuring
const numbers = [10, 20, 30];
const [first, second, third] = numbers;
console.log(first);
console.log(second);
console.log(third);
*/

/*//Object Destructuring
const employee = {
    id: 101,
    name: "Rahul",
    salary: 50000
};

const {name, salary} = employee;
console.log(name);
console.log(salary);*/

/*//spread operator
const numbers1 = [1, 2, 3];
const numbers2 = [4, 5, 6];
const allNumbers = [...numbers1, ...numbers2];
console.log(allNumbers);*/

/*//rest operator
function add(...numbers) {
    console.log(numbers);
}
add(10, 20, 30, 40);*/

/*//example function
function sum(...numbers) {
    let total = 0;
    for(let number of numbers) {
        total += number;
    } 
    return total;
}
console.log(sum(10,20,30));*/

//default parameter
function greet(name = "Suraj") {
    console.log(`Hello, ${name}`);
};
greet();

function calculateSalary(salary, bonus = 5000) {
    return salary + bonus;
};
console.log(calculateSalary(5000));