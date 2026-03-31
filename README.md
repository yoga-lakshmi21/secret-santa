# 🎁 Secret Santa Assignment

## 📌 Overview
This project automates the Secret Santa assignment process for employees.  
Each employee is assigned another employee as their "Secret Child" based on specific constraints.

---

## 🚀 Features
- Reads employee data from CSV file
- Supports previous year assignment constraints
- Ensures:
  - No employee is assigned to themselves
  - No employee gets the same person as last year
  - Each employee gets exactly one unique secret child
- Generates output CSV with assignments
- Handles invalid inputs and edge cases
- Modular and clean code structure (OOP principles)

---

## 📁 Project Structure

secret-santa/
│
├── src/
│ ├── models/
│ ├── services/
│ ├── utils/
│ ├── validators/
│ └── index.js
│
├── data/
│ ├── employees.csv
│ └── lastYear.csv
│
├── output/
│ └── result.csv
│
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

### 1. Clone the repository

git clone https://github.com/yoga-lakshmi21/secret-santa.git
cd secret-santa


### 2. Install dependencies

npm install


### 3. Add input files
Place your CSV files inside:

data/employees.csv
data/lastYear.csv


### 4. Run the application

node src/index.js


---

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
- Add frontend UI for file upload
- Convert to API-based service
- Add logging system

---

## 👨‍💻 Author
Yogalakshmi
Email: yoga21111998@gmail.com  