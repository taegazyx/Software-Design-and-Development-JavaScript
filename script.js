// 1️⃣ Function คำนวณ BMI
function calculateBMI(weight, height) {
    return weight / (height * height);
}

// Function จัดกลุ่ม BMI
function getBMICategory(bmi) {
    if (bmi < 18.5) {
        return "ผอมเกินไป  ควรเพิ่มน้ำหนัก";
    } else if (bmi < 24.9) {
        return "ปกติ  สุขภาพดีมาก!";
    } else if (bmi < 29.9) {
        return "น้ำหนักเกิน  ควรควบคุมอาหาร";
    } else {
        return "อ้วน  ควรออกกำลังกายและดูแลสุขภาพ";
    }
}

function handleBMI() {
    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value);

    if (!weight || !height) {
        document.getElementById("output").textContent =
            "กรุณากรอกข้อมูลให้ครบก่อนนะ ";
        return;
    }

    let bmi = calculateBMI(weight, height);
    let category = getBMICategory(bmi);

    document.getElementById("output").textContent =
        `ค่า BMI ของคุณคือ: ${bmi.toFixed(2)}
สถานะ: ${category}`;
}


// 2️⃣ Function ทักทายตามอายุ
function greetUser(name, age) {
    if (age <= 12) {
        return "สวัสดีเด็กน้อย " + name  ;
    } else if (age <= 19) {
        return "หวัดดีวัยรุ่น " + name  ;
    } else {
        return "สวัสดีครับ/ค่ะ คุณ " + name ;
    }
}

function handleGreeting() {
    let name = document.getElementById("name").value;
    let age = parseInt(document.getElementById("age").value);

    let message = greetUser(name, age);

    document.getElementById("output").textContent = message;
}


// 3️⃣ Function ตรวจสอบรหัสผ่าน
function checkPassword(password) {
    return password.length > 8;
}

function handlePassword() {
    let password = document.getElementById("password").value;

    if (checkPassword(password)) {
        document.getElementById("output").textContent =
            "รหัสผ่านปลอดภัย ✅";
    } else {
        document.getElementById("output").textContent =
            "รหัสผ่านต้องยาวมากกว่า 8 ตัวอักษร ❌";
    }
}