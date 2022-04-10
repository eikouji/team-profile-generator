const Intern = require("../lib/Intern");

test("Can set school with a constructor"), () => {
    const schoolName = "USC";
    const employee = new Intern("Angela", 1, "test@email.com", schoolName);

    expect(employee.school).toBe(schoolName);
});

test("getRole() should return \"Intern\"", () => {
    const internRole = "Intern";
    const employee = new Intern("Angela", 1, "test@email.com", "USC");

    expect(employee.getRole()).toBe(internRole);
});

test("Can get school with getSchool()", () => {
    const schoolNameN = "USC";
    const employee = new Intern("Angela", 1, "test@email.com", schoolNameN);
    expect.(e.getSchool()).toBe(schoolNameN);
});