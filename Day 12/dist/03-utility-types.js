"use strict";
// Utility Types
// these are built-in TypeScript types that help you create new types from existing types.
/*
// (1) Partial<T> -> Makes all properties optional.
interface User {
    name: string;
    age: number;
    email: string;
}
function updateUser(user: Partial<User>) {
    console.log(user);
}
updateUser({
    name: "Suraj"
});

// (2) Required<T> -> makes all properties required.
interface User {
    name: string;
    age: number;
}
Required<T>

// (3) Readonly<T> -> Prevents properties from being changed.
interface User {
    name: string;
    age: number;
}
const user: Readonly<User> = {
    name: "Suraj",
    age: 21
};
user.age = 22;

// (4) Pick<T, K> -> Selects only certain properties.
type UserContact = Pick<User, "name" | "email">;
const contact: UserContact = {
    name: "Suraj",
    email: "suraj@example.com"
};
const contact: UserContact = {
    name: "Suraj",
    email: "suraj@example.com"
};

// (5) Omit<T, K> -> You can remove properties.
type UserWithoutEmail = Omit<User, "email">;
{
    name: string;
    age: number;
}

// (6) Record<K, T> -> Creates an object type with specified keys and value types.
type Scores = Record<string, number>;
const scores: Scores = {
    math: 90,
    science: 85,
    english: 88
};
*/ 
