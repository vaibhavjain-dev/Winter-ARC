// ============================================================
// 🔸 Section 1: Greeting Message
// ============================================================
console.log("========== Greeting Message ==========");
console.log("Vaibhav");


// ============================================================
// 🔸 Section 2: Variable Declarations Examples
// ============================================================

// var: can redeclare and redefine
function varExample() {
    var age = 25;
    console.log("inside function (var):", age);
}
varExample();
var age = 20;
console.log("global age (var):", age);

// let: cannot redeclare, can redefine
let a = 10;
console.log("\nlet a initial:", a);
a = "Vaibhav";
console.log("let a reassigned (string):", a);
a = true;
console.log("let a reassigned (boolean):", a);
a = null;
console.log("let a reassigned (null):", a);

// const: cannot redeclare or redefine
const b = 10;
console.log("\nconst b:", b);


// ============================================================
// 🔸 Section 3: Datatypes Demonstration
// ============================================================
console.log("\n========== Datatypes ==========");

let marks;
console.log("marks (initial, declared but not initialized):", marks);
console.log("typeof marks (initial):", typeof marks);

marks = "Author of this repo: Vaibhav Jain";
console.log("marks (string):", marks);
console.log("typeof marks (string):", typeof marks);

marks = 54321;
console.log("marks (number):", marks);
console.log("typeof marks (number):", typeof marks);

marks = true;
console.log("marks (boolean):", marks);
console.log("typeof marks (boolean):", typeof marks);


// ============================================================
// 🔸 Section 4: Large Number / Precision
// ============================================================
console.log("\n========== Large Number / Precision ==========");

marks = 12345678900987654321785462136548977845613248798875523n; // using BigInt
console.log("marks (large numeric literal):", marks);
console.log("typeof marks (large literal):", typeof marks);
