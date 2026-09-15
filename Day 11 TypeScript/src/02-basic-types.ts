// Primitives
let username: string = "Suraj";
let age: number = 20;
let isAdmin: boolean = true;

// Arrays
let numbers: number[] = [1, 2, 3, 4];
let names: string[] = ["Suraj", "Vasu", "Dilpreet"];

// Tuple
let person: [string, number] = ["Suraj", 101];

// Enum
enum Color {
    Red,
    Green,
    Blue
}

let favoriteColor: Color = Color.Blue;

// Any (avoid when possible)
let randomValue: any = 10;
randomValue = "Suraj";
randomValue = true;

// Unknown (safer than any)
let userInput: unknown;
userInput = 12;
userInput = "Suraj Jagadeesh";

// VOID (for functions that don't return)
function hello(message: string): void{
    console.log(message);
}

// Null and undefined
let nullValue: null = null;
let undefinedValue: undefined = undefined;






