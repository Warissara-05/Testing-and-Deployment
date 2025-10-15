# Testing-and-Deployment

##ฟีเจอร์หลักของระบบ
1. แปลงอุณหภูมิ Celsius --> Fahrenheit | PM(ผิง)
2. แปลงระยะทาง Meter --> Kilometer | Tester(ภู)
3. แปลงน้ำหนัก Gram --> Kilogram | Dev1(พอใจ)
4. แปลงเวลา Minute --> Hour | Dev2(จีเนียส)
5. แปลงปี buddhist Year --> Gregorian Year | Dev3(ซี)

# 🧮 Unit Converter CI/CD Pipeline

## 📘 Overview
ระบบ **Unit Converter** สำหรับแปลงหน่วยต่าง ๆ (อุณหภูมิ, ระยะทาง, น้ำหนัก, เวลา, ปี)  
ตั้งค่า **CI/CD Pipeline** สำหรับทดสอบและ deploy อัตโนมัติผ่าน GitHub Actions และ Docker Hub

---

## ⚙️ CI/CD Pipeline (Flow)

### 1️⃣ Build
- **Trigger:** เมื่อ Developer `push` โค้ดหรือสร้าง `Pull Request` ไปยัง `main`
- **Steps:**
  - รัน `npm install` เพื่อติดตั้ง dependencies  
  - รัน `npm run test` เพื่อตรวจสอบว่า build ผ่าน

### 2️⃣ Test
- รัน **Unit Test** ครอบคลุมทุกฟังก์ชันแปลงหน่วย  
- ✅ ถ้า Test **ผ่าน** → Pipeline ดำเนินต่อ  
- ❌ ถ้า Test **ไม่ผ่าน** → Pipeline หยุดและแจ้งเตือน

### 3️⃣ Build Docker Image
- ใช้ **Dockerfile** สร้าง image ใหม่ของระบบ Unit Converter

### 4️⃣ Push to Docker Hub
- Login ด้วย credentials จาก **GitHub Secrets**  
- Push image อัตโนมัติเมื่อ build สำเร็จ

---

## 🧩 Functions

| No. | Function | Description | Example |
|-----|-----------|--------------|----------|
| 1 | `convertTemperature(celsius)` | แปลงอุณหภูมิ Celsius → Fahrenheit | 0°C → 32°F |
| 2 | `convertDistance(meter)` | แปลงระยะทาง Meter → Kilometer | 1000 → 1 |
| 3 | `convertWeight(gram)` | แปลงน้ำหนัก Gram → Kilogram | 5000 → 5 |
| 4 | `convertTime(minute)` | แปลงเวลา Minute → Hour | 90 → 1.5 |
| 5 | `convertYear(buddhistYear)` | แปลงปี พ.ศ. → ค.ศ. | 2568 → 2025 |

> 🧠 Unit Test ทั้งหมดดำเนินการโดย Tester คนเดียว  
> Test Case อิงจาก **Test Specification** ด้านล่าง

---

## 🧪 Test Specification

| Test ID | Function | Description | Input | Expected Output |
|----------|-----------|-------------|--------|------------------|
| T01 | `convertTemperature(celsius)` | ตรวจสอบการแปลงค่าอุณหภูมิ | 0°C | 32°F |
| T02 | `convertDistance(meter)` | ตรวจสอบการแปลงระยะทาง | 1000 | 1 |
| T03 | `convertWeight(gram)` | ตรวจสอบการแปลงค่าน้ำหนัก | 5000 | 5 |
| T04 | `convertTime(minute)` | ตรวจสอบการแปลงเวลา | 90 | 1.5 |
| T05 | `convertYear(buddhistYear)` | ตรวจสอบการแปลงปี | 2568 | 2025 |

---

## 📁 Project Structure
unit-converter/
├── .github/
│ └── workflows/
│ └── ci.yml
├── src/
│ ├── distance.js
│ ├── reset.js
│ ├── temperature.js
│ ├── time.js
│ └── weight.js
├── test/
│ ├── distance.test.js
│ ├── reset.test.js
│ ├── temperature.test.js
│ ├── time.test.js
│ └── weight.test.js
├── .dockerignore
├── .gitignore
├── Dockerfile
├── package.json
└── README.md

- `.github/workflows/ci.yml` → ไฟล์ workflow สำหรับ CI/CD Pipeline  
- `src/` → เก็บโค้ดฟังก์ชันหลักทั้งหมด  
- `test/` → เก็บ Unit Test ของแต่ละฟังก์ชัน  
- `Dockerfile` → สำหรับ build Docker image ของระบบ  
- `.dockerignore`, `.gitignore` → ไฟล์สำหรับระบุสิ่งที่ไม่ต้องการให้ถูก build หรือ commit  
