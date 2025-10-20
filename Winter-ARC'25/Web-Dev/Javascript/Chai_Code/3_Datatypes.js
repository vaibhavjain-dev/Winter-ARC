/////////////////////////////////////////
// 🔸 PRIMITIVE DATA TYPES (Call by Value)
/////////////////////////////////////////

// Types: String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;  // undefined by default

const id = Symbol('111');
const anotherID = Symbol('123');

const bigNumber = 1234567887654321n;

console.log("\nPrimitive Data Types:");
console.log("score (Number):", score);
console.log("scoreValue (Number with decimal):", scoreValue);
console.log("isLoggedIn (Boolean):", isLoggedIn);
console.log("outsideTemp (Null):", outsideTemp);
console.log("userEmail (Undefined):", userEmail);
console.log("id (Symbol):", id);
console.log("anotherID (Symbol):", anotherID);
console.log("bigNumber (BigInt):", bigNumber);

console.log("\nType Check:");
console.log("typeof score:", typeof score);
console.log("typeof outsideTemp (special case):", typeof outsideTemp);
console.log("typeof userEmail:", typeof userEmail);
console.log("typeof id:", typeof id);
console.log("typeof bigNumber:", typeof bigNumber);



/////////////////////////////////////////
// 🔸 NON-PRIMITIVE DATA TYPES (Call by Reference)
/////////////////////////////////////////

// Types: Arrays, Objects, Functions

// ✅ Array
const heros = ["Ironman", "Thor", "Captain"];
console.log("\nArray Example:");
console.table(heros);
console.log("Type of heros:", typeof heros);

// ✅ Object
const myObj = {
    name: "Vaibhav",
    username: "vaibhavjain_dev",
    age: 18,
};
console.log("\nObject Example:");
console.table(myObj);
console.log("Type of myObj:", typeof myObj);

// ✅ Function
const myFunction = function () {
    console.log("Hello World from myFunction 👋");
};
console.log("\nFunction Example:");
console.log("Type of myFunction:", typeof myFunction);
myFunction();
