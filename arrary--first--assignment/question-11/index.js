"use strict";
// Question 11
// Create a new array named citrusFruits that contains the first
// two elements of the fruits array using the method.
Object.defineProperty(exports, "__esModule", { value: true });
// Answer 
let citrusFruits = ["Apple", "banana", "pineapple", "orange"];
citrusFruits.splice(0, 2);
console.log(citrusFruits);
