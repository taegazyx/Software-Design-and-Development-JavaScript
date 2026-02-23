// 1️⃣ ตรวจสอบเลขคู่หรือคี่
function checkEvenOdd() {
    let number = 7;

    let result = "";

    if (number % 2 === 0) {
        result = number + " เป็นเลขคู่";
    } else {
        result = number + " เป็นเลขคี่";
    }

    document.getElementById("output").textContent = result;
}


// 2️⃣ สูตรคูณแม่ 2 (for) และแม่ 3 (while)
function showMultiplication() {

    let result = "สูตรคูณแม่ 2 (for loop)\n";

    for (let i = 1; i <= 12; i++) {
        result += `2 x ${i} = ${2 * i}\n`;
    }

    result += "\nสูตรคูณแม่ 3 (while loop)\n";

    let j = 1;
    while (j <= 12) {
        result += `3 x ${j} = ${3 * j}\n`;
        j++;
    }

    document.getElementById("output").textContent = result;
}


// 3️⃣ นับถอยหลังจาก 10 ถึง 1
function countdown() {

    let result = "นับถอยหลัง\n";

    for (let i = 10; i >= 1; i--) {
        result += i + "\n";
    }

    document.getElementById("output").textContent = result;
}


// 4️⃣ ตรวจสอบช่วงวัย
function checkAge() {

    let age = 20;
    let result = "";

    if (age <= 12) {
        result = "อายุ " + age + " ปี → วัยเด็ก";
    } else if (age <= 19) {
        result = "อายุ " + age + " ปี → วัยรุ่น";
    } else {
        result = "อายุ " + age + " ปี → วัยผู้ใหญ่";
    }

    document.getElementById("output").textContent = result;
}