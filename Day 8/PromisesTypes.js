/*
// [1] PROMISE.ALL() -> wait for all to succeed, if one rejects promise.all() rejects;
const p1 = Promise.resolve("User");
const p2 = Promise.resolve("Orders");
const p3 = Promise.resolve("Payments");

Promise.all([p1,p2,p3])
    .then((results) => {
        console.log(results);
    });

// [2] PROMISE.ALLSETTLED() -> don't care if the operation succeed or fail, just gives the result of each
const p1 = Promise.resolve("User");
const p2 = Promise.reject("Orders failed");
const p3 = Promise.resolve("Payment");

Promise.allSettled([p1,p2,p3])
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    })

// [3] PROMISE.RACE() -> whichever finishes first wins
const p1 = new Promise(resolve => {
    setTimeout(() => resolve("First"), 2000);
});

const p2 = new Promise(resolve => {
    setTimeout(() => resolve("Second"), 1000);
});

Promise.race([p1, p2])
    .then(result => {
        console.log(result);
    });

// [4] PROMISE.ANY() -> first successfull result
const p1 = Promise.reject("Server 1 failed");

const p2 = new Promise(resolve => {
    setTimeout(() => resolve("Server 2 success"), 2000);
});

const p3 = new Promise(resolve => {
    setTimeout(() => resolve("Server 3 success"), 1000);
});

Promise.any([p1, p2, p3])
    .then(result => {
        console.log(result);
    });
*/