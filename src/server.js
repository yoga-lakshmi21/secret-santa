const express = require("express");
const multer = require("multer");
const cors = require("cors");
const path = require("path");

const { readCSV, writeCSV } = require("./utils/csvHandler");
const { assignSecretSanta, buildLastYearMap } = require("./services/santaService");
const Employee = require("./models/Employee");

const app = express();
app.use(cors());

const upload = multer({ dest: "uploads/" });

app.post("/generate", upload.fields([
  { name: "employees" },
  { name: "lastYear" }
]), async (req, res) => {
  try {
    const empFile = req.files["employees"][0].path;
    const lastFile = req.files["lastYear"][0].path;

    const employeesData = await readCSV(empFile);
    const lastYearData = await readCSV(lastFile);

    const employees = employeesData.map(
      (emp) =>
        new Employee(
          emp.Employee_Name.trim(),
          emp.Employee_EmailID.trim()
        )
    );

    const lastYearMap = buildLastYearMap(lastYearData);

    const result = assignSecretSanta(employees, lastYearMap);

    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(5000, () => {
  console.log("🚀 Server running on port 5000");
});