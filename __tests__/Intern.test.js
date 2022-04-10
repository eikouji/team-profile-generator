const Intern = require("../lib/Intern");

// test intern's name is Angela, email: test@gmail.com, school: USC//

test("Can set school via constructor", () => {
    const schoolName = "USC";
    const employee = new Intern("Angela", 1, "test@gmail.com", schoolName);
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
    expect(employee.getSchool()).toBe(schoolNameN);
});