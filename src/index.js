const path = require("path");
const Employee = require("./models/Employee");
const { readCSV, writeCSV } = require("./utils/csvHandler");
const { assignSecretSanta, buildLastYearMap } = require("./services/santaService");
const { validateEmployees } = require("./validators/validator");

(async () => {
  try {
    console.log("🚀 Starting Secret Santa...");

    const employeesPath = path.join(__dirname, "./data/employees.csv");
    const lastYearPath = path.join(__dirname, "./data/lastYear.csv");
    const outputPath = path.join(__dirname, "../output/result.csv");

    // Read CSV
    const employeesData = await readCSV(employeesPath);
    const lastYearData = await readCSV(lastYearPath);

    // Convert to objects
    const employees = employeesData.map(
      (emp) =>
        new Employee(
          emp.Employee_Name.trim(),
          emp.Employee_EmailID.trim()
        )
    );

    // Validate
    validateEmployees(employees);

    // Last year map
    const lastYearMap = buildLastYearMap(lastYearData);

    // Assign
    const result = assignSecretSanta(employees, lastYearMap);

    // Write output
    writeCSV(outputPath, result);

    console.log("✅ Secret Santa assignment completed!");
    console.log("📁 Output saved in:", outputPath);
  } catch (error) {
    console.error("❌ Error:", error.message);
  }
})();