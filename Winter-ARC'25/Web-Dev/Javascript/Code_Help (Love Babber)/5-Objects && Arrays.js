console.log("\n--- 🧠 Objects && Arrays in JavaScript ---\n");

// --- 🧱 Object Example ---
console.log("Object: A collection of data in key : value pairs\n");

let obj = {
    firstName: "Vaibhav",
    lastName: "Jain",
    age: 18,
    role: "Web3 Developer",
    salary: 10000000,
    greet: function () {
        console.log("That's my profile! Hire me.");
    }
};

console.table(obj);
obj.greet();

// Copying object reference
let obj2 = obj;
console.log("\nCopied object (obj2):", obj2);


// --- 🧩 Array Example ---
console.log("\n--- 🧩 Arrays: Collection of Data / Elements ---\n");

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr2 = new Array("Vaibhav", "Jain", 18, "Web3 Developer", 10000000);

console.log("Array 1:", arr);
console.log("Array 2:", arr2);
console.log("Type of arr:", typeof arr);
console.log("Type of arr2:", typeof arr2);

console.log("First element of arr2:", arr2[0]);


// --- 📋 Object Example: Array Methods List ---
let methodsInARRAYs = {
    1: "Push",
    2: "Pop",
    3: "Shift",
    4: "Unshift",
    5: "Slice",
    6: "Splice",
    7: "Map",
    8: "Filter",
    9: "Reduce",
    10: "Sort",
    11: "IndexOf",
    12: "Find"
};

console.table(methodsInARRAYs);


// --- 🧮 Demonstrating Array Methods ---
console.log("\n--- 🧮 Array Methods Demo ---\n");
console.log("Original arr2:", arr2);

arr2.push("JainSahab");
console.log("After push:", arr2);

arr2.pop();
console.log("After pop:", arr2);

arr2.shift();
console.log("After shift:", arr2);

arr2.unshift("JainSahab");
console.log("After unshift:", arr2);

arr2.splice(0, 1, "Ethereum");
console.log("After splice(0,1):", arr2);
