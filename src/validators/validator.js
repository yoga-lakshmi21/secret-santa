function validateEmployees(employees) {
  if (!employees || employees.length < 2) {
    throw new Error("At least 2 employees are required");
  }

  const emailSet = new Set();

  for (let emp of employees) {
    if (!emp.email || !emp.name) {
      throw new Error("Invalid employee data");
    }

    if (emailSet.has(emp.email)) {
      throw new Error(`Duplicate email found: ${emp.email}`);
    }

    emailSet.add(emp.email);
  }
}

module.exports = { validateEmployees };