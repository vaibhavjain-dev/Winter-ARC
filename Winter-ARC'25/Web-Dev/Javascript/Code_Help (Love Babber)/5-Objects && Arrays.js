console.log("\n--- Objects && Arrays in JS ---\n");

// --- Object Example ---
console.log("Object : collection of data in key : value pairs");

let obj = {
    firstName: "Vaibhav",
    lastName: "Jain",
    age: 18,
    role: "Web3 Developer",
    Salary: 10000000,
    greet: function () {
        console.log("That's my profile! Hire me.");
    }
};

console.table(obj);
obj.greet();

let obj2 = obj;
console.log("Copied object (obj2):", obj2);

// --- Array Example ---
console.log("\n --- Arrays : Collection of Data/elements ---\n");

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr2 = new Array("Vaibhav", "Jain", 18, "Web3 Developer", 10000000);

console.log(arr);
console.log(arr2);
console.log(typeof arr);
console.log(typeof arr2);

console.log("First element of arr2:", arr2[0]);

let methodsInARRAYs = {
    1: "Push",
    2: "Pop",
    3: "Shift",
    4: "Unshift",
    5: "Slice",
    6: "Map",
    7: "Filter",
    8: "Reduce",
    9: "Sort",
    10: "IndexOf",
    11: "Find"
};

console.table(methodsInARRAYs);

console.log("Original arr2:", arr2);

arr2.push('JainSahab');
console.log("After push:", arr2);

arr2.pop();
console.log("After pop:", arr2);

arr2.shift();
console.log("After shift:", arr2);

arr2.unshift('Vaibhav');
console.log("After unshift:", arr2);
