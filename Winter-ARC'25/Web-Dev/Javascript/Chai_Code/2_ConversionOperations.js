/////////////////////////////////////////
// 🔸 TYPE CONVERSION IN JAVASCRIPT
/////////////////////////////////////////

let marks = "99abc";
console.log("marks:", marks);
console.log("Type of marks:", typeof marks);

let valueInNumber = Number(marks);
console.log("valueInNumber (Number conversion):", valueInNumber);
console.log("Type of valueInNumber:", typeof valueInNumber);

let isLoggedIn = 1;
console.log("\nisLoggedIn:", isLoggedIn);

let booleanIsTrue = Boolean(isLoggedIn);
console.log("booleanIsTrue (Boolean conversion):", booleanIsTrue);
console.log("Type of booleanIsTrue:", typeof booleanIsTrue);

let someNumber = 33;
console.log("\nsomeNumber:", someNumber);

let stringNumber = String(someNumber);
console.log("stringNumber (String conversion):", stringNumber);
console.log("Type of stringNumber:", typeof stringNumber);



/////////////////////////////////////////
// 🔸 BASIC ARITHMETIC OPERATIONS
/////////////////////////////////////////

let value = 3;
let negativeValue = -value;
console.log("\nNegative of", value, "is:", negativeValue);

console.log("\nArithmetic Operations:");
console.log("2 + 2 =", 2 + 2);
console.log("2 - 2 =", 2 - 2);
console.log("2 * 2 =", 2 * 2);
console.log("2 / 2 =", 2 / 2);
console.log("2 % 2 =", 2 % 2);



/////////////////////////////////////////
// 🔸 STRING CONCATENATION & TYPE COERCION
/////////////////////////////////////////

let str1 = "Vaibhav ";
let str2 = "Jain";

console.log("\nString Concatenation:");
console.log(`"${str1}" + "${str2}" =`, str1 + str2);

console.log('\nType Coercion Examples:');
console.log('"1" + 2 =', "1" + 2, "| Type:", typeof ("1" + 2));
console.log('1 + "2" =', 1 + "2", "| Type:", typeof (1 + "2"));
console.log('"1" + 2 + 2 =', "1" + 2 + 2, "| Type:", typeof ("1" + 2 + 2));
console.log('1 + 2 + "2" =', 1 + 2 + "2", "| Type:", typeof (1 + 2 + "2"));



/////////////////////////////////////////
// 🔸 POSTFIX INCREMENT
/////////////////////////////////////////

let a = 5;
let b = a++;   // Postfix increment: returns old value, then increments
console.log(`\nPostfix Increment:`);
console.log("Initial a = 5");
console.log("b = a++ → b:", b);
console.log("After operation, a:", a);



/////////////////////////////////////////
// 🔸 PREFIX INCREMENT
/////////////////////////////////////////

let x = 5;
let y = ++x;   // Prefix increment: increments first, then returns new value
console.log(`\nPrefix Increment:`);
console.log("Initial x = 5");
console.log("y = ++x → y:", y);
console.log("After operation, x:", x);



/////////////////////////////////////////
// 🔸 POSTFIX DECREMENT
/////////////////////////////////////////

let p = 5;
let q = p--;   // Postfix decrement
console.log(`\nPostfix Decrement:`);
console.log("Initial p = 5");
console.log("q = p-- → q:", q);
console.log("After operation, p:", p);



/////////////////////////////////////////
// 🔸 PREFIX DECREMENT
/////////////////////////////////////////

let m = 5;
let n = --m;   // Prefix decrement
console.log(`\nPrefix Decrement:`);
console.log("Initial m = 5");
console.log("n = --m → n:", n);
console.log("After operation, m:", m);



/////////////////////////////////////////
// 🔸 COMPARISON OPERATORS
/////////////////////////////////////////

console.log("\nComparison Examples:");
console.log("2 > 1  →", 2 > 1);
console.log("2 >= 1 →", 2 >= 1);
console.log("2 < 1  →", 2 < 1);
console.log("2 <= 1 →", 2 <= 1);
console.log("2 == 1 →", 2 == 1);
console.log("2 != 1 →", 2 != 1);

console.log('"2" > 1  →', "2" > 1);
console.log("null == 1 →", null == 1);
console.log("2 >= 1 →", 2 >= 1);



/////////////////////////////////////////
// 🔸 STRICT COMPARISON
/////////////////////////////////////////

console.log("\nStrict Comparison (===):");
console.log('"2" === 2 →', "2" === 2);
