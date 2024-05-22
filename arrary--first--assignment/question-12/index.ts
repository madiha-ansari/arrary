//Question 12
// Create a new array named lastTwoFruits that contains the last
// two elements of the fruits array using the method.

// Answer 
let Fruits:string[] = ["apple","mango","kiwi","pineapple","banana"];
let lastTwoFruits:string[]=Fruits.splice(3,4);
console.log(lastTwoFruits);