// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

// Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

// Note: The function accepts an integer and returns an integer.

// Happy Coding!









function squareDigits(num) {
    // Convert the number to a string to iterate over its digits
    let numStr = num.toString();
    // Initialize an empty string to store the result
    let result = '';

    // Iterate over each digit in the number
    for (let i = 0; i < numStr.length; i++) {
        // Square the digit and append it to the result string
        result += Math.pow(parseInt(numStr[i], 10), 2);
    }

    // Convert the result string back to an integer and return it
    return parseInt(result, 10);
}

// Test cases
console.log(squareDigits(912419)); // Output: 811181
console.log(squareDigits(765));  // Output: 493625
