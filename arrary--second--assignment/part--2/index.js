"use strict";
/*Part 2: Multi-Dimensional Arrays and Tuples - Student Grades
Challenge:
You are tasked with creating a student grading system. Implement functions and
 logic to manage student grades effectivel*/
Object.defineProperty(exports, "__esModule", { value: true });
let students = [{
        name: "Madiha",
        grades: [80, 79, 89, 85, 80]
    },
    {
        name: "Abeeha",
        grades: [88, 75, 80, 79, 85]
    },
    {
        name: "Bismah",
        grades: [90, 91, 88, 85, 80]
    }
];
function calculateAverageGrade(grades) {
    let sum = grades.reduce((acc, grade) => acc + grade, 0);
    return sum / grades.length;
}
console.log("\n \t \t ***Students Grading System*** \n");
students.forEach(students => {
    let averageGrade = calculateAverageGrade(students.grades);
    console.log(`${students.name} average grade is : ${averageGrade}`);
});
// __________________ending coading___________
