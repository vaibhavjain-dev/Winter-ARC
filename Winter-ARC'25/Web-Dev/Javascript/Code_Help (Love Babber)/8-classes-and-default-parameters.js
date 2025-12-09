/* =====================================================
   1) CLASS: Human (Constructor, Private Fields, Getters, Setters)
   ===================================================== */

class Human {
    // properties
    age;
    weight = 70;
    #height = 6;

    // constructor
    constructor(newAge, newWeight) {
        this.age = newAge;
        this.weight = newWeight;
    }

    // behaviour
    walking() {
        console.log("I am Walking", this.#height);
    }

    running() {
        console.log("I am Running");
    }

    // Getter 
    get fetchHeight() {
        return this.#height;
    }

    // Setter 
    set modifyHeight(val) {
        this.#height = val;
    }
}

// Creating an object
let obj = new Human(50, 190);

console.log(obj.weight, obj.age);
obj.walking();

// using getter
console.log(obj.fetchHeight);

// using setter
obj.modifyHeight = 10;
console.log(obj.fetchHeight);



/* =====================================================
   2) DEFAULT PARAMETER — STRING
   ===================================================== */

function sayName(myName = "Hey harinam krishna jagganatham premanandi") {
    console.log("My name is -->", myName);
}

sayName();



/* =====================================================
   3) DEFAULT PARAMETER — USING ANOTHER PARAMETER
   ===================================================== */

function sayName2(fName = "Vaibhav", lName = fName.toUpperCase()) {
    console.log("My name is -->", fName, lName);
}

sayName2("Developer");



/* =====================================================
   4) DEFAULT PARAMETER — OBJECT
   ===================================================== */

function solveObj(value = { age: 15, height: 6, weight: 60 }) {
    console.log("Hello Ji -->", value);
}

solveObj();



/* =====================================================
   5) DEFAULT PARAMETER — ARRAY
   ===================================================== */

function solveArray(value = ["Vaibhav", "developer", "Love babbher"]) {
    console.log("Hello Ji -->", value);
}

solveArray();



/* =====================================================
   6) DEFAULT PARAMETER — FUNCTION RETURN
   ===================================================== */

function getAge() {
    return 180;
}

function utility(Name = "USER", Age = getAge()) {
    console.log(Name, Age);
}

utility("Vaibhav");
