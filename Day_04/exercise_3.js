let monthInput = prompt("Enter a month:");
let yearInput = prompt("Enter a year:");

let month = monthInput.toLowerCase();
let year = Number(yearInput);

let isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

switch (month) {
  case 'january':
  case 'march':
  case 'may':
  case 'july':
  case 'august':
  case 'october':
  case 'december':
    console.log(`${monthInput} has 31 days.`);
    break;
  case 'april':
  case 'june':
  case 'september':
  case 'november':
    console.log(`${monthInput} has 30 days.`);
    break;
  case 'february':
    if (isLeapYear) {
      console.log(`${monthInput} has 29 days.`);
    } else {
      console.log(`${monthInput} has 28 days.`);
    }
    break;
  default:
    console.log("Invalid month entered!");
}
