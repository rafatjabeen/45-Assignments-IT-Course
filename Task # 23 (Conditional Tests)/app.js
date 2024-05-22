"use strict";
// 23) Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
let car = 'subaro';
console.log("\n----> 5 tests evaluate to true :");
// Test 1 :
console.log("Is car == 'subaro ? I predict true.");
console.log(car === 'subaro');
// Test 2 :
console.log("Is car != 'Toyota' ? I predict true");
console.log(car !== 'Toyota');
// Test 3 :
console.log("Is the length of car > 4? I predict true.");
console.log(car.length > 4);
// Teast 4 :
console.log("Is the length of car <= 6 ? I predict true.");
console.log(car.length <= 6);
// Test 5 :
console.log("Does car start with 's'? I predict true. ");
console.log(car.startsWith('s'));
console.log("\n----> 5 tests evaluate to false. :");
// Test 1 :
console.log("Is car == 'Honda' ? I predict false.");
console.log(car === 'Honda');
// Test 2 :
console.log("Is car in upperCase ? I predict false.");
console.log(car.toUpperCase() === car);
// Test 3 :
console.log("Is car === 'Subaro ? I predict false.");
console.log(car === 'Subaro');
//Test 4 :
console.log("Is car == 'Audi ? I predict false.");
console.log(car === 'Audi');
// Test 5 :
console.log("Is the length of car === 7 ? I predict false");
console.log(car.length === 7);
