// 1. Calculating the difference between two arguments
function calculateDifference(num1, num2) {
    return num1 - num2;
}

// 2. Checking if a number is odd
function isOdd(number) {
    return number % 2 !== 0;
}

// 3. Finding the minimum number in an array
function findMin(arr) {
    return Math.min(...arr);
}

// 4. Filtering even numbers from an array
function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}

// 5. Sorting an array in descending order
function sortArrayDescending(arr) {
    return arr.sort((a, b) => b - a);
}

// 6. Lowercasing the first letter of a string
function lowercaseFirstLetter(str) {
    if (!str) return str;
    return str.charAt(0).toLowerCase() + str.slice(1);
}

// 7. Counting vowels in a string
function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    return str.split('').filter(char => vowels.includes(char)).length;
}

// 8. Calculating the average of an array
function findAverage(arr) {
    if (arr.length === 0) return 0;
    const sum = arr.reduce((acc, curr) => acc + curr, 0);
    return sum / arr.length;
}

// Outputs
console.log("Difference:", calculateDifference(10, 2));            
console.log("Is 7 Odd?:", isOdd(7));                               
console.log("Minimum value:", findMin([10, 5, 3, 7]));             
console.log("Even numbers:", filterEvenNumbers([1, 2, 3, 4, 5]));  
console.log("Sorted Descending:", sortArrayDescending([3, 1, 4, 2])); 
console.log("Lowercased first letter:", lowercaseFirstLetter("Hasib")); 
console.log("Vowel count:", countVowels("Hasibul"));           
console.log("Average:", findAverage([10, 20, 30, 40]));            
