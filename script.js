// Declare variables of different data types
var name = "Betty"; // string
var age = 30; // number
var isStudent = true; // boolean

// Define a function to add two numbers
function add(a, b) {
    return a + b;
}

// Define a function to subtract two numbers
function subtract(a, b) {
    return a - b;
}

// Define a function to divide two numbers
function divide(a, b) {
    if (b === 0) {
        console.log("Error: Division by zero is impossible.");
        return null;
    }
    return a / b;
}

// Define a function to multiply two numbers
function multiply(a, b) {
    return a * b;
}

// Call the functions and use console.log() to print the output
console.log("Name: " + name);
console.log("Age: " + age);
console.log("Is Student: " + isStudent);

console.log("Addition (5 + 3): " + add(5, 3));
console.log("Subtraction (10 - 6): " + subtract(10, 6));
console.log("Division (8 / 2): " + divide(8, 2));
console.log("Division (8 / 0): " + divide(8, 0)); // Test division by zero
console.log("Multiplication (4 * 7): " + multiply(4, 7));