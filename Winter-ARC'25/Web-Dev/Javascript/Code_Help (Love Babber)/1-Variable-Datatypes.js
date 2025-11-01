// ==========================================
// 🔸 Section 1: Greeting Message
// ==========================================
console.log("Vaibhav");
console.log("========== Greeting Message ==========");
console.log("Vaibhav");


// ==========================================
// 🔸 Section 2: Variable Declarations (Examples)
// ==========================================

// Example with var (can redeclare and redefine)
// function FN() {
//     var age = 25;
//     console.log("inside FN:", age);
// }
// FN();
// var age = 20;
// console.log("global age:", age);

// Example with let (cannot redeclare, can redefine)
// let a = 10;
// console.log("initial a:", a);
// a = "vaibhav";
// console.log("reassigned a (string):", a);
// a = true;
// console.log("reassigned a (boolean):", a);
// a = null;
// console.log("reassigned a (null):", a);

// Example with const (cannot redeclare or redefine)
// const b = 10;
// console.log("const b:", b);


// ==========================================
// 🔸 Section 3: Datatypes Demonstration
// ==========================================
console.log("\n========== Datatypes ==========");

let marks;
console.log("marks (initial, declared but not initialized):", marks);
console.log("typeof marks (initial):", typeof marks);

marks = "Author of this repo : Vaibhav Jain";
console.log("marks (string):", marks);
console.log("typeof marks (string):", typeof marks);

marks = 54321;
console.log("marks (number):", marks);
console.log("typeof marks (number):", typeof marks);

marks = true;
console.log("marks (boolean):", marks);
console.log("typeof marks (boolean):", typeof marks);


// ==========================================
// 🔸 Section 4: Large Number / Precision
// ==========================================
console.log("\n========== Large Number / Precision ==========");

marks = 12345678900987654321785462136548977845613248798875523;
console.log("marks (large numeric literal):", marks);
console.log("typeof marks (large literal):", typeof marks);
