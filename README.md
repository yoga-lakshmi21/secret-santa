# 🎁 Secret Santa Assignment

## 📌 Overview
This is a full stack Secret Santa application that allows users to upload employee CSV files via a web interface and generates assignments using a backend API.

---

## 🚀 Features
- Upload employee CSV files through UI
- Upload previous year assignment file
- Backend API to process CSV data
- Prevent self-assignment
- Avoid previous year assignments
- Generate Secret Santa mapping
- Display results in a table (frontend)
- Supports both CLI and API-based execution

---

## 📁 Project Structure

secret-santa/
│
├── src/
│   ├── models/
│   ├── services/
│   ├── utils/
│   ├── validators/
│   ├── index.js        (CLI version)
│   └── server.js       (API version)
│
├── frontend/
│   ├── src/
│   │   └── App.js
│
├── data/
├── output/
└── README.md


---

## 📥 Input Files

### 1. employees.csv

Employee_Name,Employee_EmailID
John Doe,john@example.com

Jane Smith,jane@example.com


### 2. lastYear.csv 

Employee_Name,Employee_EmailID,Secret_Child_Name,Secret_Child_EmailID
John Doe,john@example.com,Jane Smith,jane@example.com


---

## 📤 Output File

### result.csv

Employee_Name,Employee_EmailID,Secret_Child_Name,Secret_Child_EmailID
John Doe,john@example.com,Jane Smith,jane@example.com


---

## ⚙️ Installation & Setup

### Backend (API)

cd secret-santa
npm install
node src/server.js

### Frontend (React)

cd secret-santa-frontend
npm install
npm start

## 🌿 Git Workflow

- Used separate branches for backend and frontend development
- Maintained clean commits
- Set branches as default for respective repositories
- Pushed code to GitHub


### 1. Clone the repository

Backend - git clone https://github.com/yoga-lakshmi21/secret-santa.git
Frontend - git clone https://github.com/yoga-lakshmi21/secret-santa-frontend.git

### 2. Install dependencies

npm install

For CLI Method:

### 3. Add input files
Place your CSV files inside:

data/employees.csv
data/lastYear.csv

For API integration Method:

Upload both CSV files and click the "Generate" button


### 4. Run the application

### ▶️ Run Backend (API Mode)
node src/server.js

### ▶️ Run CLI Mode (Optional)
node src/index.js

### ▶️ Run Frontend 
 npm start


---

## 🔗 API Endpoint

POST /generate

- Accepts:
  - employees.csv
  - lastYear.csv
- Returns:
  - Secret Santa assignments in JSON format

## ✅ Assumptions
- Each employee has a unique email ID
- At least 2 employees are required
- Previous year data may be partial or empty
- CSV headers must match the expected format

---

## ⚠️ Error Handling
- Duplicate email detection
- Invalid or missing data validation
- Retry mechanism for assignment generation
- File handling errors

---

## 🔁 Algorithm Approach
- Employees are shuffled using Fisher-Yates algorithm
- Assignments are validated against:
  - Self-assignment
  - Previous year assignment
- If invalid, reshuffle and retry (max 1000 attempts)

---

## 🧪 Future Improvements
- Add unit tests using Jest
- Add logging system

---

## 👨‍💻 Author
Yogalakshmi
Email: yoga21111998@gmail.com  