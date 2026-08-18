let firstName = 'Jale';
let lastName = 'Qocayeva';
let country = 'Azerbaijan';
let city = 'Qabala';
let age = 20;
let isMarried = false;
let year = 2026;

console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);

console.log(typeof '10' === typeof 10);

console.log(parseInt('9.8') === 10);

console.log(Boolean(1));
console.log(Boolean('text'));
console.log(Boolean(true));

console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(null));

console.log(4 > 3);
console.log(4 >= 3);
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 == 4);
console.log(4 === 4);
console.log(4 != 4);
console.log(4 !== 4);
console.log(4 != '4');
console.log(4 == '4');
console.log(4 === '4');

let word1 = 'python';
let word2 = 'jargon';
console.log(word1.length !== word2.length);

console.log(4 > 3 && 10 < 12);
console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 > 12);
console.log(!(4 > 3));
console.log(!(4 < 3));
console.log(!(false));
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12));
console.log(!(4 === '4'));

let str1 = 'dragon';
let str2 = 'python';
console.log(!(str1.includes('on') && str2.includes('on')));

const now = new Date();
console.log(now.getFullYear());
console.log(now.getMonth() + 1);
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(Math.floor(now.getTime() / 1000));
