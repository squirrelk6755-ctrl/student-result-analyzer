# Student Result Analyzer

A web-based application built using HTML, CSS, and JavaScript to analyze student academic results. The application supports subject-wise evaluation, grading, ranking, and persistent data storage.

---

## Features

- Add subjects dynamically with subject name and marks  
- Subject-wise pass/fail evaluation  
- Highlight failed subjects in red  
- Overall result calculation (Total, Percentage, Grade, Pass/Fail)  
- Student ranking based on total marks  
- Stores all student records using browser localStorage  
- Displays results in structured table format  

---

## Technologies Used

- HTML5  
- CSS3  
- JavaScript (Vanilla JS)  
- Browser localStorage  
- GitHub Pages  

---

## Live Demo

https://squirrelk6755-ctrl.github.io/student-result-analyzer/

---

## Project Structure
student-result-analyzer/
│── index.html
│── style.css
│── script.js
│── README.md


---

## Application Logic

- Each subject requires a minimum of 40 marks to pass  
- If any subject is failed, the overall result is marked as FAIL  
- In case of failure, the grade is overridden to F  
- Student ranks are calculated based on total marks  

---

## How to Run Locally

1. Clone or download the repository  
2. Open `index.html` in any modern web browser  
3. Enter student details and analyze results  

---

