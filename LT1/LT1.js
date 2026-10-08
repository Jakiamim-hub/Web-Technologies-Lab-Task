let name = prompt("Enter Student Name:");
let age = parseInt(prompt("Enter Student Age:"));
let cgpa = parseFloat(prompt("Enter Student CGPA:"));
let status = prompt("Enter Student Status:");
let grade = prompt("Enter Student Grade:");

document.write("<h2>Student Information</h2>");
document.write("Name: " + name + "<br>");
document.write("Age: " + age + "<br>");
document.write("CGPA: " + cgpa + "<br>");
document.write("Status: " + status + "<br>");
document.write("Grade: " + grade + "<br>");

let courses = ["Web Technology", "OOP", "Database"];

document.write("<h2>Course List</h2>");

for (let i = 0; i < courses.length; i++) {
    document.write(courses[i] + "<br>");
}

let marks = parseInt(prompt("Enter Student Marks:"));

let result;

if (marks >= 80) {
    result = "A+";
}
else if (marks >= 70) {
    result = "A";
}
else if (marks >= 60) {
    result = "B";
}
else {
    result = "F";
}

document.write("<h2>Result</h2>");
document.write("Marks: " + marks + "<br>");
document.write("Result Grade: " + result + "<br>");

function showStudent(name, age) {
    document.write("<h2>Student Details</h2>");
    document.write("Name: " + name + "<br>");
    document.write("Age: " + age + "<br>");
}

showStudent(name, age);

let students = [];

for (let i = 0; i < 3; i++) {
    let studentName = prompt("Enter Student " + (i + 1) + " Name:");
    students.push(studentName);
}

document.write("<h2>Three Students Names</h2>");

for (let i = 0; i < students.length; i++) {
    document.write(students[i] + "<br>");
}
