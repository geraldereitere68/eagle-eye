/* fibonacci_sequence.js */

// This code generates the Fibonacci sequence up to a specified limit and prints the result

function generateFibonacci(limit) {
  const sequence = [0, 1];
  
  for (let i = 2; i < limit; i++) {
    const nextNumber = sequence[i-1] + sequence[i-2];
    sequence.push(nextNumber);
  }
  
  return sequence;
}

function printFibonacci(sequence) {
  console.log("Fibonacci Sequence:");
  for (let i = 0; i < sequence.length; i++) {
    console.log(sequence[i]);
  }
}

// Generate Fibonacci sequence up to 200 elements
const fibonacciSequence = generateFibonacci(200);

// Print Fibonacci sequence
printFibonacci(fibonacciSequence);

// Additional function that calculates the sum of a Fibonacci sequence
function calculateSum(sequence) {
  let sum = 0;
  
  for (let i = 0; i < sequence.length; i++) {
    sum += sequence[i];
  }
  
  return sum;
}

// Calculate the sum of the Fibonacci sequence
const fibonacciSum = calculateSum(fibonacciSequence);
console.log("Sum of Fibonacci sequence:", fibonacciSum);

// Additional function to check if a number is prime
function isPrime(number) {
  if (number < 2) {
    return false;
  }
  
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  
  return true;
}

// Additional function that filters even numbers from a sequence
function filterEvenNumbers(sequence) {
  const filtered = [];
  
  for (let i = 0; i < sequence.length; i++) {
    if (sequence[i] % 2 === 0) {
      filtered.push(sequence[i]);
    }
  }
  
  return filtered;
}

// Filter the even numbers from the Fibonacci sequence
const evenNumbers = filterEvenNumbers(fibonacciSequence);
console.log("Even Numbers in Fibonacci sequence:", evenNumbers);

// Additional function that finds the largest prime number in a sequence
function findLargestPrime(sequence) {
  let largestPrime = -Infinity;
  
  for (let i = 0; i < sequence.length; i++) {
    if (isPrime(sequence[i]) && sequence[i] > largestPrime) {
      largestPrime = sequence[i];
    }
  }
  
  return largestPrime;
}

// Find the largest prime number in the Fibonacci sequence
const largestPrime = findLargestPrime(fibonacciSequence);
console.log("Largest Prime in Fibonacci sequence:", largestPrime);

// Additional function that calculates the average of a sequence
function calculateAverage(sequence) {
  let sum = 0;
  
  for (let i = 0; i < sequence.length; i++) {
    sum += sequence[i];
  }
  
  return sum / sequence.length;
}

// Calculate the average of the Fibonacci sequence
const fibonacciAverage = calculateAverage(fibonacciSequence);
console.log("Average of Fibonacci sequence:", fibonacciAverage);

// Additional function that reverses a sequence
function reverse(sequence) {
  const reversed = [];
  
  for (let i = sequence.length - 1; i >= 0; i--) {
    reversed.push(sequence[i]);
  }
  
  return reversed;
}

// Reverse the Fibonacci sequence
const reversedSequence = reverse(fibonacciSequence);
console.log("Reversed Fibonacci sequence:", reversedSequence);
