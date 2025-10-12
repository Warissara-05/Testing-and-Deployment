# Testing-and-Deployment
ฟีเจอร์หลักของระบบ
1. แปลงอุณหภูมิ Celsius --> Fahrenheit | PM(ผิง)
2. แปลงระยะทาง Meter --> Kilometer | Tester(ภู)
3. แปลงน้ำหนัก Gram --> Kilogram | Dev1(พอใจ)
4. แปลงเวลา Minute --> Hour | Dev2(จีเนียส)
5. Reset ค่าทั้งหมด | Dev3(ซี)
6. ระบบ Login

unit-conversion-system/
│
├── src/
│   ├── conversions/
│   │   ├── temperature.js
│   │   ├── distance.js
│   │   ├── weight.js
│   │   ├── time.js
│   │   └── reset.js
│   ├── auth/
│   │   └── login.js
│   └── index.js
│
├── tests/
│   ├── temperature.test.js
│   ├── distance.test.js
│   ├── weight.test.js
│   ├── time.test.js
│   └── reset.test.js
│
├── Dockerfile
├── package.json
└── README.md
