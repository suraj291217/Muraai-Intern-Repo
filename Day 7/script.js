
// PROMISES
// console.log("start");
// setTimeout(() => {
//     console.log("data received");
// }, 3000);
// console.log("end");
//this is called asynchronous programming

// PROMISES STATES
// 1. PENDING
// 2. FULFILLED 
// 3. FAILED

/*
let promise = new Promise((resolve, reject) => {
    let success = true;
    if(success) {
        resolve("Operation success");
    } else {
        reject("Operation failed");
    }
});

promise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("finished");
    });

// FUNCTION PROMISE
function getUser() {
    return Promise.resolve({
        id: 22,
        name: "Suraj"
    });
}

getUser()
    .then((user) => {
        console.log(user);
    });

// PROMISE CHAINING
function getUser() {
  return Promise.resolve({ id: 42, name: "Suraj" });
}

function getOrders(userId) {
  return Promise.resolve(["Laptop", "Mouse"]);
}

getUser()
  .then((user) => {
    console.log(`Logged in as: ${user.name}`);
    return getOrders(user.id); 
  })
  .then((orders) => {
    console.log(`Orders found: ${orders.join(", ")}`);
    return orders.length; 
  })
  .then((count) => {
    console.log(`Total order count: ${count}`);
  })
  .catch((error) => {
    console.error("An error occurred somewhere in the chain:", error);
  });

// ASYNC => always return a Promise
async function hello() {
    return "Suraj";
}

hello()
    .then((message) => {
        console.log(message);
    })

// AWAIT => to wait for a promise inside a async function
async function getData() {
    const result = await getSomething();
    console.log(result);
}

// ERROR HANDLING
try {
    const result = riskyOperation();
} catch(error) {
    console.log(error);
}

// TRY/CATCH WITH ASYNC/AWAIT
async function getData() {
    try {
        const response = await fetch("link");
        const data = await response.json();
    } catch(error) {
        console.log("error:", error);
    }
}

// THROW to manually create an ERROR
function checkAge(age) {
    if(age < 18) {
        throw new Error("you must be 18 or above");
    } 
    return "access granted";
}

try {
    let result = checkAge(15);
    console.log(result);
} catch(error) {
    console.log(error.message);
}

*/