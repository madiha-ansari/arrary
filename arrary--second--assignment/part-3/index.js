"use strict";
/*  Part 3: Array with Types and Indexing - Employee Salaries
Challenge:
You are managing employee salaries for a company. Implement logic to calculate salaries and
handle bonuses.
1. Define a type alias named Employee with the following properties:
• name (string): The name of the employee.
• hoursWorked (number): The number of hours the employee worked.
• hourlyRate (number): The hourly rate of the employee.
• salary (number): The base salary of the employee.
2. Define an array named employees containing employee objects. Each employee
object should include a name, hoursWorked, hourlyRate, and salary.
3. Implement a function named calculateSalary that calculates the salary for each
employee based on the hours worked and hourly rate.
4. If an employee has worked 20 hours or more, apply a 10% bonus to their salary */
Object.defineProperty(exports, "__esModule", { value: true });
let employees = [
    {
        name: "Employee1",
        hoursWorked: 15,
        hourlyRate: 18,
        salary: 0
    },
    {
        name: "Employee2",
        hoursWorked: 20,
        hourlyRate: 25,
        salary: 0
    },
    {
        name: "Employee3",
        hoursWorked: 22,
        hourlyRate: 28,
        salary: 0
    },
];
function calculateSalary(employee) {
    let employeeSalary = employee.hoursWorked * employee.hourlyRate;
    if (employee.hoursWorked >= 20) {
        employeeSalary *= 1.1;
    }
    return employeeSalary;
}
employees.forEach(employees => {
    employees.salary = calculateSalary(employees);
});
console.log("\n \t \t ***Employee Salaries*** \n");
console.log(employees);
// _________________________________________________
// ENDING COADING 
// _________________________________________________
