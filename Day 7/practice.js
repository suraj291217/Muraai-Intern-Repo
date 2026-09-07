/*
const employees = [
    {
        id: 101,
        name: "Rahul",
        department: "IT",
        experience: 3,
        age: 25,
        interest: ["Coding", "Gaming"],
        skills: ["JavaScript", "React"],
        salary: 55000
    },
    {
        id: 102,
        name: "Priya",
        department: "HR",
        experience: 1,
        age: 23,
        interest: ["Reading", "Music"],
        skills: ["Communication", "Excel"],
        salary: 35000
    },
    {
        id: 103,
        name: "Arun",
        department: "IT",
        experience: 0,
        age: 22,
        interest: ["Coding", "Football"],
        skills: ["JavaScript", "Node.js"],
        salary: 30000
    },
    {
        id: 104,
        name: "Sneha",
        department: "Finance",
        experience: 5,
        age: 28,
        interest: ["Travel"],
        skills: ["Excel", "SQL"],
        salary: 70000
    }
];
*/



// const prices = [10.5, 4.25, 15.0, 8.75];
// let total = 0;
// prices.forEach(price => console.log(price));

// const names = ["alice", "bob", "charlie"];
// names.forEach((name, index) => {
//     console.log(`${index+1}. ${name.toUpperCase()}`);
// });

// const users = [
//   { name: "Sam", active: true, email: "sam@example.com" },
//   { name: "Alex", active: false, email: "alex@example.com" },
//   { name: "Taylor", active: true, email: "taylor@example.com" }
// ];

// const activeEmails = [];

// users.forEach(user => {
//     if(user.active) {
//         activeEmails.push(user.email);
//     }
// });
// console.log(activeEmails);

// const invoices = [   { invoiceNo: "INV001", amount: 15000, status: "PAID" },   { invoiceNo: "INV002", amount: 25000, status: "PENDING" },   { invoiceNo: "INV003", amount: 10000, status: "PAID" },   { invoiceNo: "INV004", amount: 30000, status: "REJECTED" } ];

// invoices.forEach(invoice => {
//     console.log(`${invoice.invoiceNo} - $${invoice.amount} - ${invoice.status}`);
// })

// const prices = [10.5, 4.25, 15.0, 8.75];
// let total = 0;
// prices.forEach(price => {
//     total += price;
// });
// console.log(total);

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

// const totalSalary = employees.reduce(
//     (total, employee) => total + employee.salary,0
// );
// console.log(totalSalary);

// const prices = [10.5, 4.25, 15.0, 8.75];
// let total = 0;
// prices.forEach(price => 
//     total += price
// );
// console.log(total);

// const names = ["alice", "bob", "charlie"];
// names.forEach((name, index) => {
//     console.log(`${index+1}. ${name.toUpperCase()}`);
// });

const users = [
  { name: "Sam", active: true, email: "sam@example.com" },
  { name: "Alex", active: false, email: "alex@example.com" },
  { name: "Taylor", active: true, email: "taylor@example.com" }
];

const activeEmails = [];

users.forEach(user => {
    if(user.active) {
        activeEmails.push(user.email);
    }
});
console.log(activeEmails);