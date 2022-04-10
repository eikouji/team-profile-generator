const Manager = require("../lib/Manager");

// test Manager's name: Tristan. email: test@email.com. office number: 100 //

test("can set office number by constructor argument", () => {
    const managerOfficeNumber = 100;
    const employee = new Manager("Tristan", 1, "test@email.com", managerOfficeNumber);
    expect(employee.OfficeNumber).toBe(managerOfficeNumber);
});

test("can get office number with getOfficeNumber()", () => {
    const officeNumber = 100;
    const employee = newManager("Tristan", 1, "test@email.com", officeNumber);

  expect(employee.getOfficeNumber()).toBe(officeNumber);
});

test("getRole() should return \"Manager\"", () => {
    const teamManager = "Manager";
    const employee = new Manager("Tristan", 1, "test@email.com", 100);
    expect(employee.getRole()).toBe(teamManager);
});