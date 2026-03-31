const fs = require("fs");
const csv = require("csv-parser");
const { Parser } = require("json2csv");

// Read CSV
const readCSV = (filePath) => {
  return new Promise((resolve, reject) => {
    const results = [];

    fs.createReadStream(filePath)
      .pipe(csv())
      .on("data", (data) => results.push(data))
      .on("end", () => resolve(results))
      .on("error", (err) => reject(err));
  });
};

// Write CSV
const writeCSV = (filePath, data) => {
  const fields = [
    "Employee_Name",
    "Employee_EmailID",
    "Secret_Child_Name",
    "Secret_Child_EmailID",
  ];

  const parser = new Parser({ fields });
  const csvData = parser.parse(data);

  fs.writeFileSync(filePath, csvData);
};

module.exports = { readCSV, writeCSV };