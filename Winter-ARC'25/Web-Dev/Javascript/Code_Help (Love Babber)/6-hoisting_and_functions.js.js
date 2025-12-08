// ======================================================
// 1. VARIABLE HOISTING
// ======================================================

// console.log(age);  // undefined (var is hoisted)
// console.log(Age);  // ReferenceError (let in TDZ)

let Age = 18;
var age = 18;

console.log(age);
console.log(Age);


// ======================================================
// 2. FUNCTION HOISTING
// ======================================================

// sayMyName(); // Works (Function Declaration is hoisted)

function sayMyName() {
    console.log("HELLO");
}

// sayHello(); // Error: Cannot access before initialization

let sayHello = function () {
    console.log("Hello kaise ho sare?");
};

sayHello();


// ======================================================
// 3. CLASS HOISTING
// ======================================================

// const obj1 = new Human(); // ReferenceError (Class not initialized)

class Human { }

const obj2 = new Human();


// ======================================================
// 4. FUNCTIONS AS FIRST-CLASS CITIZENS
// ======================================================

/*
Functions can be:
1. Assigned to variables
2. Passed as arguments
3. Returned from functions
4. Stored in objects
*/

let greet1 = function () {
    console.log("Greetings for the day!");
};


// ======================================================
// 5. PASSING FUNCTIONS AS ARGUMENTS
// ======================================================

function greetMe(greetFn, fullName) {
    console.log("Hello", fullName);
    greetFn();
}

// greetMe(greet, "Vaibhav");


// ======================================================
// 6. RETURNING A FUNCTION
// ======================================================

function solve(number) {
    return function (num) {
        return num * num;
    };
}

let Ans = solve(5);
// console.log(Ans(5));


// ======================================================
// 7. ARRAY OF FUNCTIONS
// ======================================================

let arr = [
    function (a, b) { return a + b; },
    function (a, b) { return a - b; },
    function (a, b) { return a * b; }
];

let first = arr[2];
// console.log(first(5, 10));


// ======================================================
// 8. FUNCTIONS INSIDE OBJECTS
// ======================================================

let obj = {
    age: 18,
    weight: 45,
    height: 6,
    greet: () => {
        console.log("Hello Duniya");
    }
};

// console.table(obj);
// obj.greet();


// ======================================================
// 9. HOISTING ISSUE WITH FUNCTION EXPRESSION
// ======================================================

greet(); // TypeError: greet is not a function (var greet = undefined)

var greet = function () {
    console.log("Hello Duniya!");
};

greet();
