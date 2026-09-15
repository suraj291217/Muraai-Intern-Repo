// Union
type ID = number | string | boolean;

let id1: ID = 21;
let id2: ID = "Suraj";

// let id3: ID = true;

// union means a value can be one of several types.

// narrowing
// function printId(id: number | string) {
//     console.log(id.toUpperCase());
// }

function printId(id: number | string) {
    if (typeof id === "string") {
        console.log(id.toUpperCase);
    } else {
        console.log(id);
    }
}

