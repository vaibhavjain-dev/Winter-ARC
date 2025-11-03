console.log("\n--- Objects in JS ---\n");

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
