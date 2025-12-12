// =========================================================
// 1️⃣ FOR LOOP
// =========================================================
for (let i = 1; i <= 5; i++) {
    console.log("For Loop:", i);
}


// =========================================================
// 2️⃣ WHILE LOOP
// =========================================================
let j = 1;
while (j <= 5) {
    console.log("While Loop:", j);
    j++;
}


// =========================================================
// 3️⃣ DO-WHILE LOOP
// =========================================================
let k = 1;
do {
    console.log("Do-While Loop:", k);
    k++;
} while (k <= 5);


// =========================================================
// 4️⃣ FOR...OF LOOP (Strings / Arrays)
// =========================================================
let text = "Vaibhav Jain";
let size = 0;

for (let ch of text) {
    console.log(ch);
    size++;
}

console.log("Total characters:", size);


// =========================================================
// 5️⃣ FOR...IN LOOP (Objects)
// =========================================================
let student = {
    name: "Vaibhav Jain",
    age: 18,
    work: "Web3 Dev",
    salaried: true,
    location: "Dubai"
};

for (let key in student) {
    console.log(key + ":", student[key]);
}


// =========================================================
// 6️⃣ Q1: PRINT EVEN NUMBERS (0 to 100)
// =========================================================
for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log("Even:", i);
    }
}


// =========================================================
// 7️⃣ NUMBER GUESSING GAME 🎮 (Browser Only)
// =========================================================
// Uncomment to run inside browser

/*
let gameNum = 25;
let attempts = 1;

let userNum = Number(prompt("Guess the correct number:"));

while (userNum !== gameNum) {
    attempts++;
    userNum = Number(prompt("Wrong guess! Try again:"));
}

console.log("Correct Answer!");
console.log("You guessed it in", attempts, "attempts!");
*/


// =========================================================
// 8️⃣ STRING BASICS
// =========================================================
let str = "Vaibhav Jain";

console.log("String:", str);
console.log("Length:", str.length);
console.log("Character at index 8:", str[8]);


// =========================================================
// 9️⃣ TEMPLATE LITERALS
// =========================================================
let obj = {
    item: "Pen",
    price: 20,
};

let output = `The Item is ${obj.item} and Price is ${obj.price}`;

console.log(output);
console.log("The Item is", obj.item, "and Price is", obj.price);


// =========================================================
// 🔟 STRING METHODS
// =========================================================
output = output.toLowerCase();
console.log("Lowercase:", output);

output = output.toUpperCase();
console.log("Uppercase:", output);

console.log("Slice (1 to 11):", output.slice(1, 11));


// =========================================================
// 1️⃣1️⃣ CONCAT METHOD
// =========================================================
let str1 = "Vaibhav";
let str2 = "Jain";

console.log("Concat:", output.concat(" ", str1, " ", str2));


// =========================================================
// 1️⃣2️⃣ REPLACE METHOD
// =========================================================
let newOutput = output.replace("PEN", "MARKER");
console.log("After Replace:", newOutput);


// =========================================================
// 1️⃣3️⃣ USERNAME GENERATOR
// =========================================================

let fullname = prompt("Enter your full name (with or without spaces)");

// Remove spaces and convert to lowercase
let cleanName = fullname.replace(/\s/g, "").toLowerCase();

// Create username with @, name, and length
let username = "@" + cleanName + cleanName.length;

console.log("Generated Username:", username);
    