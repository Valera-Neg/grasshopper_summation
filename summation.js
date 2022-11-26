/*
Summation
Write a program that finds the summation of every 
number from 1 to num. The number will always be a 
positive integer greater than 0.

For example:

summation(2) -> 3
1 + 2

summation(8) -> 36
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8
*/
const summation = (num) => {
  return Array.from({length: num}, (v, k) => k+1).reduce((a,b) => a+b, 0);
  
}

console.log(summation(1)) //> 1
console.log(summation(2)) //> 3
console.log(summation(8)) //> 36