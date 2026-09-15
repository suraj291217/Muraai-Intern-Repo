"use strict";
/* interface Box<T> {
    value : T;
}

let numberBox: Box<number> = {
    value : 100
};

console.log(numberBox);

let stringBox: Box<string> = {
    value : "Suraj"
};

console.log(stringBox);

enum Direction {
    up, down, left, right
};

let direction: Direction = Direction.down;
console.log(direction);
*/
var Status;
(function (Status) {
    Status["success"] = "success";
    Status["failed"] = "failed";
    Status["pending"] = "pending";
})(Status || (Status = {}));
;
let lemon = Status.pending;
console.log(lemon);
