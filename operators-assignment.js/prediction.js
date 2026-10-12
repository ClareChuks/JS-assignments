// Question 6: Predict the Output (20 Marks)

// Without running the code first, write down what you think each statement will display. Then run the code in Node.js to check your answers.

// console.log(10 + 5 * 2);
// console.log((10 + 5) * 2);
// console.log(20 % 3);
// console.log(2 ** 4);
// console.log(10 > 5 && 5 < 2);
// console.log(10 > 5 || 5 < 2);
// console.log(!(10 > 5));
// console.log(10 != "10");
// console.log(10 !== "10");
// console.log(5 + "5");

// Explain why the outputs are different where necessary.

console.log(10 + 5 * 2); // 20 (multiplication has higher precedence)
console.log((10 + 5) * 2); // 30 (parentheses have highest precedence)
console.log(20 % 3); // 2
console.log(2 ** 4); // 16
console.log(10 > 5 && 5 < 2); // false
console.log(10 > 5 || 5 < 2); // true
console.log(!(10 > 5)); // false (10 > 5)
console.log(10 != "10"); // false
console.log(10 !== "10"); // true
console.log(5 + "5"); // "55" (5 is a number, "5" is a string, so they are concatenated)
