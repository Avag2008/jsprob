
// ________________________________Task1_____________________________________

// Create a function that takes the age in years and returns the age in days.
// Examples
// calcAge(65) ➞ 23725

// calcAge(0) ➞ 0

// calcAge(20) ➞ 7300
// Notes
// Use 365 days as the length of a year for this challenge.
// Ignore leap years and days between last birthday and now.
// Expect only positive integer inputs.

let p = 65
let a = 20
function calcAge() {
    console.log(p * 365)
    console.log(a * 365)
}
calcAge()



// _____________________________Task2________________________________________

// You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored, find the final points for the team and return that value.
// Examples
// points(1, 1) ➞ 5

// points(7, 5) ➞ 29

// points(38, 8) ➞ 100

let twoPoints = 1
let threePoints = 1
function basketball() {
    console.log(2 * twoPoints + 3 * threePoints);
}

basketball()
// ____________________________Task3__________________________________________
// Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.

let num1 = 20
let num2 = 40
if (num1 + num2 >= 100) {
    console.log(true);
} else {
    console.log(false);
}

// ___________________________Task4___________________________________

// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
let num = 4

function Factorial(num) {
    if (num == 1) {
        return 1;
    } else {
        return num + Factorial(num - 1);
    }
}

console.log(Factorial(num));

// _______________________Task5_____________________________________


//You will be given an array of drinks, with each drink being an object with two properties: name and price. Create a function that has the drinks array as an argument and return the drinks objects sorted by price in ascending order.
// Assume that the following array of drink objects needs to be sorted:
function sortDrinksByPrice(drinks) {
    const sortedDrinks = drinks.slice().sort((a, b) => a.price - b.price);
    return sortedDrinks;
}

let drinks = [
    { name: "lemonade", price: 50 },
    { name: "lime", price: 10 },
    { name: "pepsi", price: 100 },
    { name: "cola", price: 163 },
];

console.log(sortDrinksByPrice(drinks));
