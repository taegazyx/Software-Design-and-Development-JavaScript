// ประกาศตัวแปร
const studentId = "68030033";
const studentName = "จักรกฤษณ์";
let midtermScore = 25;
let finalScore = 30;

// สร้าง Object เก็บข้อมูลนักศึกษา
const student = {
    id: studentId,
    name: studentName,
    major: "เทคโนโลยีคอมพิวเตอร์",
    gpa: 3.62,
    scores: {
        midterm: midtermScore,
        final: finalScore
    }
};

// ฟังก์ชันแสดงผลบนหน้าเว็บ
function showStudentData() {
    let text = `
รหัสนักศึกษา: ${student.id}
ชื่อ: ${student.name}
สาขาวิชา: ${student.major}
เกรดเฉลี่ย: ${student.gpa}
คะแนนกลางภาค: ${student.scores.midterm}
คะแนนปลายภาค: ${student.scores.final}
    `;

    document.getElementById("output").textContent = text;
    document.body.style.fontSize = "22px";
}