// Question 3: Comparison Operators (20 Marks)

// Using the following values:

// let x = 15;
// let y = 10;

// Use comparison operators to check and display the results of:

// 1. Is x greater than y?
// 2. Is x less than y?
// 3. Is x equal to y?
// 4. Is x greater than or equal to y?
// 5. Is x not equal to y?

// Also, compare the following expressions and explain the difference between their results:

// console.log(5 == "5");
// console.log(5 === "5");

let x = 15;
let y = 10;

console.log("Is x greater than y? ", x > y);
console.log("Is x less than y? ", x < y);
console.log("Is x equal to y? ", x == y);
console.log("Is x greater than or equal to y? ", x >= y);
console.log("Is x not equal to y? ", x != y);

console.log(5 == "5");
// true, because == checks for value equality without considering the data type.
console.log(5 === "5");
// false, because === checks for both value and data type equality, and here one is a number and the other is a string.
