function shuffle(array) {
  let arr = [...array];

  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  return arr;
}

function buildLastYearMap(lastYearData) {
  const map = {};

  lastYearData.forEach((row) => {
    const giver = row.Employee_EmailID?.trim();
    const receiver = row.Secret_Child_EmailID?.trim();

    if (giver && receiver) {
      map[giver] = receiver;
    }
  });

  return map;
}

function assignSecretSanta(employees, lastYearMap) {
  let attempts = 0;
  const maxAttempts = 1000;

  while (attempts < maxAttempts) {
    const shuffled = shuffle(employees);
    const result = [];
    let valid = true;

    for (let i = 0; i < employees.length; i++) {
      const giver = employees[i];
      const receiver = shuffled[i];

      if (
        giver.email === receiver.email || // self
        lastYearMap[giver.email] === receiver.email // last year same
      ) {
        valid = false;
        break;
      }

      result.push({
        Employee_Name: giver.name,
        Employee_EmailID: giver.email,
        Secret_Child_Name: receiver.name,
        Secret_Child_EmailID: receiver.email,
      });
    }

    if (valid) return result;

    attempts++;
  }

  throw new Error("Unable to generate valid assignments after multiple attempts");
}

module.exports = { assignSecretSanta, buildLastYearMap };