// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 
// Example Input: "hello world" Example Output: "dlrow olleh"

function reverseString(inputStr) {
  let reversedStr = "";
  for (let i = inputStr.length - 1; i >= 0; i--) {
    reversedStr += inputStr[i];
  }
  return reversedStr;
}

console.log(reverseString("hello world")); // Output: "dlrow olleh"


// Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 
// Example Input: [2, -5, 10, -3, 7] Example Output: 19

function sumOfPositiveNumbers(num) {
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
      if (num[i] > 0) {
        sum += num[i];
      }
    }
    return sum;
  }
  
console.log(sumOfPositiveNumbers([2, -5, 10, -3, 7])); // Output: 19


// Task 3: Write a JavaScript program to find the most frequent element in an array and return it. 
// Example Input: [3, 5, 2, 5, 3, 3, 1, 4, 5] Example Output: 3


function findMostFrequentElement(arr) {

    const frequencyCounter = {};
    let maxFrequency = 0;
    let mostFrequentElement;
  
    arr.forEach((element) => {
      frequencyCounter[element] = (frequencyCounter[element] || 0) + 1;
      if (frequencyCounter[element] > maxFrequency) {
        maxFrequency = frequencyCounter[element];
        mostFrequentElement = element;
      }
    });
  
    return mostFrequentElement;
  }

console.log(findMostFrequentElement([3, 5, 2, 5, 3, 3, 1, 4, 5])); // Output: 3
  

// Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.
//  Example Input: ([1, 3, 6, 8, 11, 15], 9) Example Output: [1, 2] (numbers at indices 1 and 2: 3 + 6 = 9)


function findTwoSum(num, target) {

    var hash = {};
    for (var i = 0; i < num.length; i++) {
      var complement = target - num[i];
      if (hash[complement] !== undefined) {
        return [hash[complement], i];
      }
      hash[num[i]] = i;
    }
  
    return [];
  }
  

console.log(findTwoSum([1, 3, 6, 8, 11, 15], 9)); // Output: [1, 2]
  

// Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.

  function calculate(num1, operator, num2) {
    const operators = ['+', '-', '*', '/'];

    if (!operators.includes(operator)) {
      return "Error: Invalid operator!";
    }
 
  return eval(`${num1} ${operator} ${num2}`);

  }
  
console.log(calculate(5, '+', 3)); // Output: 8
 

// Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.

  function generatePassword(length) {

    const allCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:,.<>?';
    let password = '';

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * allCharacters.length);
      password += allCharacters[randomIndex];
    }
  
    return password;
  }
  
console.log( generatePassword(12));


// Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.

  function romanToInt(romanNum) {

    const numeralsMap = {'I': 1,'V': 5,'X': 10,'L': 50,'C': 100,'D': 500,'M': 1000 };
    let result = 0;

  for (let i = 0; i < romanNum.length; i++) {
    const currentValue = numeralsMap[romanNum[i]];
    const nextValue = numeralsMap[romanNum[i + 1]];
    if (nextValue > currentValue) {
      result += nextValue - currentValue;
      i++; 
    } else {
      result += currentValue;
    }
  }
  return result;
  }

console.log(romanToInt("XXI")); // Output: 21

// Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.

  function findSecondSmallest(arr) {
    let sortedArr = arr.sort((a, b) => a - b);
    return sortedArr[1];
  }
  
console.log(findSecondSmallest([5, 2, 1, 8, 6, 3, 9, 4, 7])); // Output: 2
  