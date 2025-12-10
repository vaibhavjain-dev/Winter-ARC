/////////////////////////////////////////////
// 1️⃣ What is an Error?
/////////////////////////////////////////////

// Error is just an event that impacts or acts to disrupt normal flow of execution

console.log("----- 1️⃣ What is an Error? -----\n");
console.log("Error is an event that disrupts normal flow of execution\n");



/////////////////////////////////////////////
// 2️⃣ Types of Errors in JS
/////////////////////////////////////////////

console.log("----- 2️⃣ Types of Errors -----\n");

/* Types of errors
 
1. Compile time error = Code execute hone se pehle pata chal jaye
2. Run time errors = code execution meinn pata chal jaye
*/

// Syntax Error Example (Compile time error)
// Uncommenting this line will give a syntax error
// console.log("2";

// Runtime Error Example
// Uncommenting this line will give a runtime error
// console.log(x);

console.log("Example: Compile vs Runtime errors explained in comments\n");



/////////////////////////////////////////////
// 3️⃣ Basic try-catch
/////////////////////////////////////////////

console.log("----- 3️⃣ Basic try-catch -----\n");

try {
    console.log("I'm inside Try Block");
    console.log(x); // x is not defined, will throw a runtime error
}
catch (error) {
    // define karte hai, error ke saath aap kya karna chahte hai
    // retry
    // fall back mechanism
    // throw back
    // logging
    // custom error
    console.log("I'm inside Catch Block");
    console.log("Error details:", error.message);
}

console.log("\n");



/////////////////////////////////////////////
// 4️⃣ try-catch-finally
/////////////////////////////////////////////

console.log("----- 4️⃣ try-catch-finally -----\n");

try {
    console.log("Trying risky code");
    console.log(y); // y is not defined
}
catch (error) {
    console.log("Caught an error:", error.message);
}
finally {
    // This will run every time irrespective of error
    console.log("I'm inside Finally Block");
}

console.log("\n");



/////////////////////////////////////////////
// 5️⃣ Throwing Custom Errors
/////////////////////////////////////////////

console.log("----- 5️⃣ Throwing Custom Errors -----\n");

try {
    console.log(z); // z is not defined
}
catch (error) {
    try {
        throw new Error("Bhai declare kar fir print kar"); // Custom error
    }
    catch (customError) {
        console.log("Custom Error caught:", customError.message);
    }
}

console.log("\n");



/////////////////////////////////////////////
// 6️⃣ Conditional Custom Errors
/////////////////////////////////////////////

console.log("----- 6️⃣ Conditional Custom Errors -----\n");

let errorCode = 100;

try {
    if (errorCode === 100) {  // Corrected variable name
        throw new Error("Invalid JSON");
    }
}
catch (conditionalError) {
    console.log("Conditional Error caught:", conditionalError.message);
}

console.log("\nAll examples executed successfully!\n");
