let loveStr = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
let loveMatches = loveStr.match(/love/gi);
console.log(loveMatches ? loveMatches.length : 0);
let becauseMatches = sentence2.match(/because/g);
console.log(becauseMatches ? becauseMatches.length : 0);
const dirtySentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';
let cleanSentence = dirtySentence.replace(/[%$@&#;!?.]/g, '');
let words = cleanSentence.split(' ');
let wordCounts = {};
let maxCount = 0;
let mostFrequentWord = '';
words.forEach(word => {
  if (word) {
    wordCounts[word] = (wordCounts[word] || 0) + 1;
    if (wordCounts[word] > maxCount) {
      maxCount = wordCounts[word];
      mostFrequentWord = word;
    }
  }
});
console.log(`Ən çox təkrarlanan söz: "${mostFrequentWord}" (${maxCount} dəfə)`);
let textIncome = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
let numbers = textIncome.match(/\d+/g).map(Number); // [5000, 10000, 15000]

let monthlySalary = numbers[0];
let annualBonus = numbers[1];
let monthlyCourse = numbers[2];
let totalAnnualIncome = (monthlySalary * 12) + annualBonus + (monthlyCourse * 12);
console.log('İllik ümumi gəlir:', totalAnnualIncome, 'euro');
