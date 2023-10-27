/*
 * Filename: ComplexWebApp.js
 * Description: A complex and sophisticated web application written in JavaScript.
 */

// Define global variables
let name = "Guest";
let age = 0;
let loggedIn = false;

// Create a class for handling user authentication
class Authentication {
  constructor() {
    this.username = "admin";
    this.password = "password123";
  }

  login(username, password) {
    if (username === this.username && password === this.password) {
      loggedIn = true;
      console.log("Login successful!");
    } else {
      console.log("Invalid username or password");
    }
  }

  logout() {
    loggedIn = false;
    console.log("Logout successful!");
  }
}

// Create an instance of the authentication class
const auth = new Authentication();

// Function to greet the user
function greetUser() {
  console.log(`Welcome, ${name}!`);
  console.log(`You are ${age} years old.`);
}

// Function to update user details
function updateUserDetails() {
  name = prompt("Enter your name:");
  age = parseInt(prompt("Enter your age:"));
}

// Function to display user details
function displayUserDetails() {
  console.log(`Name: ${name}`);
  console.log(`Age: ${age}`);
}

// Function to perform a complex calculation
function performComplexCalculation() {
  let result = 0;
  for (let i = 0; i <= age; i++) {
    result += i;
  }
  console.log(`The result of the complex calculation is: ${result}`);
}

// Initialize the web application
function init() {
  console.log("Initializing the web application...");

  // Ask the user to login
  const username = prompt("Enter your username:");
  const password = prompt("Enter your password:");
  auth.login(username, password);

  // Check if the user is logged in
  if (loggedIn) {
    updateUserDetails();

    console.log("User details:");
    displayUserDetails();

    performComplexCalculation();
  } else {
    console.log("Access denied. Please login to continue.");
  }

  // Logout the user
  auth.logout();
}

// Execute the web application
init();
// More code can be added below...
console.log("End of the web application.");