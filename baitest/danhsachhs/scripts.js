document.addEventListener("DOMContentLoaded", () => {
  const studentForm = document.getElementById("studentForm");
  const studentTable = document.getElementById("studentTable").getElementsByTagName("tbody")[0];
  const addButton = document.getElementById("addButton");
  const updateButton = document.getElementById("updateButton");
  let editingIndex = -1;
  let students = JSON.parse(localStorage.getItem("students")) || [];

  loadStudents();

  studentForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const id = parseInt(document.getElementById("id").value);
    const name = document.getElementById("name").value;
    const birthYear = parseInt(document.getElementById("birthYear").value);
    const gender = document.getElementById("gender").value;

    console.log("Form submitted with values:", { id, name, birthYear, gender });

    if (addButton.style.display !== "none") {
      addStudent(id, name, birthYear, gender);
    } else {
      updateStudent(id, name, birthYear, gender);
    }
  });

  function loadStudents() {
    console.log("Loading students...");
    studentTable.innerHTML = "";
    students.forEach((student, index) => {
      const row = studentTable.insertRow();
      row.innerHTML = `
        <td>${student.id}</td>
        <td>${student.name}</td>
        <td>${student.birthYear}</td>
        <td>${student.gender}</td>
        <td>
          <button onclick="editStudent(${student.id})">Sửa</button>
          <button onclick="deleteStudent(${index})">Xóa</button>
        </td>
      `;
    });
    console.log("Danh sách SV:", students);
  }

  function addStudent(id, name, birthYear, gender) {
    console.log("Thêm SV...", { id, name, birthYear, gender });
    if (students.some((student) => student.id === id)) {
      alert("ID đã tồn tại.");
      console.log("Lỗi khi thêm,id đã tồn tại");
      return;
    }
    students.push({ id, name, birthYear, gender });
    localStorage.setItem("students", JSON.stringify(students));
    studentForm.reset();
    loadStudents();
    console.log("Thêm thành công.");
  }

  function editStudent(id) {
    console.log("Sửa SV có id:", id);
    const student = students.find(student => student.id === id);
    if (student) {
      document.getElementById("id").value = student.id;
      document.getElementById("name").value = student.name;
      document.getElementById("birthYear").value = student.birthYear;
      document.getElementById("gender").value = student.gender;
      addButton.style.display = "none";
      updateButton.style.display = "block";
      editingIndex = students.indexOf(student);
      console.log("Sinh viên sửa:", student);
    } else {
      console.log("Không tìm thấy SV có id :", id);
    }
  }

  function updateStudent(id, name, birthYear, gender) {
    console.log("Sửa SV...", { id, name, birthYear, gender });
    const studentIndex = students.findIndex(student => student.id === id);
    if (studentIndex !== -1) {
      students[studentIndex] = { id, name, birthYear, gender };
      localStorage.setItem("students", JSON.stringify(students));
      studentForm.reset();
      addButton.style.display = "block";
      updateButton.style.display = "none";
      loadStudents();
      console.log("Sửa thành công.");
    } else {
      console.log("Lỗi, không tìm thấy SV");
    }
}


  function deleteStudent(index) {
    console.log("Xóa SV với id:", index);
    if (confirm("Bạn có chắc chắn muốn xóa học sinh này không?")) {
      students.splice(index, 1);
      localStorage.setItem("students", JSON.stringify(students));
      loadStudents();
      console.log("Xóa thành công.");
    } else {
      console.log("Hủy xóa.");
    }
  }

  window.editStudent = editStudent;
  window.deleteStudent = deleteStudent;
});
