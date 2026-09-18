// CALL STACK
function greet() {
    console.log("Hello");
}
greet();


// EVENT LOOP + PROMISE
console.log("A");

setTimeout(() => {
    console.log("B");
}, 0);

const promise = new Promise((resolve,reject) => {
    let success = true;
    if(success) {
        resolve("Operation Successfull");
    } else {
        reject("Operation Failed");
    }
});

promise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    })

console.log("C");