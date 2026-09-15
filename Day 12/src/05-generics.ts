/*
// incase of string
function identity(value: string): string {
    return value;
}

// incase of number
function identity(value: number): number {
    return value;
}


function identity<T>(value: T): T {
    return value;
}

// Think of T as a temporary placeholder for a type
const result = identity<string>("Hello");
const result = identity<number>(100);

// infer in generics
const result = identity<string>("Hello");
const result = identity("Hello");

// why not any?
function identity(value: any): any {
    return value;
}

function identity<T>(value: T): T {
    return value;
}

// generic array
function getFirst<T>(items: T[]): T {
    return items[0];
}
const firstNumber = getFirst([10, 20, 30]);

// multiple generic types
function pair<T, U>(first: T, second: U) {
    return {
        first,
        second
    };
}
const result = pair("Suraj", 21);
*/
