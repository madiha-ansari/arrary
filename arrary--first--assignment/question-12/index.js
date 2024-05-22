"use strict";
//Question 12
//Create a new array named lastTwoFruits that contains the last
//two elements of the fruits array using the method.
Object.defineProperty(exports, "__esModule", { value: true });
// Answer 
let Fruits = ["apple", "mango", "kiwi", "pineapple", "banana"];
let lastTwoFruits = Fruits.splice(3, 4);
console.log(lastTwoFruits);
