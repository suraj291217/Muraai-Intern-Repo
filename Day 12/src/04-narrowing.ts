// function printId(id: number | string) {
//     console.log(id.toUpperCase());
// }
// Narrowing with typeof
function printValue(value: string | number) {

    if (typeof value === "string") {
        console.log(value.toUpperCase());
    }

    if (typeof value === "number") {
        console.log(value.toFixed(2));
    }
}

// Narrowing with if
function greet(name: string | null) {

    if (name !== null) {
        console.log(name.toUpperCase());
    }
}

// Narrowing with Array.isArray()
function print(value: string | string[]) {

    if (Array.isArray(value)) {
        console.log(value.length);
    } else {
        console.log(value.toUpperCase());
    }
}

// Narrowing with in
interface Dog {
    bark(): void;
}

interface Cat {
    meow(): void;
}

function makeSound(animal: Dog | Cat) {

    if ("bark" in animal) {
        animal.bark();
    } else {
        animal.meow();
    }
}

// Narrowing with instanceof
class Dog {
    bark() {
        console.log("Woof");
    }
}

class Cat {
    meow() {
        console.log("Meow");
    }
}

// function makeSound(animal: Dog | Cat) {

//     if (animal instanceof Dog) {
//         animal.bark();
//     } else {
//         animal.meow();
//     }
// }