// You have:
// ₦100,000
// You receive:
// ₦50,000
// Then you spend:
// ₦30,000
// Create a program that calculates your final balance.

const initialBalance = 100000;
const recieved = 50000;
const spent = 30000;
const finalBalance = initialBalance + recieved - spent;
console.log("Initial Balance:", initialBalance);
console.log("Money Received:", recieved);
console.log("Money Spent:", spent);
console.log("Final Balance:", finalBalance);
