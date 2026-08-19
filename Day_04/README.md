# Day 4: Conditionals - Exercises & Solutions

This repository contains the solutions for Day 4 exercises focusing on JavaScript conditional statements (`if`, `else`, `else if`, `switch`, and ternary operators).

---

## Exercises: Level 1

### 1. Driving Age Check
```javascript
let age = Number(prompt("Enter your age:"));

if (age >= 18) {
  console.log("You are old enough to drive.");
} else {
  let yearsLeft = 18 - age;
  console.log(`You are left with ${yearsLeft} years to drive.`);
}
