console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.")
console.log(`"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."`))
console.log(typeof '10' === typeof 10);
let num1 = Number('10');
console.log(typeof num1 === typeof 10);
console.log(parseFloat('9.8') === 10);
let num2 = Math.round(parseFloat('9.8'));
console.log(num2 === 10);
console.log('python'.includes('on') && 'jargon'.includes('on'));
let jargonSentence = 'I hope this course is not full of jargon.';
console.log(jargonSentence.includes('jargon'));
let random0to100 = Math.floor(Math.random() * 101);
console.log(random0to100);
let random50to100 = Math.floor(Math.random() * 51) + 50;
console.log(random50to100);
let random0to255 = Math.floor(Math.random() * 256);
console.log(random0to255);
let jsStr = 'JavaScript';
let randomIndex = Math.floor(Math.random() * jsStr.length);
console.log(jsStr[randomIndex]);
console.log("1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125");
let sentence2 = 'You cannot end a sentence with because because because is a conjunction';
console.log(sentence2.substring(31, 54));
