"use strict";
//Question 10
// Insert the elements "pineapple" and "pear" at index 2 of the
// fruits array using the method.
Object.defineProperty(exports, "__esModule", { value: true });
// Answer 
let fruits = ["apple", "mango", "banana", "grapes", "kiwi"];
fruits.splice(2, 0, "pineapple", "pear");
console.log(fruits);
