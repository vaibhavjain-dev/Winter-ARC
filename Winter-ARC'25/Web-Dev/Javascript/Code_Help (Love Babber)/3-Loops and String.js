// ============================================================
// 🧭 JavaScript Loop Examples
// ============================================================

// ------------------------------------------------------------
// 🔁 For Loop Demo
// ------------------------------------------------------------
console.log("--For Loop--");
console.log('For Loop demo:');
for (let i = 1; i <= 10; i++) {
    console.log("This is for loop " + i);
}

// ------------------------------------------------------------
// 🔢 Forward Counting (For Loop)
// ------------------------------------------------------------
console.log('\nForward Counting:');
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// ------------------------------------------------------------
// 🔢 Backward Counting (For Loop)
// ------------------------------------------------------------
console.log('\nBackward Counting:');
for (let i = 5; i >= 1; i--) {
    console.log(i);
}

// ------------------------------------------------------------
// ⛔ Break Statement Example (For Loop)
// ------------------------------------------------------------
console.log('\nBreak Example:');
for (let i = 1; i <= 6; i++) {
    if (i === 4) {
        console.log("You found", i);
        break;
    }
    console.log(i);
}

// ------------------------------------------------------------
// ⏭️ Continue Statement Example (For Loop)
// ------------------------------------------------------------
console.log('\nContinue Example:');
for (let i = 1; i <= 6; i++) {
    if (i === 3) continue;
    console.log(i);
}

// ------------------------------------------------------------
// 🔁 While Loop Examples
// ------------------------------------------------------------
console.log("\nWhile Loop Counting 1 to 5:");
let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}

console.log("\nBackward Counting (While Loop):");
i = 5;
while (i >= 1) {
    console.log(i);
    i--;
}

console.log("\nBreak Example (While Loop):");
i = 1;
while (i <= 6) {
    if (i === 4) {
        console.log("You found", i);
        break;
    }
    console.log(i);
    i++;
}

console.log("\nContinue Example (While Loop):");
i = 1;
while (i <= 6) {
    if (i === 4) {
        console.log("You found", i);
        i++; // increment before continue
        continue;
    }
    console.log(i);
    i++;
}

// ------------------------------------------------------------
// 🔁 Do-While Loop Examples
// ------------------------------------------------------------
console.log("\nDo-While Loop Counting 1 to 5:");
i = 1;
do {
    console.log(i);
    i++;
} while (i <= 5);

console.log("\nBackward Counting (Do-While Loop):");
i = 5;
do {
    console.log(i);
    i--;
} while (i >= 1);

console.log("\nBreak Example (Do-While Loop):");
i = 1;
do {
    if (i === 4) {
        console.log("You found", i);
        break;
    }
    console.log(i);
    i++;
} while (i <= 6);

console.log("\nContinue Example (Do-While Loop):");
i = 1;
do {
    if (i === 4) {
        console.log("You found", i);
        i++;
        continue;
    }
    console.log(i);
    i++;
} while (i <= 6);
