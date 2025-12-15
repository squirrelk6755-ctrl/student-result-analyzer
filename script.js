let students = JSON.parse(localStorage.getItem("students")) || [];

function addSubject() {
  const div = document.createElement("div");
  div.className = "subject";
  div.innerHTML = `
    <input type="text" class="subName" placeholder="Subject Name">
    <input type="number" class="mark" placeholder="Marks">
  `;
  document.getElementById("subjects").appendChild(div);
}

function analyzeResult() {
  const name = document.getElementById("studentName").value.trim();
  const subjects = document.querySelectorAll(".subject");

  if (!name) {
    alert("Enter student name");
    return;
  }

  let total = 0;
  let failed = false;
  let subjectRows = "";

  subjects.forEach((sub) => {
    const subName = sub.querySelector(".subName").value;
    const marks = Number(sub.querySelector(".mark").value);

    let status = "PASS";
    let rowClass = "";

    if (!subName || isNaN(marks) || marks < 40) {
      status = "FAIL";
      rowClass = "fail";
      failed = true;
    }

    total += marks;

    subjectRows += `
      <tr class="${rowClass}">
        <td>${subName}</td>
        <td>${marks}</td>
        <td>${status}</td>
      </tr>
    `;
  });

  const percentage = (total / (subjects.length * 100)) * 100;

  let grade;
  if (failed) grade = "F";
  else if (percentage >= 75) grade = "A";
  else if (percentage >= 60) grade = "B";
  else if (percentage >= 40) grade = "C";
  else grade = "F";

  const status = failed ? "FAIL" : "PASS";

  students.push({ name, total, percentage, grade, status });
  students.sort((a, b) => b.total - a.total);
  localStorage.setItem("students", JSON.stringify(students));

  showResult(name, subjectRows, total, percentage, grade, status);
  renderAllResults();
}

function showResult(name, subjectRows, total, percentage, grade, status) {
  document.getElementById("resultTable").innerHTML = `
    <tr>
      <th>Subject</th>
      <th>Marks</th>
      <th>Status</th>
    </tr>
    ${subjectRows}
    <tr><td>Total</td><td colspan="2">${total}</td></tr>
    <tr><td>Percentage</td><td colspan="2">${percentage.toFixed(2)}%</td></tr>
    <tr><td>Grade</td><td colspan="2">${grade}</td></tr>
    <tr><td>Result</td><td colspan="2">${status}</td></tr>
  `;
}

function renderAllResults() {
  const table = document.getElementById("allResults");
  table.innerHTML = "";

  students.forEach((s, index) => {
    table.innerHTML += `
      <tr>
        <td>${s.name}</td>
        <td>${s.total}</td>
        <td>${s.percentage.toFixed(2)}%</td>
        <td>${s.grade}</td>
        <td>${s.status}</td>
        <td>${index + 1}</td>
      </tr>
    `;
  });
}

renderAllResults();
