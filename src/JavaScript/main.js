// Initial students
let students = [
  { name: "Ratanak Saren", grade: "A" },
  { name: "Sim Sol", grade: "A" },
];
let filtered = [];

function renderStudents(list) {
  const container = document.getElementById("studentList");

  container.innerHTML = list
    .map(
      (student, index) => `
        <article class="border-l-4 border-blue-500 p-4 bg-gray-50 rounded shadow" aria-label="Student ${
          index + 1
        }">
          <p class="font-bold">${index + 1}. ${student.name}</p>
          <p class="text-sm text-gray-600">Grade: ${student.grade}</p>
        </article>
      `
    )
    .join("");

  document.getElementById(
    "totalCount"
  ).textContent = `Total Students: ${list.length}`;
}

function addStudent() {
  let name = document.getElementById("nameInput").value;
  let grade = document.getElementById("gradeInput").value.toUpperCase();

  let validGrades = ["A", "B", "C", "D", "F"];
  let nameHasNumber = /\d/.test(name);

  // Check for duplicates name
  let isDuplicate = students.some(
    (student) => student.name.toLowerCase() === name.toLowerCase()
  );

  if (!name || !grade) {
    alert("Please fill in both the student name and grade.");
    return;
  }

  if (nameHasNumber) {
    alert("Invalid name. Student name should not contain numbers.");
    return;
  }

  if (!validGrades.includes(grade)) {
    alert("Invalid grade. Please enter only A, B, C, D, or F.");
    return;
  }

  if (isDuplicate) {
    alert("A student with this name already exists.");
    return;
  }

  students.push({ name, grade });
  document.getElementById("nameInput").value = "";
  document.getElementById("gradeInput").value = "";
  renderStudents(students);
}

function filterStudents() {
  let grade = document.getElementById("filterInput").value.toUpperCase();
  let validGrades = ["A", "B", "C", "D", "F"];

  if (!validGrades.includes(grade)) {
    alert("Invalid filter grade. Use A, B, C, D, or F.");
    return;
  }

  filtered = students.filter((s) => s.grade === grade);
  renderStudents(filtered);
}

function resetFilter() {
  document.getElementById("filterInput").value = "";
  renderStudents(students);
}

//Display initial students
renderStudents(students);
