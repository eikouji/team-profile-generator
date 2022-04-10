// Employee parent class //

const Employee = require("../lib/Employee");

// test employee name: John, test email: test@email.com. //

// any new employee will get info from manager, engineer, or intern js files //

test("can start Employee instance", () => {
    const employee = new Employee();
    expect(typeof(employee).toBe("object"));
});

test("can set name via constructor arguments", () => {
    const name = "John";
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
});