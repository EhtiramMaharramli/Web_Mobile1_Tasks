// Function to generate n random numbers in the range [a, b]
function generateRandomNumbers(a, b, n) {
    const randomNumbers = [];
    for (let i = 0; i < n; i++) {
        const randomNumber = Math.floor(Math.random() * (b - a + 1)) + a;
        randomNumbers.push(randomNumber);
    }
    return randomNumbers;
}

// Function to count the occurrences of each number in an array
function countOccurrences(arr) {
    const count = {};
    for (let number of arr) {
        count[number] = (count[number] || 0) + 1;
    }
    return count;
}

// Get input from the user for range (a and b) and the number of elements (n)
const a = parseInt(prompt("Enter the lower range (a):"));
const b = parseInt(prompt("Enter the upper range (b):"));
const n = parseInt(prompt("Enter the number of elements (n):"));

// Generate random numbers and count their occurrences
const randomNumbers = generateRandomNumbers(a, b, n);
const occurrences = countOccurrences(randomNumbers);

// Print the list with the number of each element
console.log(randomNumbers);
for (let number in occurrences) {
    console.log(`${number} is repeated ${occurrences[number]} times`);
}
