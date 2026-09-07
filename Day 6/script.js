

/*
// ACCESSING(1) 
console.log(employee.name);
console.log(employee.salary);   

// ACCESSING(2)
console.log(employee["name"]);
console.log(employee["salary"]);

let property = "name";
console.log(employee[property]);

// ADDING PROPERTIES
employee.age = 28;
console.log(employee);

// DELETING PROPERTIES
delete employee.age;
console.log(employee);

// OBJECT CONTAINING AN ARRAY
let employee = {
    id: 101,
    name: "Rahul",
    skills: ["JavaScript", "React", "Java"]
};

console.log(employee.skills);
console.log(employee.skills[1]);

// OBJECT CONTAINING ANOTHER OBJECT
let employee = {
    id: 101,
    name: "Suraj",
    address : {
        city: "Bangalore",
        pincode: 560001
    }
};
console.log(employee.address.pincode);

// USING THIS
let employee = {
    name: "Suraj",
    salary: 60000,
    display() {
        console.log(this.name);
        console.log(this.salary);
    }
};
employee.display();

// SCOPE
// (1) GLOBAL SCOPE
let name = "Suraj";
function display() {
    console.log(name);
};
display();

// (2) FUNCTION SCOPE
function test() {
    var age = 25;
}
console.log(age);

// (3) BLOCK SCOPE (LET, CONST)
if(true) {
    let age = 82;
    const name = "Suraj";
    // var salary = 199999;
}
console.log(salary);
*/

// CLOSURES (1)
// function outer() {
//     let name = "Suraj";
//     function inner() {
//         console.log(name);
//     }
//     inner();
// }
// outer();

// CLOSURES (2)
// function outer() {
//     let name = "Suraj";
//     return function inner() {
//         console.log(name);
//     };
// };
// let result = outer();
// result();

// CLOSURE REAL WORLD EXAMPLE
// function bankAccount() {
//     let balance = 1000;
//     return {
//         getBalance() {
//             return balance;
//         },
//         deposit(amount) {
//             balance += amount;
//         }
//     };
// };
// let account = bankAccount();
// console.log(account.getBalance());
// account.deposit(5000);
// console.log(account.getBalance());

// OBJECT METHODS
// const user = {
//     name: "Suraj",
//     greet() {
//         return `Hello, from ${this.name}`;
//     },
//     sayGoodBye: function() {
//         return `GoodBye!`;
//     }
// };
// console.log(user.name);
// console.log(user.greet());
// console.log(user.sayGoodBye());

// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));

// ES MODULES
// created seperate files

let employee = {
    id: 101,
    name: "Rahul",
    department: "IT",
    salary: 55000
};

let property = "experience";
let value = "3 years";

employee[property]=value;

console.log(employee);