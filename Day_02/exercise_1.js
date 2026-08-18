let firstName="Jale"
let lastName="Qocayeva"
let country="Azerbaijan"
let city="Qabala";
let age=20;
let isMarried=False;
let year=2026;


console.log(typeof firstName); // string
console.log(typeof lastName);  // string
console.log(typeof country);   // string
console.log(typeof city);      // string
console.log(typeof age);       // number
console.log(typeof isMarried); // boolean
console.log(typeof year);      // number

console.log(typeof '10' === typeof 10); // false
console.log(parseInt('9.8') === 10); // false (parseInt('9.8') -> 9 verir)
let isTrue1 = 4 > 2;
let isTrue2 = 'Salam'; 
let isTrue3 = 10;    
let isFalse1 = 0;
let isFalse2 = ''; 
let isFalse3 = null;
console.log(4 > 3);     // true
console.log(4 >= 3);    // true
console.log(4 < 3);     // false
console.log(4 <= 3);    // false
console.log(4 == 4);    // true
console.log(4 === 4);   // true
console.log(4 != 4);    // false
console.log(4 !== 4);   // false
console.log(4 != '4');  // false (tipləri çevirib müqayisə edir)
console.log(4 == '4');  // true  (tipləri çevirib müqayisə edir)
console.log(4 === '4'); // false (tiplər fərqlidir: number və string)
let lang1 = 'python';
let lang2 = 'jargon';

console.log(lang1.length); // 6
console.log(lang2.length); // 6

// Yanlış (falsy) müqayisə ifadəsi:
console.log(lang1.length !== lang2.length); // false
console.log(4 > 3 && 10 < 12);   // true
console.log(4 > 3 && 10 > 12);   // false
console.log(4 > 3 || 10 < 12);   // true
console.log(4 > 3 || 10 > 12);   // true
console.log(!(4 > 3));           // false
console.log(!(4 < 3));           // true
console.log(!(false));           // true
console.log(!(4 > 3 && 10 < 12)); // false
console.log(!(4 > 3 && 10 > 12)); // true
console.log(!(4 === '4'));       // true
let word1 = 'dragon';
let word2 = 'python';

let check = !(word1.includes('on') && word2.includes('on'));
console.log(check); // false (çünki hər ikisində 'on' var)

const now = new Date();

console.log(now.getFullYear()); // İndi hansı ildəyik?
console.log(now.getMonth() + 1); // Ayın nömrəsi (0-11 arası olduğu üçün +1 edirik)
console.log(now.getDate());     // Bu gün ayın neçəsidir?
console.log(now.getDay());      // Həftənin neçənci günüdür? (0: Bazar, 1: B.ertəsi...)
console.log(now.getHours());    // Saat neçədir?
console.log(now.getMinutes());  // Dəqiqə neçədir?
console.log(Math.floor(now.getTime() / 1000)); // 1 Yanvar 1970-dən bəri keçən saniyələrin sayı



