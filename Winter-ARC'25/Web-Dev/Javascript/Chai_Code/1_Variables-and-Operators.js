// // Section 1: Greeting Message
// console.log("========== Greeting Message ==========");
// console.log("Hello, Vaibhav");

// let name = "Developer Monkey";
// console.log("Name:", name);

// //////////////////////////////////////////////////////////////////////////////////////////

// // Section 2: Variables (let, var, const)
// console.log("\n========== Variables ==========");

// const accountID = 12345678; // Constant variable, cannot be reassigned
// let accountEmail = "monkey@mon.com"; // Let variable, can be reassigned
// var accountPassword = "87654321"; // Var variable, function-scoped
// let accountCity = "Jaipur"; // Declared with let for better scoping

// console.log("Before Update:");
// console.table({ accountID, accountEmail, accountPassword, accountCity });

// // Updating account details
// accountEmail = "abc@xyz.com";
// accountPassword = "12345678";
// accountCity = "Bangaluru";

// console.log("After Update:");
// console.table({ accountID, accountEmail, accountPassword, accountCity });

// //////////////////////////////////////////////////////////////////////////////////////////

// // Section 3: Arithmetic Operators
// console.log("\n========== Arithmetic Operators ==========");

// let a = 10;
// let b = 5;

// console.group("Arithmetic Operations");
// console.log("Addition:", a + b);
// console.log("Subtraction:", a - b);
// console.log("Multiplication:", a * b);
// console.log("Division:", a / b);
// console.log("Modulus:", a % b);
// console.groupEnd();

// // Increment & Decrement
// console.group("Increment & Decrement");
// ++a; // Pre Increment
// console.log("Pre Increment:", a);
// a++; // Post Increment
// console.log("Post Increment:", a);

// --a; // Pre Decrement
// console.log("Pre Decrement:", a);
// a--; // Post Decrement
// console.log("Post Decrement:", a);
// console.groupEnd();

// //////////////////////////////////////////////////////////////////////////////////////////

// // Section 4: Comparison Operators
// console.log("\n========== Comparison Operators ==========");

// console.group("Comparison Results");
// console.log("Type of a:", typeof a);
// console.log("Type of b:", typeof b);
// console.log("Equal to (a == b):", a == b);
// console.log("Not Equal to (a != b):", a != b);
// console.groupEnd();

// //////////////////////////////////////////////////////////////////////////////////////////

// // Section 5: Logical Operators
// console.log("\n========== Logical Operators ==========");

// let Logic = true;
// console.group("Logical Operations");
// console.log("A AND B (a && b):", a && b);
// console.log("A OR B (a || b):", a || b);
// console.log("Logic (true):", Logic);
// console.log("Not Logic (!Logic):", !Logic);
// console.groupEnd();

// //////////////////////////////////////////////////////////////////////////////////////////

// // Section 6: Bitwise Operators
// console.log("\n========== Bitwise Operators ==========");

// console.group("Bitwise Operations");
// console.log("Bitwise AND (a & b):", a & b);
// console.log("Bitwise OR (a | b):", a | b);
// console.log("Bitwise XOR (a ^ b):", a ^ b);
// console.log("Bitwise NOT (~a):", ~a);
// console.groupEnd();

// //////////////////////////////////////////////////////////////////////////////////////////

