"use strict";
// Primitives
let username = "Suraj";
let age = 20;
let isAdmin = true;
// Arrays
let numbers = [1, 2, 3, 4];
let names = ["Suraj", "Vasu", "Dilpreet"];
// Tuple
let person = ["Suraj", 101];
// Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let favoriteColor = Color.Blue;
// Any (avoid when possible)
let randomValue = 10;
randomValue = "Suraj";
randomValue = true;
// Unknown (safer than any)
let userInput;
userInput = 12;
userInput = "Suraj Jagadeesh";
// VOID (for functions that don't return)
function hello(message) {
    console.log(message);
}
// Null and undefined
let nullValue = null;
let undefinedValue = undefined;
