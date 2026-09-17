/*
const employees = [
    {
        id: 101,
        name: "Rahul",
        department: "IT",
        salary: 55000
    },
    {
        id: 102,
        name: "Priya",
        department: "HR",
        salary: 45000
    },
    {
        id: 103,
        name: "Arun",
        department: "IT",
        salary: 65000
    }
];

// MAP
const salaries = employees.map(employee => employee.salary);
console.log(salaries);

const names = employees.map(employee => employee.name);
console.log(names);

const arr = [1, 2, 3, 4];
const transformedArr = arr.map(n => n*2);
console.log(transformedArr);

// FILTER
const itEmps = employees.filter(
    employee => employee.department === "IT"
);
console.log(itEmps);

// REDUCE
const totalSalary = employees.reduce(
    (total, employee) => total + employee.salary,0
);
console.log(totalSalary);

// FIND
const id102 = employees.find(
    employee => employee.id === 102
);
console.log(id102);

// SOME
const result = employees.some(
    employee => employee.salary > 60000
);
console.log(result);

// EVERY 
const result = employees.every(
    employee => employee.salary > 40000
);
console.log(result);

const skills = ["Java", "SQL", "JavaScript"];
console.log(skills.includes("Java"));

const employee = {
    id: 101,
    name: "Rahul",
    department: "IT",
    salary: 55000
};
console.log(employee.name);
console.log(employee.department);

//Using this
const employee = {
    name: "Suraj",
    greet: function() {
        console.log("Hello " + this.name);
    }
};
employee.greet();

const employee = {
    name: "Rahul",
    greet() {
        console.log(`Hello ${this.name}`);
    }   
};
employee.greet();

let employees = [
    {
        id: 101,
        name: "Rahul"
    },
    {
        id: 102,
        name: "Amit"
    },
    {
        id: 103,
        name: "Suraj"
    }
];
let employee = employees.filter(
    employee => employee.id === 102
);
console.log(employee);

// FIND INDEX
let numbers = [10, 20, 30, 40];
// let index = numbers.findIndex(number => number > 20);
console.log(index);

const index = employees.findIndex(
    employee => employee.id === 102
);
console.log(index);

// INCLUDES 
let fruits = ["Apple","Banana","Mango"];
console.log(fruits.includes("Apple"));

let roles = ["admin", "user", "manager"];
if(roles.includes("admin")) {
    console.log("Admin access");
}

// PUSH
let fruits = ["Apple", "Banana"];
fruits.push("Mango");
console.log(fruits);

// POP
let fruits = ["Apple", "Banana", "Mango"];
fruits.pop();
console.log(fruits); 

// UNSHIFT
let fruits = ["Banana", "Mango"];
fruits.unshift("Apple");
console.log(fruits);

// SHIFT
let fruits = ["Apple", "Banana", "Mango"];
fruits.shift();
console.log(fruits);

// SPLICE(1)
let fruits = ["Apple", "Banana", "Mango", "Orange"];
fruits.splice(1, 1);
console.log(fruits);

// SPLICE(2)
let fruits = ["Apple", "Mango"];
fruits.splice(1, 0, "Banana");
console.log(fruits);

// SPLICE(3)
let fruits = ["Apple", "Banana", "Mango"];
fruits.splice(1, 1, "Orange");
console.log(fruits);

// SLICE
let fruits = ["Apple", "Banana", "Mango", "Orange"];
let result = fruits.slice(1, 3);
console.log(result);

// JOIN
let fruits = ["Apple", "Banana", "Mango"];
let result = fruits.join(", ");
console.log(result);

// CONCAT
let fruits1 = ["Apple", "Banana"];
let fruits2 = ["Mango", "Orange"];
let result = fruits1.concat(fruits2);
console.log(result);

// SORT
let names = ["Suraj", "Amit", "Rahul"];
names.sort();
console.log(names);

// REVERSE
let numbers = [1, 2, 3, 4, 5];
numbers.reverse();
console.log(numbers);
*/
// const salaries = employees.map(employee => employee.salary);
// console.log(salaries);
const invoices = [   { invoiceNo: "INV001", amount: 15000, status: "PAID" },   { invoiceNo: "INV002", amount: 25000, status: "PENDING" },   { invoiceNo: "INV003", amount: 10000, status: "PAID" },   { invoiceNo: "INV004", amount: 30000, status: "REJECTED" } ];

invoices.forEach(invoice => {
    console.log(`${invoice.invoiceNo} - $${invoice.amount} - ${invoice.status}`);
})