// ============================================================
// 🧮 Arithmetic Operators
// ============================================================

let a = 5, b = 10;

console.log(a + b);  // Addition
console.log(a - b);  // Subtraction
console.log(a * b);  // Multiplication
console.log(a / b);  // Division
console.log(a % b);  // Modulus (remainder)
console.log(a ** b); // Exponentiation (power)


// ============================================================
// ➕ Unary Operators
// ============================================================

let x;

x = ++a;  // Pre-increment: a becomes 6, then x = 6
console.log(a);
console.log(x);

x = a++;  // Post-increment: x = 6, then a becomes 7
console.log(a);
console.log(x);


// ============================================================
// 📝 Assignment Operators
// ============================================================

a += 10;  // Add and assign
console.log(a);

a -= 10;  // Subtract and assign
console.log(a);


// ============================================================
// ⚖️ Comparison Operators
// ============================================================

console.log(a > b);   // Greater than
console.log(a >= b);  // Greater than or equal to
console.log(a < b);   // Less than
console.log(a <= b);  // Less than or equal to
console.log(a == b);  // Equal (value)
console.log(a === b); // Strict equal (value + type)
console.log(a != b);  // Not equal


// ============================================================
// ❓ Ternary Operator
// ============================================================

let age = 18;
let status = (age >= 18) ? "You can vote!" : "You cannot vote!";
console.log(status);


// ============================================================
// ⚙️ Logical Operators
// ============================================================

let ans;

ans = (true && true);   // Logical AND
console.log(ans);

ans = (true || false);  // Logical OR
console.log(ans);

ans = !true;            // Logical NOT
console.log(ans);


// ============================================================
// 💡 Truthy & Falsy Values
// ============================================================

// Falsy values: undefined, null, 0, false, NaN, ""
// Truthy: everything else

console.log(false || "Vaibhav");  // Prints "Vaibhav" because false is falsy


// ============================================================
// 🔢 Bitwise Operators
// ============================================================

console.log(2 & 5);   // Bitwise AND
console.log(2 | 5);   // Bitwise OR
console.log(~0);      // Bitwise NOT
console.log(2 ^ 4);   // Bitwise XOR
console.log(10 << 1); // Left shift
console.log(10 >> 1); // Right shift


// ============================================================
// 🧭 Conditional Statements
// ============================================================

let userAge = 25;

if (userAge >= 18) {
    console.log("You can Vote!");
} else {
    console.log("You cannot Vote!");
}

let number = 2;

if (number == 1) {
    console.log('A');
} else if (number == 2) {
    console.log('B');
} else if (number == 3) {
    console.log('C');
} else if (number == 4) {
    console.log('D');
} else {
    console.log('F');
}


// ============================================================
// 🔁 Switch Case
// ============================================================

let num = 3;

switch (num) {
    case 1: console.log("A"); break;
    case 2: console.log("B"); break;
    case 3: console.log("C"); break;
    case 4: console.log("D"); break;
    case 5: console.log("E"); break;
    default: console.log("Fail"); break;
}
