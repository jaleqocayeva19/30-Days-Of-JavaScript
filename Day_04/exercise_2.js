let score=Number(prompt("Enter your score"));
if (score>90 && score<=100) {
	console.log("Your grade A");
} else if  (score>80 && score<=90) {
	console.log("Your grade B")
} else if (score>60 && score score<=80) {
	console.log("Your grade C");
} else if (score>50 && score>=60) {
	console.log("Your grade is D");
} else if (score=>0 && score<=50) {
	console.log("Your grade is F");
} else {
	console.log("Score is incorret");
}


let monthInput=prompt("Enter month's name: ");
let month= monthInput.toLowerCase();

if (month==="september" || month==="october" || month==="november") {
	console.log("Season is Autumn");
} else if (month==="december" || month==='january' || month==='february') {
	console.log("Season is Winter");
} else if (month==='march' || month==='april' || month==='may') {
	console.log('Season is Spring');
} else if (month==='june' || month==='july' || month==='august') {
	console.log('Season is Summer');
} else { 
	console.log('You enter incorrect thing');
} 

let week=prompt("Enter day's name: ");
let weekday=week.toLowerCase();
if (weekday==='monday' || weekday==='tuesday' || weekday==='wendesday' || weekday==='thursday' || weekday==='friday') {
	console.log('It is work day');
else if (weekday==='saturday' || weekday==='sunday') {
	console.log(`${weekday} is weekend`)
} else {
	console.log("please enter coorect day's name")}


