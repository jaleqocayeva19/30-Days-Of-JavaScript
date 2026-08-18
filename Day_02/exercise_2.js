let base = prompt('Enter base:');
let height = prompt('Enter height:');
let area = 0.5 * Number(base) * Number(height);
console.log(`The area of the triangle is ${area}`);

let a = prompt('Enter side a:');
let b = prompt('Enter side b:');
let c = prompt('Enter side c:');
let perimeter = Number(a) + Number(b) + Number(c);
console.log(`The perimeter of the triangle is ${perimeter}`);

let length = prompt('Enter length:');
let width = prompt('Enter width:');
let rectArea = Number(length) * Number(width);
let rectPerimeter = 2 * (Number(length) + Number(width));
console.log(`Area: ${rectArea}, Perimeter: ${rectPerimeter}`);

let r = prompt('Enter radius:');
const PI = 3.14;
let circleArea = PI * Number(r) * Number(r);
let circumference = 2 * PI * Number(r);
console.log(`Area: ${circleArea}, Circumference: ${circumference}`);

let slope1 = 2;
console.log(`Slope 1: ${slope1}`);

let x1 = 2, y1 = 2;
let x2 = 6, y2 = 10;
let slope2 = (y2 - y1) / (x2 - x1);
console.log(`Slope 2: ${slope2}`);

console.log(slope1 === slope2);

let x = -3;
let y = x ** 2 + 6 * x + 9;
console.log(`When x = ${x}, y = ${y}`);

let hours = prompt('Enter hours:');
let rate = prompt('Enter rate per hour:');
let pay = Number(hours) * Number(rate);
console.log(`Your weekly earning is ${pay}`);

let name = prompt('Enter your name:');
if (name.length > 7) {
  console.log('your name is long');
} else {
  console.log('your name is short');
}

let firstName = 'Asabeneh';
let lastName = 'Yetayeh';
if (firstName.length > lastName.length) {
  console.log(`Your first name, ${firstName} is longer than your family name, ${lastName}`);
}

let myAge = 250;
let yourAge = 25;
console.log(`I am ${myAge - yourAge} years older than you.`);

let birthYear = prompt('Enter birth year:');
let currentYear = new Date().getFullYear();
let age = currentYear - Number(birthYear);
if (age >= 18) {
  console.log(`You are ${age}. You are old enough to drive`);
} else {
  console.log(`You are ${age}. You will be allowed to drive after ${18 - age} years.`);
}

let years = prompt('Enter number of years you live:');
let seconds = Number(years) * 365 * 24 * 60 * 60;
console.log(`You lived ${seconds} seconds.`);

const now = new Date();
let YYYY = now.getFullYear();
let MM = now.getMonth() + 1;
let DD = now.getDate();
let HH = now.getHours();
let mm = now.getMinutes();

console.log(`${YYYY}-${MM}-${DD} ${HH}:${mm}`);
console.log(`${DD}-${MM}-${YYYY} ${HH}:${mm}`);
console.log(`${DD}/${MM}/${YYYY} ${HH}:${mm}`);
