// Logging a greeting message
console.log("Hello, Vaibhav");

// Declaring and logging a variable
let name = "Developer Monkey";
console.log(name);


//////////////////////////////////////////////////////////////////////////////////////////


// Variables: let, var, const

const accountID = 12345678; // Constant variable, cannot be reassigned
let accountEmail = "monkey@mon.com"; // Let variable, can be reassigned
var accountPassword = "87654321"; // Var variable, function-scoped
let accountCity = "Jaipur"; // Declared with let for better scoping

// Displaying initial account details
console.log("Before:");
console.table([accountID, accountEmail, accountPassword, accountCity]);

// Updating account details
accountEmail = "abc@xyz.com";
accountPassword = "12345678";
accountCity = "Bangaluru";

// Displaying updated account details
console.log("After:");
console.table([accountID, accountEmail, accountPassword, accountCity]);


//////////////////////////////////////////////////////////////////////////////////////////


// Arithmetic Operators
let a = 10;
let b = 5;

// Addition
console.log("Addition:", a + b);

// Subtraction
console.log("Subtraction:", a - b);

// Multiplication
console.log("Multiplication:", a * b);

// Division
console.log("Division:", a / b);

// Modulus
console.log("Modulus:", a % b);


// Increment & Decrement
++a //Pre Increment
console.log("Pre Increment: ", a);
a++ //Post Increment
console.log("Post Increment: ", a);


--a // Pre Decrement
console.log("Pre Decrement: ", a);
a-- // Post Decrement
console.log("Post Decrement: ", a);

//////////////////////////////////////////////////////////////////////////////////////////