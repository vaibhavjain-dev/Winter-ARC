// ======================================================
// VARIABLE SCOPE IN JAVASCRIPT
// 1. Global Scope
// 2. Function Scope
// 3. Block Scope
// ======================================================


// ======================================================
// 1. GLOBAL SCOPE
// ======================================================

var age = 18;

console.log(age); // Global

{
    console.log(age); // Accessible inside block
}

if (true) {
    console.log(age); // Accessible inside condition
}

for (let i = 0; i < 2; i++) {
    console.log(age); // Accessible in loops
}

function whatIsAge() {
    console.log("Your age is", age);
}

whatIsAge();


// ======================================================
// 2. FUNCTION SCOPE
// ======================================================

function sayHello() {
    var fullName = "Earth"; // Function-scoped
    console.log("Hello Duniya", fullName);
}

// console.log(fullName); // Error: fullName is not defined
// sayHello();


// ======================================================
// 3. BLOCK SCOPE
// ======================================================

// Using var (NOT block scoped)
console.log(height); // undefined because var is hoisted

{
    var height = 180; // var ignores block scope
}

// Using let (BLOCK scoped)
{
    let height = 180;
    console.log(height); // 180
}

console.log(height); // 180 (from var)


// ======================================================
// TEMPORAL DEAD ZONE (TDZ)
// ======================================================

// console.log(Marks); // ReferenceError: Cannot access before initialization

const Marks = 100;

console.log(Marks);
