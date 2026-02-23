// 🔹 1️⃣ Arrow Function คำนวณ BMI
const calculateBMI = (weight, heightCm) => {
    const heightM = heightCm / 100;
    return weight / (heightM * heightM);
};

// 🔹 2️⃣ Arrow Function ทักทายตามอายุ
const greetUser = (name, age) => {
    if (age <= 12) {
        return `สวัสดีเด็กน้อย ${name} `;
    } else if (age <= 19) {
        return `หวัดดีวัยรุ่น ${name} `;
    } else {
        return `สวัสดีคุณ ${name} `;
    }
};

// 🔹 3️⃣ Arrow Function ตรวจสอบรหัสผ่าน
const checkPassword = password => password.length > 8;


// ===== ฟังก์ชันควบคุมปุ่ม =====

const handleBMI = () => {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);

    if (!weight || !height) {
        document.getElementById("output").textContent =
            "กรุณากรอกข้อมูลให้ครบก่อน ";
        return;
    }

    const bmi = calculateBMI(weight, height);

    document.getElementById("output").textContent =
        `ค่า BMI ของคุณคือ: ${bmi.toFixed(2)}`;
};


const handleGreeting = () => {
    const name = document.getElementById("name").value;
    const age = parseInt(document.getElementById("age").value);

    document.getElementById("output").textContent =
        greetUser(name, age);
};


const handlePassword = () => {
    const password = document.getElementById("password").value;

    document.getElementById("output").textContent =
        checkPassword(password)
            ? "รหัสผ่านปลอดภัย ✅"
            : "รหัสผ่านต้องมากกว่า 8 ตัวอักษร ❌";
};