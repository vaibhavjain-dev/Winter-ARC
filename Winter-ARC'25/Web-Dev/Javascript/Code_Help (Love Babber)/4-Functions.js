// ============================================================
// 🧩 JavaScript Function Examples
// ============================================================

// ------------------------------------------------------------
// 🔸 1. Take Nothing, Return Nothing (TNRN)
// ------------------------------------------------------------
function greetUser() {
    console.log("Hello Vaibhav Jain 👋");
}
greetUser();


// ------------------------------------------------------------
// 🔸 2. Take Something, Return Nothing (TSRN)
// ------------------------------------------------------------
function printNumber(num) {
    console.log("Number is:", num);
}
printNumber(5);


// ------------------------------------------------------------
// 🔸 3. Take Nothing, Return Something (TNRS)
// ------------------------------------------------------------
function getRandomNumber() {
    let num = Math.floor(Math.random() * 100);
    return num;
}
let randomValue = getRandomNumber();
console.log("Random Number:", randomValue);


// ------------------------------------------------------------
// 🔸 4. Take Something, Return Something (TSRS)
// ------------------------------------------------------------
function addNumbers(a, b) {
    let sum = a + b;
    return sum;
}
let result = addNumbers(10, 20);
console.log("Sum:", result);


// ------------------------------------------------------------
// 🔹 Function Expression Example
// ------------------------------------------------------------
let getMultiplication = function (a, b) {
    return a * b;
};
console.log("Multiplication:", getMultiplication(2, 5));


// ------------------------------------------------------------
// 🔹 Arrow Function Example (ES6+)
// ------------------------------------------------------------
let getExp = (x, y) => {
    return x ** y;
};
console.log("Exponentiation:", getExp(2, 10));
