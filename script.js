// 🔹 Arrow Function คำนวณ BMI
const calculateBMI = (weight, heightCm) => {
    const heightM = heightCm / 100;   // แปลง cm → m
    return weight / (heightM * heightM);
};

// 🔹 Arrow Function จัดกลุ่มผลลัพธ์
const getBMICategory = (bmi) => {
    if (bmi < 18.5) {
        return "ผอม";
    } else if (bmi <= 24.9) {
        return "สมส่วน";
    } else {
        return "อ้วน";
    }
};

// 🔹 ฟังก์ชันควบคุมปุ่ม
const handleBMI = () => {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);

    if (!weight || !height) {
        document.getElementById("result").textContent =
            "กรุณากรอกข้อมูลให้ครบก่อนนะ";
        return;
    }

    const bmi = calculateBMI(weight, height);
    const category = getBMICategory(bmi);

    document.getElementById("result").textContent =
        `ค่า BMI ของคุณคือ ${bmi.toFixed(2)} → ${category}`;
};