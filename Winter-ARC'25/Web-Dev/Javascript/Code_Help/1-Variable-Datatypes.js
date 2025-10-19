console.log("Vaibhav");

// Section 1: Greeting Message
console.log("========== Greeting Message ==========");
console.log("[GREETING] Vaibhav");

//////////////////////////////////////////////////////////////////////////////////////////

// Section 2: Variable declaration examples (kept commented as in original)
// These examples are left commented to preserve original intent.
// They demonstrate VAR, LET and CONST usage and behavior.

// console.log("Variable Declaration with VAR")
// Can redelclare and redefine
// function FN() {
//     var age = 25;
//     console.log("[VAR] inside FN:", age);
// }

// FN();
// var age = 20;
// console.log("[VAR] global age:", age);

// console.log("Variable Declaration with LET")
// Cannot redeclare but can redefine
// let a = 10;
// console.log("[LET] initial a:", a);

// a = "vaibhav";
// console.log("[LET] reassigned a (string):", a);
// a = true;
// console.log("[LET] reassigned a (boolean):", a);
// a = null;
// console.log("[LET] reassigned a (null):", a);

// console.log("Variable Declaration with Const")
// // cannot redeclare and redine fixed value
// const a = 10;
// console.log("[CONST] a:", a);

//////////////////////////////////////////////////////////////////////////////////////////

// Section 3: Datatypes demonstration
console.log("\n========== Datatypes ==========");

let marks;
console.log("[DATATYPES] marks (initial, declared but not initialized):", marks); // Undefined
console.log("[DATATYPES] typeof marks (initial):", typeof marks);

marks = "Author of this repo : Vaibhav Jain";
console.log("[DATATYPES] marks (string):", marks);
console.log("[DATATYPES] typeof marks (string):", typeof marks);

marks = 54321;
console.log("[DATATYPES] marks (number):", marks);
console.log("[DATATYPES] typeof marks (number):", typeof marks);

marks = true;
console.log("[DATATYPES] marks (boolean):", marks);
console.log("[DATATYPES] typeof marks (boolean):", typeof marks);

//////////////////////////////////////////////////////////////////////////////////////////

// Section 4: Large numeric literal (precision note)
console.log("\n========== Large Number / Precision ==========");

marks = 12345678900987654321785462136548977845613248798875523;
console.log("[LARGE] marks (large numeric literal):", marks);
console.log("[LARGE] typeof marks (large literal):", typeof marks);

//////////////////////////////////////////////////////////////////////////////////////////
