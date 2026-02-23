// ฟังก์ชันคำนวณคะแนนเฉลี่ย
function calculateAverage() {

    let score1 = 80;
    let score2 = 75;
    let score3 = 90;

    let average = (score1 + score2 + score3) / 3;

    let result = `
คะแนนวิชา 1: ${score1}
คะแนนวิชา 2: ${score2}
คะแนนวิชา 3: ${score3}
คะแนนเฉลี่ย: ${average.toFixed(2)}
    `;

    document.getElementById("output").textContent = result;
}


// ฟังก์ชันคำนวณราคาสินค้ารวม VAT 7%
function calculateVAT() {

    let productName = "โน้ตบุ๊ก";
    let price = 25000;

    let vat = price * 0.07;
    let totalPrice = price + vat;

    let result = `
ชื่อสินค้า: ${productName}
ราคาสินค้า: ${price} บาท
VAT 7%: ${vat.toFixed(2)} บาท
ราคารวม VAT: ${totalPrice.toFixed(2)} บาท
    `;

    document.getElementById("output").textContent = result;
}