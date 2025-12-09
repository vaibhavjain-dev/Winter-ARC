// Filename: common-inbuilt-objects.js

/****************************************************
 * Section: Math Object Examples
 ****************************************************/
console.log("=== Math Object Examples ===");

console.log("PI:", Math.PI);
console.log("Maximum Value:", Math.max(12, 43, 65, 23, 7, 56, 87, 23, 76, 98));
console.log("Minimum Value:", Math.min(12, 43, 65, 23, 7, 56, 87, 23, 76, 98));
console.log("Rounded Value:", Math.round(12.78));
console.log("Floor Value:", Math.floor(76.8));
console.log("Ceil Value:", Math.ceil(76.8));
console.log("Absolute Value:", Math.abs(-4));
console.log("Random Value:", Math.random());
console.log("Square Root of 25:", Math.sqrt(25));
console.log("2 to the Power of 10:", Math.pow(2, 10));

/****************************************************
 * Section: Date Object Examples
 ****************************************************/
console.log("\n=== Date Object Examples ===");

let taarikh = new Date(2007, 1, 2); // Month is 0-indexed (0 = Jan)
console.log("Full Date:", taarikh);
console.log("Year:", taarikh.getFullYear());
